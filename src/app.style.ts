import styled, { css } from 'styled-components'

export const Container = styled.div`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  background-color: #323233;
`

export const Content = styled.div`
  display: flex;
`

const bottomHeight = '50vh'

export const Editor = styled.div<{ placement: 'bottom' | 'right' }>`
  position: fixed;
  width: 100%;
  height: ${bottomHeight};
  bottom: 0;
  right: 0;
  ${(props) =>
    props?.placement === 'bottom'
      ? css``
      : css`
          width: calc(100vw - 480px);
          height: 100vh;
        `};
`

export const Preview = styled.iframe<{ size: 'small' | 'normal' }>`
  width: 480px;
  border: 0;
  height: ${(props) =>
    props.size === 'normal'
      ? `calc(100vh - 24px)`
      : `calc(100vh - ${bottomHeight})`};
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
  flex-grow: 1;
  height: ${(_) => `calc(100vh - ${bottomHeight} - 24px)`};
  display: ${(props) => (props?.show ? 'block' : 'none')};
`

export const Space = styled.div`
  & > *:nth-child(n + 1) {
    margin-left: 4px;
  }
`
