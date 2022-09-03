import React from 'react'

import { getDevtoolTabs, TabType } from '@/devtool-config'

import { DevToolPanels } from './index.style'

export interface DevtoolContentProps {
  tab: TabType
  sandboxId: string
}

export const DevtoolContent = React.forwardRef<
  HTMLDivElement,
  DevtoolContentProps
>(({ tab, sandboxId }, ref) => {
  return (
    <DevToolPanels ref={ref}>
      {getDevtoolTabs({ sandboxId }).map((item) => (
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
