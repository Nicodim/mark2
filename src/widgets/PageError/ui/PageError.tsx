import React from 'react'
import { useTranslation } from 'react-i18next'
import Button from 'shared/ui/Button/Button'

const PageError = () => {
  const { t } = useTranslation()

  const reloadPage = () => {
    location.reload()
  }
  return (
        <div>
            {t('Something went wrong')}
            <Button onClick={reloadPage}>{t('Try to reload')}</Button>
        </div>
  )
}

export default PageError
