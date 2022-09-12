import { getDevtoolTabs, TabType } from '@/devtool-config'
import { DragSize, DragSizeProps } from '@/drag-size'
import React, { useState } from 'react'

import {
  CloseIcon,
  Content,
  OpenIcon,
  Tabs,
  TabsClose,
  TabsList,
  TabsListItem,
} from './index.style'

export interface DevtoolTabsProps {
  onChange(showDevTools: boolean): void
  onChangeTab(tab: TabType): void
  drag: Omit<DragSizeProps, 'type'>
}

export const DevtoolTabs: React.FC<DevtoolTabsProps> = ({
  onChange,
  onChangeTab,
  drag,
}) => {
  const [showDevTools, setShowDevTools] = useState(true)

  const [tab, setTab] = useState<TabType>('components')

  return (
    <Tabs>
      <DragSize {...drag} type="horizontal" />
      <Content>
        <TabsList>
          {getDevtoolTabs({}).map((item) => (
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
      </Content>
    </Tabs>
  )
}
