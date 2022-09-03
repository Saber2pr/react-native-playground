import styled from 'styled-components'

export const DevToolPanels = styled.div<{ show: boolean }>`
  position: fixed;
  width: 100%;
  height: 30vh;
  z-index: 11;
  bottom: ${(props) => (props.show ? '0' : '-30vh')};
  left: 0;
`
