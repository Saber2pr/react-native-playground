import { ConsolePanel } from '@/console'
import DevTools from '@saber2pr/monaco/lib/react/devtools'
import React from 'react'

export type TabType = 'console' | 'components'

export type TabConfig = {
  label: string
  key: TabType
  content: React.ReactNode
}[]

export interface GetDevtoolTabsOps {
  sandboxId: string
}

export const getDevtoolTabs = ({ sandboxId }: GetDevtoolTabsOps): TabConfig => [
  {
    label: 'Components',
    key: 'components',
    content: <DevTools sandboxId={sandboxId} />,
  },
  {
    label: 'Console',
    key: 'console',
    content: <ConsolePanel sandboxId={sandboxId} />,
  },
]
