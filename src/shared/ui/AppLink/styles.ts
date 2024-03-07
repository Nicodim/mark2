import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface LinkProps {
  inverted?: boolean
}
export const LinkBox = styled(Link)<LinkProps>`
  color: ${({ theme, inverted }) => inverted ? theme.colors.invertedPrimaryColor : theme.colors.primaryColor};
`
