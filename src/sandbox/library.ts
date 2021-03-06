import { ide_library } from './../globalVars'

const libs = JSON.parse(ide_library)

export const library = {
  dependencies: libs.dependencies || {
    react: 'https://cdn.jsdelivr.net/npm/react@17.0.2/umd/react.development.js',
    'react-native':
      'https://cdn.jsdelivr.net/gh/saber2pr-forks/react-native-umd@gh-pages/dist/umd/index.umd.js',
    'react-dom':
      'https://cdn.jsdelivr.net/npm/react-dom@17.0.2/umd/react-dom.development.js',
    axios: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
    moment: 'https://cdn.jsdelivr.net/npm/moment/moment.js',
    antd: 'https://cdn.jsdelivr.net/npm/antd/dist/antd.min.js',
    '@ant-design/icons':
      'https://cdn.jsdelivr.net/npm/@ant-design/icons/dist/index.umd.js',
  },
  types: libs.types || {
    react: 'https://cdn.jsdelivr.net/npm/@types/react@17.0.2/index.d.ts',
    'react-native':
      'https://cdn.jsdelivr.net/npm/@types/react-native/index.d.ts',
    'react-dom': 'https://cdn.jsdelivr.net/npm/@types/react-dom/index.d.ts',
    csstype: 'https://cdn.jsdelivr.net/npm/csstype/index.d.ts',
    'prop-types': 'https://cdn.jsdelivr.net/npm/@types/prop-types/index.d.ts',
    axios: 'https://cdn.jsdelivr.net/npm/axios/index.d.ts',
    moment: 'https://cdn.jsdelivr.net/npm/moment/moment.d.ts',
    'global:antd':
      'https://cdn.jsdelivr.net/gh/saber2pr/antd-types-bundle@gh-pages/antd.d.ts',
    '@ant-design/icons':
      'https://cdn.jsdelivr.net/npm/@ant-design/icons/lib/icons/index.d.ts',
  },
}
