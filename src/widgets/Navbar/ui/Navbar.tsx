import React from 'react'
import { Links, MainLink, NavbarBox } from './styles'
import AppLink from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
  const { t } = useTranslation()
  return (
      <NavbarBox>
            <Links>
              <MainLink inverted to={'/'}>{t('Main page')}</MainLink>
              <AppLink inverted to={'/about'}>{t('About page')}</AppLink>
          </Links>
        </NavbarBox>
  )
}
