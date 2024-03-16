import { useTranslation } from 'react-i18next'
import { NotFoundPageBox } from './styles'

const NotFoundPage = () => {
  const { t } = useTranslation()
  return (
        <NotFoundPageBox>
            {t('Page not found')}
        </NotFoundPageBox>
  )
}

export default NotFoundPage
