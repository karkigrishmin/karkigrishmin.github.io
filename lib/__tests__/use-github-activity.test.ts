import { renderHook, waitFor } from '@testing-library/react'
import { useGithubActivity } from '../use-github-activity'

describe('useGithubActivity', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    sessionStorage.clear()
  })

  it('returns repos on success', async () => {
    vi.stubGlobal(
      'fetch',
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => [
          {
            id: 1,
            name: 'repo',
            html_url: 'x',
            description: 'd',
            stargazers_count: 2,
            language: 'TS',
            pushed_at: '2026-01-01',
          },
        ],
      })
    )
    const { result } = renderHook(() => useGithubActivity('karkigrishmin'))
    await waitFor(() => expect(result.current.status).toBe('success'))
    if (result.current.status === 'success') {
      expect(result.current.repos[0].name).toBe('repo')
    }
  })

  it('returns error when fetch fails', async () => {
    vi.stubGlobal('fetch', vi.fn().mockRejectedValue(new Error('rate limit')))
    const { result } = renderHook(() => useGithubActivity('karkigrishmin'))
    await waitFor(() => expect(result.current.status).toBe('error'))
  })
})
