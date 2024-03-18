import React from 'react'

import { screen } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { ThemeProvider } from 'styled-components'
import { themeDark } from 'app/styles/themes'
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslation/renderWithTranslation'

// import { componentRender } from '@/shared/lib/tests/componentRender/componentRender'

describe('Sidebar', () => {
  test('with only first param', () => {
    renderWithTranslation(<ThemeProvider theme={themeDark}><Sidebar /></ThemeProvider>)
    expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  })

  // test('test route', () => {
  //   renderWithTranslation(<ThemeProvider theme={themeDark}><Sidebar /></ThemeProvider>)
  //   const toggleBtn = screen.getByTestId('sidebar-toggle')
  //   expect(screen.getByTestId('sidebar')).toBeInTheDocument()
  //   fireEvent.click(toggleBtn)
  //   expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
  // })
})
