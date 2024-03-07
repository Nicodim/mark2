import React from 'react'
import { Theme, useTheme } from 'app/providers/ThemeProvider'

import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import Button from 'shared/ui/Button/Button'
import { ThemeButton } from 'shared/ui/Button/styles'

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useTheme()
  return (
        <Button themeBtn={ThemeButton.CLEAR} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <LightIcon/> : <DarkIcon/>}
        </Button>
  )
}

export default ThemeSwitcher
