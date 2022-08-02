import { ide_core_url, ide_locale } from './globalVars'

let loaderConfig = null

if (ide_core_url) {
  loaderConfig = loaderConfig || {}

  loaderConfig.paths = {
    vs: ide_core_url,
  }
}

if (ide_locale) {
  loaderConfig = loaderConfig || {}

  loaderConfig['vs/nls'] = {
    availableLanguages: {
      '*': ide_locale,
    },
  }
}

export { loaderConfig }
