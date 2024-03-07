import styled, {css} from "styled-components";

export enum ThemeButton {
    CLEAR = 'clear',
}

export interface ButtonStyleProps {
    themeBtn?: ThemeButton;
}

export const StyledButton = styled.button<ButtonStyleProps>`
  color: ${({theme}) => theme.colors.primaryColor};
  cursor: pointer;

  ${({themeBtn}) =>
          themeBtn === ThemeButton.CLEAR &&
          css`
            padding: 0;
            border: none;
            background: none;
            outline: none;
          `}
`