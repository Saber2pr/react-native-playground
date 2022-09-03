import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,body {
    padding: 0;
    margin: 0;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }
`

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #323233;
`

export const Content = styled.div`
  display: flex;
`

export const Editor = styled.div<{ size: 'small' | 'normal' }>`
  flex-grow: 1;
  height: ${(props) =>
    props.size === 'normal'
      ? `calc(100vh - 24px)`
      : `calc(100vh - 30vh - 24px)`};
`

export const Preview = styled.iframe<{ size: 'small' | 'normal' }>`
  width: 480px;
  border: 0;
  height: ${(props) =>
    props.size === 'normal'
      ? `calc(100vh - 24px)`
      : `calc(100vh - 30vh - 24px)`};
  background-color: white;
`

export const PreviewSize = styled.div`
  width: 480px;
  background-color: white;
  display: none;
  align-items: center;
  justify-content: center;
  color: #80808085;
  user-select: none;
  font-size: 24px;
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

export const Space = styled.div`
  & > *:nth-child(n + 1) {
    margin-left: 4px;
  }
`
