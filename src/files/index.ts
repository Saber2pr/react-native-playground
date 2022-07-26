export const files = {
  '/main.tsx':
    typeof __IDE_TEXT__ !== 'undefined'
      ? __IDE_TEXT__
      : `import React, { Component } from 'react';
import { Text, View } from 'react-native';

// 👇 修改下面的代码试试！
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
`,
}
