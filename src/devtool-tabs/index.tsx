import { getDevtoolTabs, TabType } from '@/devtool-config'
import React, { useState } from 'react'

import {
  CloseIcon,
  OpenIcon,
  Tabs,
  TabsClose,
  TabsList,
  TabsListItem,
} from './index.style'

export interface DevtoolTabsProps {
  onChange(showDevTools: boolean): void
  onChangeTab(tab: TabType): void
  sandboxId: string
}

export const DevtoolTabs: React.FC<DevtoolTabsProps> = ({
  onChange,
  onChangeTab,
  sandboxId,
}) => {
  const [showDevTools, setShowDevTools] = useState(true)

  const [tab, setTab] = useState<TabType>('components')

  return (
    <Tabs>
      <TabsList>
        {getDevtoolTabs({ sandboxId }).map((item) => (
          <TabsListItem
            className={item.key === tab ? 'active' : ''}
            key={item.key}
            onClick={() => {
              setTab(item.key)
              onChangeTab(item.key)
            }}
          >
            {item.label}
          </TabsListItem>
        ))}
      </TabsList>
      <TabsClose
        onClick={() => {
          setShowDevTools(!showDevTools)
          onChange(!showDevTools)
        }}
      >
        {showDevTools ? CloseIcon : OpenIcon}
      </TabsClose>
    </Tabs>
  )
}
