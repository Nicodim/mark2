import styled from 'styled-components'
import { NAVBAR_HEIGHT } from 'app/styles/variables/global'
import AppLink from 'shared/ui/AppLink/AppLink'

export const NavbarBox = styled.div`
  width: 100%;
  height: ${NAVBAR_HEIGHT};
  background: ${({ theme }) => theme.background.invertedBgColor};
  display: flex;
  align-items: center;
  padding: 20px;
`

export const Links = styled.div`
  margin-left: auto;
`

export const MainLink = styled(AppLink)`
  margin-right: 15px;
`
