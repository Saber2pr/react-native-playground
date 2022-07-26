import 'normalize.css'

import React, { useRef } from 'react'
import ReactDOM from 'react-dom'

import { makeSandCode } from '@saber2pr/monaco'

import { Container, Editor, Preview, Title } from './app.style'
import { files } from './files'
import { sandbox } from './sandbox'
import { library } from './sandbox/library'

const title =
  typeof __IDE_TITLE__ === 'undefined'
    ? 'ReactNative Playground'
    : __IDE_TITLE__

const link_name =
  typeof __IDE_LINK_NAME__ === 'undefined'
    ? 'Saber2pr/react-native-playground'
    : __IDE_LINK_NAME__

const link_href =
  typeof __IDE_LINK_HREF__ === 'undefined'
    ? 'https://github.com/Saber2pr/react-native-playground'
    : __IDE_LINK_HREF__

export const App = () => {
  const previewRef = useRef<HTMLIFrameElement>()
  return (
    <>
      <Title>
        <span>{title}</span>
        <a target="_blank" href={link_href}>
          {link_name}
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
