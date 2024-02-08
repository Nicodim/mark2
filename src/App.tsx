import React, {Suspense, useState} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {themeDark, themeLight} from "./styles/themes/theme";
import {RootContainer} from "./styles/styles";
import {useTheme} from "./theme/useTheme";

export enum Theme {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}
const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={theme === Theme.LIGHT? themeLight: themeDark}>
                <RootContainer>
                    <button onClick={toggleTheme}>click me</button>
                    <Link to={'/'}>Главная</Link>
                    <Link to={'/about'}>О сайте</Link>
                    <Suspense fallback={<div>Loading...</div>}>
                        <Routes>
                            <Route path={'/'} element={<MainPageAsync/>}/>
                            <Route path={'/about'} element={<AboutPageAsync/>}/>
                        </Routes>
                    </Suspense>
                </RootContainer>
            </ThemeProvider>
        </>

    );
};

export default App;