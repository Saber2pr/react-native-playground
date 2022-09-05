import styled, { css } from 'styled-components'

export const Dragger = styled.div<{ type: 'horizontal' | 'vertical' }>`
  ${(props) =>
    props.type === 'horizontal'
      ? css`
          width: 100%;
        `
      : css`
          float: left;
          height: 100%;
        `}

  &::after {
    content: '';
    display: block;
    position: fixed;
    z-index: 10;

    ${(props) =>
      props.type === 'horizontal'
        ? css`
            width: 100%;
            height: 8px;
            cursor: row-resize;
            margin-top: -4px;
            left: 0;
          `
        : css`
            height: 100%;
            width: 8px;
            cursor: col-resize;
            margin-left: -4px;
            top: 0;
          `}
  }

  &:hover {
    &::after {
      background-color: #80aaf7;
    }
  }
`
