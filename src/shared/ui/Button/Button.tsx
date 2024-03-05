import React, {ButtonHTMLAttributes, FC} from 'react';
import {StyledButton, ThemeButton} from "shared/ui/Button/styles";


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    themeBtn?: ThemeButton,
}

const Button: FC<ButtonProps> = (props) => {
    const {children,themeBtn,...otherProps} = props;
    return (
        <StyledButton {...otherProps} themeBtn={themeBtn}>
            {children}
        </StyledButton>
    );
};

export default Button;