import { HtmlContentFiles } from '@saber2pr/monaco'
import lz from 'lz-string'

import { library } from './library'

export const sandbox: HtmlContentFiles = {
  html: '<script src="https://cdn.jsdelivr.net/gh/requirejs/requirejs/require.js"></script><div id="root"></div>',
  js: `
window.process = { env: { NODE_ENV: "production" } }
const library = ${JSON.stringify(library)}
const oldLoad = requirejs.load
requirejs.load = function (context, id, url) {
  if (id in library.dependencies) {
    url = library.dependencies[id]
  }
  return oldLoad.call(requirejs, context, id, url)
}

${
  typeof __IDE_REQUIRE_CONFIG__ !== 'undefined'
    ? lz.decompress(__IDE_REQUIRE_CONFIG__)
    : ''
}

`,
  mainRequireFunc: `(app) => {
    require(['react-dom', 'react'], (ReactDOM, React) => {
      ReactDOM.render(React.createElement(app.default), document.querySelector('#root'))
    })
  }`,
}
