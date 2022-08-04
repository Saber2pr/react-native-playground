import './app.less'

import lz from 'lz-string'
import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { EditorAPI, makeSandCode } from '@saber2pr/monaco'

import {
  Container,
  Content,
  Editor,
  Preview,
  ReactDevTools,
  Space,
  Title,
} from './app.style'
import { files } from './files'
import { loaderConfig } from './getLoaderConfig'
import {
  ide_link_href,
  ide_link_name,
  ide_title,
  ide_ts_type,
} from './globalVars'
import { DevTools } from './react-devtools'
import { sandbox } from './sandbox'
import { library } from './sandbox/library'

const sandboxId = 'sandbox-preview'

export const App = () => {
  const previewRef = useRef<HTMLIFrameElement>()

  const apiRef = useRef<EditorAPI>()

  const [showDevTools, setShowDevTools] = useState(true)

  const openShareLink = () => {
    const api = apiRef.current
    if (api) {
      const text = api.getValue()
      window.open(`?text=${lz.compressToEncodedURIComponent(text)}`, '_blank')
    }
  }

  return (
    <>
      <Title>
        <span>{ide_title}</span>
        <Space>
          <a className="cursor-pointer" target="_blank" href={ide_link_href}>
            {ide_link_name}
          </a>
          <span>-</span>
          <a className="cursor-pointer" target="_blank" onClick={openShareLink}>
            Share Code
          </a>
        </Space>
      </Title>
      <Container>
        <Content>
          <Editor
            ref={apiRef}
            key={String(showDevTools)}
            size={showDevTools ? 'small' : 'normal'}
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
                  'pro',
                )
              }
              editor.getModel().onDidChangeContent(compile)
              ide_ts_type && editor.addExtraLib(ide_ts_type)
              compile()
            }}
          />
          <Preview
            size={showDevTools ? 'small' : 'normal'}
            id={sandboxId}
            ref={previewRef}
            srcDoc="[Initialization]..."
          />
        </Content>
        <ReactDevTools show={showDevTools}>
          <DevTools sandboxId={sandboxId} />
        </ReactDevTools>
      </Container>
      <Title>
        <span>React Developer Tools</span>
        <a
          className="cursor-pointer"
          onClick={() => setShowDevTools(!showDevTools)}
        >
          {showDevTools ? 'Close' : 'Open'} Devtools
        </a>
      </Title>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
