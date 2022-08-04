import styled from 'styled-components'
import { Editor as MonacoEditor } from '@saber2pr/monaco'

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #323233;
`

export const Content = styled.div`
  display: flex;
`

export const Editor = styled(MonacoEditor)<{ size: 'small' | 'normal' }>`
  flex-grow: 1;
  height: ${(props) =>
    props.size === 'normal'
      ? `calc(100vh - 48px)`
      : `calc(100vh - 30vh - 48px)`};
`

export const Preview = styled.iframe<{ size: 'small' | 'normal' }>`
  width: 480px;
  border: 0;
  height: ${(props) =>
    props.size === 'normal'
      ? `calc(100vh - 48px)`
      : `calc(100vh - 30vh - 48px)`};
  background-color: white;
`

export const Title = styled.div`
  height: 24px;
  background-color: #323233;
  color: white;
  font-size: 14px;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  padding: 0 8px;

  a {
    color: lightblue;
  }
`

export const ReactDevTools = styled.div<{ show: boolean }>`
  position: fixed;
  width: 100%;
  height: 30vh;
  bottom: 0;
  left: 0;
  display: ${(props) => (props?.show ? 'block' : 'none')};
`
