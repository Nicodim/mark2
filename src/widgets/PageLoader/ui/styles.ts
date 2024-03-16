import styled from 'styled-components'
import { NAVBAR_HEIGHT } from 'app/styles/variables/global'

export const PageLoaderBox = styled.div`
  min-height: calc(100vh - ${NAVBAR_HEIGHT});
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
`
