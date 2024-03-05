import React from 'react';
import {useTheme} from "app/providers/ThemeProvider";


const ThemeSwitcher = () => {
    const {toggleTheme} = useTheme()
    return (
        <button onClick={toggleTheme}>click me</button>
    );
};

export default ThemeSwitcher;