import React from 'react'

import { getDevtoolTabs, TabType } from '@/devtool-config'

import { DevToolPanels } from './index.style'
import { EditorAPI } from '@saber2pr/monaco'

export interface DevtoolContentProps {
  tab: TabType
  sandboxId: string
  api: EditorAPI
}

export const DevtoolContent = React.forwardRef<
  HTMLDivElement,
  DevtoolContentProps
>(({ tab, sandboxId, api }, ref) => {
  return (
    <DevToolPanels ref={ref}>
      {getDevtoolTabs({ sandboxId, api }).map((item) => (
        <div
          key={item.key}
          style={{
            display: item.key === tab ? 'block' : 'none',
            height: '100%',
          }}
        >
          {item.content}
        </div>
      ))}
    </DevToolPanels>
  )
})
