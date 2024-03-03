import styled from "styled-components";


export const RootContainer = styled.div`
  background: ${({theme}) => theme.background.bgColor};
  color: ${({theme}) => theme.colors.primaryColor};

  min-height: 100vh;
`;