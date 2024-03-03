import React from 'react';

import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {themeDark, themeLight} from "./styles/themes/theme";
import {RootContainer} from "./styles/styles";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";

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
                    <Navbar/>
                    <button onClick={toggleTheme}>click me</button>
                    <AppRouter/>
                </RootContainer>
            </ThemeProvider>
        </>

    );
};

export default App;