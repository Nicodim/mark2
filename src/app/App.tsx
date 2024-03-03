import React from 'react';
import {Link} from 'react-router-dom';

import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {themeDark, themeLight} from "./styles/themes/theme";
import {RootContainer} from "./styles/styles";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

export enum Theme {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}
const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={theme === Theme.LIGHT? themeLight : themeDark}>
                <RootContainer>
                    <button onClick={toggleTheme}>click me</button>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/about'}>О сайте</Link>
                    <AppRouter/>
                </RootContainer>
            </ThemeProvider>
        </>

    );
};

export default App;