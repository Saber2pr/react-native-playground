import 'normalize.css'

import React, { useEffect, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import {
  Container,
  Content,
  Editor,
  Preview,
  ReactDevTools,
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
import { library } from './sandbox/library'
import { DevTools } from './react-devtools'
import { makeSandCode } from '@saber2pr/monaco'
import { sandbox } from './sandbox'

const sandboxId = 'sandbox-preview'

export const App = () => {
  const previewRef = useRef<HTMLIFrameElement>()

  const [showDevTools, setShowDevTools] = useState(true)

  return (
    <>
      <Title>
        <span>{ide_title}</span>
        <a target="_blank" href={ide_link_href}>
          {ide_link_name}
        </a>
      </Title>
      <Container>
        <Content>
          <Editor
            key={String(showDevTools)}
            size={showDevTools ? 'small' : 'normal'}
            modalFiles={files}
            theme="monokai"
            types={library.types}
            loaderConfig={loaderConfig}
            onInit={(editor) => {
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
        <a onClick={() => setShowDevTools(!showDevTools)}>
          {showDevTools ? 'Close' : 'Open'} Devtools
        </a>
      </Title>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
