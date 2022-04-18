import 'normalize.css'

import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import { makeSandCode } from '@saber2pr/monaco'

import { Container, Editor, Preview, Title } from './app.style'
import { files } from './files'
import { sandbox } from './sandbox'
import { library } from './sandbox/library'

export const App = () => {
  const previewRef = useRef<HTMLIFrameElement>()
  return (
    <>
      <Title>
        <span>ReactNative Playground</span>
        <a
          target="_blank"
          href="https://github.com/Saber2pr/react-native-playground"
        >
          Saber2pr/react-native-playground
        </a>
      </Title>
      <Container>
        <Editor
          modalFiles={files}
          theme="monokai"
          types={library.types}
          onInit={(editor) => {
            const compile = async () => {
              const { output } = await editor.getOutput()
              previewRef.current.srcdoc = makeSandCode(
                {
                  main: output,
                  ...sandbox,
                },
                'pro',
              )
            }
            editor.getModel().onDidChangeContent(compile)
            compile()
          }}
        />
        <Preview ref={previewRef} />
      </Container>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
