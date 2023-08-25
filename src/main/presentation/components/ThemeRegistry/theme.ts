import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import '@fontsource/handjet/500.css'

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const theme = createTheme({
  palette: {
    primary: {
      main: '#01080e'
    },
    secondary: {
      main: '#d7f9ff'
    },
    success: {
      main: '#2bdefd'
    },
    text: {
      primary: '#000',
      secondary: '#9e9e9e'
    },
    background: {
      default: '#01080e'
    },
  },
  typography: {
    fontFamily: [roboto.style.fontFamily, 'Handjet'].join(',')
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === 'info' && {
            backgroundColor: 'pink',
          }),
        }),
      },
    },
  },
});

export default theme;