import styled from 'styled-components';

export const DevToolPanels = styled.div<{ show: boolean }>`
  position: fixed;
  width: 100%;
  height: 30vh;
  bottom: 0;
  left: 0;
  display: ${(props) => (props?.show ? 'block' : 'none')};
`