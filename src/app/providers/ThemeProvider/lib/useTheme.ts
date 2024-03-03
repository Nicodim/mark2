import {LOCAL_STORAGE_THEME_KEY} from "./ThemeContext";
import {useState} from "react";
export enum Theme {
    LIGHT = 'LIGHT',
    DARK = 'DARK'
}
const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT
export function useTheme() {
    const [theme, setTheme] = useState<Theme>(defaultTheme);

    const toggleTheme = () => {
        const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
        setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
    };

    return {theme, toggleTheme}
}