import lz from 'lz-string'
import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import {
  Editor as MonacoEditor,
  EditorAPI,
  makeSandCode,
} from '@saber2pr/monaco'

import pkg from '../package.json'
import {
  Container,
  Content,
  Editor,
  GlobalStyle,
  Preview,
  PreviewSize,
  Space,
  Title,
} from './app.style'
import { TabType } from './devtool-config'
import { DevtoolContent } from './devtool-content'
import { DevtoolTabs } from './devtool-tabs'
import { DragSize } from './drag-size'
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
  const previewSizeRef = useRef<HTMLDivElement>()
  const wrapRef = useRef<HTMLDivElement>()
  const devtoolContentRef = useRef<HTMLDivElement>()

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

  const onDragStart = () => {
    const iframe = previewRef.current
    const iframeSize = previewSizeRef.current
    if (iframe && iframeSize) {
      iframe.style.display = 'none'
      iframeSize.style.display = 'flex'
    }
  }
  const onDragEnd = () => {
    const iframe = previewRef.current
    const iframeSize = previewSizeRef.current
    if (iframe && iframeSize) {
      iframe.style.display = 'block'
      iframeSize.style.display = 'none'
    }
  }
  const onDragSize = (pos: number, type: 'vertical' | 'horizontal') => {
    const iframe = previewRef.current
    const iframeSize = previewSizeRef.current
    const wrap = wrapRef.current
    const devtoolContent = devtoolContentRef.current
    const api = apiRef.current
    if (iframe && iframeSize && wrap && devtoolContent && api) {
      if (type === 'vertical') {
        iframe.style.width = `${pos}px`
        iframeSize.style.width = `${pos}px`
        const sizeHeight = iframeSize.clientHeight
        iframeSize.innerHTML = `<div>${pos} x ${sizeHeight}</div>`
        wrap.style.width = `calc(100vw - ${pos}px)`
      } else {
        iframe.style.height = `${pos}px`
        iframeSize.style.height = `${pos}px`
        const sizeWidth = iframeSize.clientWidth
        iframeSize.innerHTML = `<div>${sizeWidth} x ${pos}</div>`
        wrap.style.height = `${pos}px`
        devtoolContent.style.height = `calc(100vh - ${pos}px - 24px)`
      }
      api.getInstance().layout()
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
        <PreviewSize ref={previewSizeRef} />
        <Editor ref={wrapRef} size={showDevTools ? 'small' : 'normal'}>
          <DragSize
            type="vertical"
            onMove={onDragSize}
            onEnd={onDragEnd}
            onStart={onDragStart}
          />
          <Title>
            <span>
              {ide_title} v{pkg.version}
            </span>
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
        ref={devtoolContentRef}
        tab={tab}
        sandboxId={sandboxId}
        showDevTools={showDevTools}
      />
      <DevtoolTabs
        sandboxId={sandboxId}
        onChange={setShowDevTools}
        onChangeTab={setTab}
        drag={{
          onMove: onDragSize,
          onEnd: onDragEnd,
          onStart: onDragStart,
        }}
      />
    </Container>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
