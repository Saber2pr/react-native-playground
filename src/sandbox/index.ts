import { ide_html, ide_require_config } from './../globalVars'
import { HtmlContentFiles } from '@saber2pr/monaco'

import { library } from './library'

export const sandbox: HtmlContentFiles = {
  html: `${ide_html}`,
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

${ide_require_config}

`,
  mainRequireFunc: `(app) => {
    require(['react-dom', 'react'], (ReactDOM, React) => {
      ReactDOM.render(React.createElement(app.default), document.querySelector('#root'))
    })
  }`,
}
