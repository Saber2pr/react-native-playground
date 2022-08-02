declare const __IDE_TITLE__: string
declare const __IDE_LOCALE__: string
declare const __IDE_LINK_NAME__: string
declare const __IDE_LINK_HREF__: string
declare const __IDE_HTML__: string
declare const __IDE_TEXT__: string
declare const __IDE_LIBRARY__: string
declare const __IDE_REQUIRE_CONFIG__: string
declare const __IDE_CORE_URL__: string
declare const __IDE_TS_TYPE__: string

import lz from 'lz-string'

export const ide_title =
  typeof __IDE_TITLE__ !== 'undefined'
    ? lz.decompressFromBase64(__IDE_TITLE__)
    : 'ReactNative Playground'

export const ide_link_name =
  typeof __IDE_LINK_NAME__ !== 'undefined'
    ? lz.decompressFromBase64(__IDE_LINK_NAME__)
    : 'Saber2pr/react-native-playground'

export const ide_link_href =
  typeof __IDE_LINK_HREF__ !== 'undefined'
    ? lz.decompressFromBase64(__IDE_LINK_HREF__)
    : 'https://github.com/Saber2pr/react-native-playground'

export const ide_html =
  typeof __IDE_HTML__ !== 'undefined'
    ? lz.decompressFromBase64(__IDE_HTML__)
    : '<script src="https://cdn.jsdelivr.net/gh/requirejs/requirejs/require.js"></script><div id="root"></div>'

export const ide_text =
  typeof __IDE_TEXT__ !== 'undefined'
    ? lz.decompressFromBase64(__IDE_TEXT__)
    : `import React, { Component } from 'react';
import { Text, View } from 'react-native';

// 👇 Try to edit the code below！
export default class BlueIsCool extends Component {
  render() {
    return (
      <Text>
        There is a blue square
        <View style={{width: 50, height: 50, backgroundColor: 'steelblue'}} />
        in between my text.
      </Text>
    );
  }
}
`

export const ide_library =
  typeof __IDE_LIBRARY__ !== 'undefined'
    ? lz.decompressFromBase64(__IDE_LIBRARY__)
    : '{}'

export const ide_require_config =
  typeof __IDE_REQUIRE_CONFIG__ !== 'undefined'
    ? lz.decompressFromBase64(__IDE_REQUIRE_CONFIG__)
    : ''

export const ide_core_url =
  typeof __IDE_CORE_URL__ !== 'undefined'
    ? lz.decompressFromBase64(__IDE_CORE_URL__)
    : null

export const ide_ts_type =
  typeof __IDE_TS_TYPE__ !== 'undefined'
    ? lz.decompressFromBase64(__IDE_TS_TYPE__)
    : null

export const ide_locale = typeof __IDE_LOCALE__ !== 'undefined'
? lz.decompressFromBase64(__IDE_LOCALE__)
: null