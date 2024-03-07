import React, {Suspense} from 'react';

import {GlobalStyles} from "./styles/GlobalStyles";
import {ThemeProvider} from "styled-components";
import {themeDark, themeLight} from "app/styles/themes";
import {ContentPage, RootContainer} from "./styles/styles";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

export enum Theme {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}
const App = () => {
    const {theme} = useTheme()
    return (
        <>
            <GlobalStyles/>
            <ThemeProvider theme={theme === Theme.LIGHT? themeLight : themeDark}>
                <RootContainer>
                    <Suspense fallback="">
                        <Navbar/>
                        <ContentPage>
                            <Sidebar/>
                            <AppRouter/>
                        </ContentPage>
                    </Suspense>
                </RootContainer>
            </ThemeProvider>
        </>

    );
};

export default App;