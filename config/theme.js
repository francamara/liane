import { createTheme } from '@mui/material/styles'
// Create a theme instance.
const theme = createTheme({
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

export default theme
