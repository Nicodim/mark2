import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeProps {
  toggleTheme: () => void
  theme?: Theme
}
export function useTheme (): UseThemeProps {
  const { theme, setTheme } = useContext(ThemeContext)
  const toggleTheme = () => {
    const newTheme = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK
    if (setTheme) {
      setTheme(newTheme)
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
