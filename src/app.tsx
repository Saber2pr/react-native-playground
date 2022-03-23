import 'normalize.css'

import React, { useEffect, useRef } from 'react'
import ReactDOM from 'react-dom'

import {
  addModuleDeclaration,
  compileTS,
  createEditor,
  makeSandCode,
} from '@saber2pr/monaco'

import { Container, Editor, Preview, Title } from './app.style'
import { files } from './files'
import { sandbox } from './sandbox'
import { library } from './sandbox/library'

export const App = () => {
  const ref = useRef<HTMLDivElement>()
  const previewRef = useRef<HTMLIFrameElement>()

  useEffect(() => {
    const editor = createEditor(ref.current, files, {
      theme: 'vs-dark',
    })

    Promise.all(
      Object.keys(library.types).map((id) =>
        addModuleDeclaration(library.types[id], id),
      ),
    )

    const compile = () =>
      compileTS(editor.getModel().uri).then(async (js) => {
        previewRef.current.srcdoc = makeSandCode(
          {
            main: js,
            ...sandbox,
          },
          'pro',
        )
      })

    editor.getModel().onDidChangeContent(compile)

    compile()
  }, [])

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
        <Editor ref={ref} />
        <Preview ref={previewRef} />
      </Container>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
