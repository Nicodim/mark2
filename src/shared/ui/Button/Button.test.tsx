import { render, screen } from '@testing-library/react'
import Button from 'shared/ui/Button/Button'
import { ThemeProvider } from 'styled-components'
import { themeDark } from 'app/styles/themes'

describe('button', () => {
  test('test', () => {
    render(<ThemeProvider theme={themeDark}><Button>TEST</Button></ThemeProvider>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })
  // test('with themeTbt', () => {
  //   render(
  //               <ThemeProvider theme={themeDark}>
  //                   <Button themeBtn={ThemeButton.CLEAR}>TEST</Button>
  //               </ThemeProvider>)
  //   expect(screen.getByText('TEST')).toHaveDescription('clear')
  // })
}
)
