import { createTheme } from '@mui/material/styles'
//responsiveFontSizes
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

theme.typography.h6 = {
  fontFamily: 'Caecilia',
  fontSize: '1.2rem',
  '@media (max-width:1200px)': { fontSize: '1rem' },
  '@media (max-width:1000px)': { fontSize: '0.8rem' }
}

theme.typography.body1 = {
  '@media (max-width:1000px)': { textAlign: 'left' }
}
/*theme = responsiveFontSizes(theme) */
export default theme
