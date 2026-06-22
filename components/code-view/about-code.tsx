'use client'

import { CodeLine, CodePanel, Key, Punc, Str } from './code-panel'

export function AboutCode() {
  return (
    <CodePanel filename="about.spec.ts" className="w-full">
      <pre className="m-0">
        <code>
          <CodeLine>
            <Key>{'// what the work optimizes for'}</Key>
          </CodeLine>
          <CodeLine>
            <Punc>interface</Punc> Engineer {'{'}
          </CodeLine>

          <CodeLine indent={2}>
            discipline<Punc>:</Punc> <Str>{"'design + code, one standard'"}</Str>
            <Punc>,</Punc>
          </CodeLine>
          <CodeLine indent={2}>
            craft<Punc>:</Punc> <Punc>[</Punc>
            <Str>{"'pixel-perfect'"}</Str>
            <Punc>,</Punc> <Str>{"'accessible'"}</Str>
            <Punc>,</Punc> <Str>{"'production-ready'"}</Str>
            <Punc>]</Punc>
            <Punc>,</Punc>
          </CodeLine>
          <CodeLine indent={2}>
            principles<Punc>:</Punc> <Punc>[</Punc>
          </CodeLine>
          <CodeLine indent={4}>
            <Str>{"'component architecture'"}</Str>
            <Punc>,</Punc>
          </CodeLine>
          <CodeLine indent={4}>
            <Str>{"'design systems that scale'"}</Str>
            <Punc>,</Punc>
          </CodeLine>
          <CodeLine indent={4}>
            <Str>{"'tested by default'"}</Str>
            <Punc>,</Punc>
          </CodeLine>
          <CodeLine indent={2}>
            <Punc>]</Punc>
            <Punc>,</Punc>
          </CodeLine>

          <CodeLine indent={2}>
            <Key>{'// measured outcomes'}</Key>
          </CodeLine>
          <CodeLine indent={2}>
            metrics<Punc>:</Punc> {'{'}
          </CodeLine>
          <CodeLine indent={4}>
            yearsExperience<Punc>:</Punc> <Punc>4</Punc>
            <Punc>,</Punc>
          </CodeLine>
          <CodeLine indent={4}>
            perfGain<Punc>:</Punc> <Str>{"'39.5%'"}</Str>
            <Punc>,</Punc> <Key>{'// React Query + Zustand'}</Key>
          </CodeLine>
          <CodeLine indent={4}>
            usersReached<Punc>:</Punc> <Str>{"'10K+'"}</Str>
            <Punc>,</Punc>
          </CodeLine>
          <CodeLine indent={2}>
            {'}'}
            <Punc>,</Punc>
          </CodeLine>

          <CodeLine indent={2}>
            ecosystems<Punc>:</Punc> <Punc>[</Punc>
            <Str>{"'Web2'"}</Str>
            <Punc>,</Punc> <Str>{"'Web3 / Cardano'"}</Str>
            <Punc>]</Punc>
            <Punc>,</Punc>
          </CodeLine>
          <CodeLine>{'}'}</CodeLine>
        </code>
      </pre>
    </CodePanel>
  )
}
