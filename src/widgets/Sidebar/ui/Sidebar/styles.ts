import styled, { css } from 'styled-components'
import { NAVBAR_HEIGHT, SIDEBAR_WIDTH, SIDEBAR_WIDTH_COLLAPSED } from 'app/styles/variables/global'

export interface SidebarBoxProps {
  collapsed?: boolean
}

export const SidebarBox = styled.div<SidebarBoxProps>`
  height: calc(100vh - ${NAVBAR_HEIGHT});
  width: ${SIDEBAR_WIDTH};
  background: ${({ theme }) => theme.background.invertedBgColor};
  position: relative;
  transition: width 0.3s;


  ${({ collapsed }) => collapsed &&
          css`
            width: ${SIDEBAR_WIDTH_COLLAPSED};
          `}
`

export const Switchers = styled.div`
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  width: 100%;
`
