import Outline from '@saber2pr/monaco/lib/react/devtools/outline'
import { EditorAPI } from '@saber2pr/monaco'
import DevTools from '@saber2pr/monaco/lib/react/devtools'
import ConsolePanel from '@saber2pr/monaco/lib/react/devtools/console'
import React from 'react'

export type TabType = 'console' | 'components' | 'outline'

export type TabConfig = {
  label: string
  key: TabType
  content: React.ReactNode
}[]

export interface GetDevtoolTabsOps {
  sandboxId?: string
  api?: EditorAPI
}

export const getDevtoolTabs = ({
  sandboxId,
  api,
}: GetDevtoolTabsOps): TabConfig => [
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
  {
    label: 'Outline',
    key: 'outline',
    content: <Outline api={api} />,
  },
]
