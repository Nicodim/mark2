import styled from 'styled-components'

export const RootContainer = styled.div`
  background: ${({ theme }) => theme.background.bgColor};
  color: ${({ theme }) => theme.colors.primaryColor};

  min-height: 100vh;
`

export const ContentPage = styled.div`
  display: flex;
`

export const PageWrapper = styled.div`
  flex-grow: 1;
  padding: 20px;
`
