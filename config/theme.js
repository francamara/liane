import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'
// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
  typography: {
    //fontFamily: 'Caecilia',
    h1: {
      color: '#19857b'
    }
  }
})
export default theme
