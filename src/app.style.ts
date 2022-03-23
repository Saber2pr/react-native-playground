import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  padding: 24px 0;
  box-sizing: border-box;
  background-color: #323233;
`
export const Editor = styled.div`
  flex-grow: 1;
  height: calc(100vh - 48px);
`

export const Preview = styled.iframe`
  width: 480px;
  border: 0;
  height: calc(100vh - 48px);
  background-color: white;
`
