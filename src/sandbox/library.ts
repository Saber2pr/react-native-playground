const libs =
  typeof __IDE_LIBRARY__ !== 'undefined' ? JSON.parse(__IDE_LIBRARY__) : {}

export const library = {
  dependencies: {
    react: 'https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js',
    'react-native':
      'https://cdn.jsdelivr.net/gh/saber2pr-forks/react-native-umd@gh-pages/dist/umd/index.umd.js',
    'react-dom':
      'https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js',
    axios: 'https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js',
    moment: 'https://cdn.jsdelivr.net/npm/moment/moment.js',
    antd: 'https://cdn.jsdelivr.net/npm/antd/dist/antd.min.js',
    '@ant-design/icons':
      'https://cdn.jsdelivr.net/npm/@ant-design/icons/dist/index.umd.js',
    ...(libs.dependencies || {}),
  },
  types: {
    react: 'https://cdn.jsdelivr.net/npm/@types/react/index.d.ts',
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
    ...(libs.types || {}),
  },
}