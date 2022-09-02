import styled from 'styled-components'

export const Container = styled.div`
  height: 30vh;
  overflow: auto;
  font-size: 12px;
  pre {
    line-height: 1.5rem;
    margin: 0;
    border-bottom: 1px solid #e8e8e8;
    padding-left: 20px;
    min-height: 20px;
    &:hover {
      background-color: #ecf1f8;
      border-bottom: 1px solid #ccdef5;
    }
  }
`
