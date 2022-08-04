declare const inspect: (element: HTMLElement) => void

export const inspectDOMNode = (element: HTMLElement) => {
  if (typeof inspect !== 'undefined') {
    inspect(element)
  }
}

export const handleSelectFiberEvent = (
  iframe: HTMLIFrameElement,
  data: {
    event: string
    payload: number
  },
) => {
  if (data?.event === 'selectFiber' && iframe) {
    const __REACT_DEVTOOLS_GLOBAL_HOOK__ =
      iframe?.contentWindow?.__REACT_DEVTOOLS_GLOBAL_HOOK__

    const renderers = __REACT_DEVTOOLS_GLOBAL_HOOK__?.renderers
    if (renderers && renderers.keys) {
      // TODO: select first renderer
      const rendererId = Array.from(renderers.keys())[0]
      if (rendererId) {
        const reactDevtoolsAgent =
          __REACT_DEVTOOLS_GLOBAL_HOOK__?.reactDevtoolsAgent
        if (reactDevtoolsAgent) {
          const interf = reactDevtoolsAgent?.rendererInterfaces?.[rendererId]
          if (interf && interf.findNativeNodesForFiberID && data?.payload) {
            const nodes = interf.findNativeNodesForFiberID(data.payload)
            const node = nodes?.[0]
            console.log('🚀 ~ file: inspectDOMNode.ts ~ line 32 ~ node', node)
            if (node) {
              inspectDOMNode(node)
            }
          }
        }
      }
    }
  }
}
