import React from 'react'
import { useTranslation } from 'react-i18next'
import { ThemeButton } from 'shared/ui/Button/styles'
import { LangButton } from 'widgets/LangSwitcher/ui/styles'

const LangSwitcher = () => {
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }

  return (
      <LangButton
            themeBtn={ThemeButton.CLEAR}
            onClick={toggle}
        >
            {t('Language')}
        </LangButton>
  )
}

export default LangSwitcher
