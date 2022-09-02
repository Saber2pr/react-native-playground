import styled, { css } from 'styled-components'
import React from 'react'

const CssBorder = css`
  display: block;
  content: '';
  position: absolute;
  height: 1px;
  width: 100%;
  background-color: #cacdd1;
`

export const Tabs = styled.div`
  height: 24px;
  background-color: #f1f3f4;
  line-height: 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 8px;
  position: relative;
  &::before {
    ${CssBorder}
    left: 0;
    top: -1px;
  }
  &::after {
    ${CssBorder}
    left: 0;
    bottom: -1px;
  }
`

export const CloseIcon = (
  <svg
    viewBox="0 0 1045 1024"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
  >
    <path d="M282.517333 213.376l-45.354666 45.162667L489.472 512 237.162667 765.461333l45.354666 45.162667L534.613333 557.354667l252.096 253.269333 45.354667-45.162667-252.288-253.44 252.288-253.482666-45.354667-45.162667L534.613333 466.624l-252.096-253.226667z"></path>
  </svg>
)

export const OpenIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path
      fill="currentColor"
      d="
M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12
17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3
3-1.34 3-3-1.34-3-3-3z
"
    ></path>
  </svg>
)

export const TabsClose = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`

export const TabsList = styled.div`
  display: flex;
  align-items: center;
`

export const TabsListItem = styled.div`
  cursor: pointer;
  padding: 0 8px;
  color: #5f6368;
  font-size: 12px;
  position: relative;

  &:hover {
    background-color: #dee1e6;
    color: #000;
  }
  &.active {
    &::after {
      ${CssBorder}
      left: 0;
      bottom: 0;
      background-color: #2773e8;
    }
  }
`
