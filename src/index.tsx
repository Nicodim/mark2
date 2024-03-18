import App from './app/App'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import './shared/config/i18n/i18n'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'

const container = document.getElementById('root')

if (!container) {
  throw new Error(
    'Контейнер root не найден. НЕ удалось вмонтировать реакт приложение'
  )
}

const root = createRoot(container) // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
        <ErrorBoundary>
            <ThemeProvider>
                <App/>
            </ThemeProvider>
        </ErrorBoundary>
    </BrowserRouter>
)
