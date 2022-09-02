import lz from 'lz-string'
import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import {
  Editor as MonacoEditor,
  EditorAPI,
  makeSandCode,
} from '@saber2pr/monaco'

import {
  Container,
  Content,
  Editor,
  GlobalStyle,
  Preview,
  Space,
  Title,
} from './app.style'
import { TabType } from './devtool-config'
import { DevtoolContent } from './devtool-content'
import { DevtoolTabs } from './devtool-tabs'
import { files } from './files'
import { loaderConfig } from './getLoaderConfig'
import {
  ide_link_href,
  ide_link_name,
  ide_title,
  ide_ts_type,
} from './globalVars'
import { sandbox } from './sandbox'
import { library } from './sandbox/library'

const sandboxId = 'sandbox-preview'

export const App = () => {
  const previewRef = useRef<HTMLIFrameElement>()

  const apiRef = useRef<EditorAPI>()

  const [showDevTools, setShowDevTools] = useState(true)
  const [tab, setTab] = useState<TabType>('components')

  const openShareLink = () => {
    const api = apiRef.current
    if (api) {
      const text = api.getValue()
      self.open(`?text=${lz.compressToEncodedURIComponent(text)}`, '_blank')
    }
  }

  return (
    <Container>
      {/* @ts-ignore */}
      <GlobalStyle />
      <Content>
        <Preview
          size={showDevTools ? 'small' : 'normal'}
          id={sandboxId}
          ref={previewRef}
          srcDoc="[Sandbox Initialization]..."
        />
        <Editor size={showDevTools ? 'small' : 'normal'}>
          <Title>
            <span>{ide_title}</span>
            <Space>
              <a
                className="cursor-pointer"
                target="_blank"
                href={ide_link_href}
              >
                {ide_link_name}
              </a>
              <span>-</span>
              <a
                className="cursor-pointer"
                target="_blank"
                onClick={openShareLink}
              >
                Share Code
              </a>
            </Space>
          </Title>
          <MonacoEditor
            style={{ height: 'calc(100% - 24px)' }}
            ref={apiRef}
            key={String(showDevTools + tab)}
            modalFiles={files}
            theme="monokai"
            types={library.types}
            loaderConfig={loaderConfig}
            onInit={(editor) => {
              apiRef.current = editor
              const compile = async () => {
                previewRef.current.srcdoc = `[TS Compiling]...`
                const { output } = await editor.getOutput()
                previewRef.current.srcdoc = makeSandCode(
                  {
                    main: `${output}`,
                    ...sandbox,
                  },
                  'dev',
                )
              }
              editor.getModel().onDidChangeContent(compile)
              ide_ts_type && editor.addExtraLib(ide_ts_type)
              compile()
            }}
          />
        </Editor>
      </Content>
      <DevtoolContent
        tab={tab}
        sandboxId={sandboxId}
        showDevTools={showDevTools}
      />
      <DevtoolTabs
        sandboxId={sandboxId}
        onChange={setShowDevTools}
        onChangeTab={setTab}
      />
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
