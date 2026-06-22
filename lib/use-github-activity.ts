'use client'

import { useEffect, useReducer } from 'react'

export interface Repo {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  pushed_at: string
}

export type GithubActivityState =
  | { status: 'loading' }
  | { status: 'success'; repos: Repo[] }
  | { status: 'error' }

type Action = { type: 'success'; repos: Repo[] } | { type: 'error' }

function reducer(_state: GithubActivityState, action: Action): GithubActivityState {
  switch (action.type) {
    case 'success':
      return { status: 'success', repos: action.repos }
    case 'error':
      return { status: 'error' }
  }
}

interface RawRepo {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  language: string | null
  pushed_at: string
}

function mapRepo(raw: RawRepo): Repo {
  return {
    id: raw.id,
    name: raw.name,
    html_url: raw.html_url,
    description: raw.description,
    stargazers_count: raw.stargazers_count,
    language: raw.language,
    pushed_at: raw.pushed_at,
  }
}

function isRawRepo(value: unknown): value is RawRepo {
  if (typeof value !== 'object' || value === null) return false
  const v = value as Record<string, unknown>
  return (
    typeof v['id'] === 'number' &&
    typeof v['name'] === 'string' &&
    typeof v['html_url'] === 'string' &&
    (v['description'] === null || typeof v['description'] === 'string') &&
    typeof v['stargazers_count'] === 'number' &&
    (v['language'] === null || typeof v['language'] === 'string') &&
    typeof v['pushed_at'] === 'string'
  )
}

function readCache(key: string): Repo[] | null {
  try {
    const raw = sessionStorage.getItem(key)
    if (!raw) return null
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) return null
    if (parsed.every(isRawRepo)) return parsed.map(mapRepo)
    return null
  } catch {
    return null
  }
}

function writeCache(key: string, repos: Repo[]): void {
  try {
    sessionStorage.setItem(key, JSON.stringify(repos))
  } catch {
    // quota exceeded or private browsing — silently ignore
  }
}

export function useGithubActivity(username: string): GithubActivityState {
  const cacheKey = `gh:${username}`

  const cached = readCache(cacheKey)
  const [state, dispatch] = useReducer(
    reducer,
    cached ? ({ status: 'success', repos: cached } as GithubActivityState) : { status: 'loading' }
  )

  useEffect(() => {
    const controller = new AbortController()

    async function fetchRepos() {
      try {
        const res = await fetch(
          `https://api.github.com/users/${username}/repos?sort=pushed&per_page=6`,
          { signal: controller.signal }
        )

        if (!res.ok) {
          dispatch({ type: 'error' })
          return
        }

        const data: unknown = await res.json()

        if (!Array.isArray(data)) {
          dispatch({ type: 'error' })
          return
        }

        const repos = data.filter(isRawRepo).map(mapRepo)
        writeCache(cacheKey, repos)
        dispatch({ type: 'success', repos })
      } catch (err) {
        if (err instanceof Error && err.name === 'AbortError') return
        dispatch({ type: 'error' })
      }
    }

    void fetchRepos()

    return () => {
      controller.abort()
    }
  }, [username, cacheKey])

  return state
}
