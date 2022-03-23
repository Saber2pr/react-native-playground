import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  overflow: hidden;
  padding-bottom: 24px;
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
