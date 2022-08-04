import 'normalize.css'

import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'


import { Container, Editor, Preview, Title } from './app.style'
import { files } from './files'
import { loaderConfig } from './getLoaderConfig'
import {
  ide_link_href,
  ide_link_name,
  ide_title,
  ide_ts_type,
} from './globalVars'
import { library } from './sandbox/library'
import { DevTools } from './DevTools'
import { makeSandCode } from '@saber2pr/monaco'
import { sandbox } from './sandbox'

export const App = () => {
  const previewRef = useRef<HTMLIFrameElement>()
 
  return (
    <>
      <Title>
        <span>{ide_title}</span>
        <a target="_blank" href={ide_link_href}>
          {ide_link_name}
        </a>
      </Title>
      <Container>
        <Editor
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
        <Preview id="sandbox-preview" ref={previewRef} srcDoc="[Initialization]..." />
        <DevTools/>
      </Container>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
