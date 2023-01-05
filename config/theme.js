import { createTheme, responsiveFontSizes } from '@mui/material/styles'
// Create a theme instance.
let theme = createTheme({

  typography: {
    fontFamily: 'Caecilia',
    h1: {
      color: '#fafafa'
    },
  },
  palette: {
    neutral: {
      light: '#fafafa',
      main: '#fafafa',
      dark: '#fafafa',
      contrastText: '#000'
    }
  }
})

theme = responsiveFontSizes(theme)
export default theme
