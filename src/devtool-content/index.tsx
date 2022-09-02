import React from 'react'

import { getDevtoolTabs, TabType } from '@/devtool-config'

import { DevToolPanels } from './index.style'

export interface DevtoolContentProps {
  showDevTools: boolean
  tab: TabType
  sandboxId: string
}

export const DevtoolContent: React.FC<DevtoolContentProps> = ({
  showDevTools,
  tab,
  sandboxId,
}) => {
  return (
    <DevToolPanels show={showDevTools}>
      {getDevtoolTabs({ sandboxId }).map((item) => (
        <div
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
}
