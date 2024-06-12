import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

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
    fontFamily: [
      'Lato',
      'Roboto',
      'Helvetica Neue',
      'Arial',
      'sans-serif',
    ].join(','),
    fontSize: 16,
    body1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          textDecoration: 'none',
          padding: '15px 40px',
          display: 'inline-block',
          borderRadius: '100px',
          transition: 'all 0.2s',
          position: 'relative',
          fontFamily: 'Lato, Roboto, Helvetica Neue, Arial, sans-serif',
          fontSize: '1.6rem',
          fontWeight: 400,
          lineHeight: 1.7,
          color: '#777',

          '&:hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
            backgroundColor: '#fff', // Maintain background color on hover
          },

          '&:active': {
            transform: 'translateY(-1px)',
            boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
          },

          '&::after': {
            content: '""',
            display: 'inline-block',
            height: '100%',
            width: '100%',
            borderRadius: '100px',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1,
            transition: 'all 0.4s',
            backgroundColor: '#fff',
          },

          '&:hover::after': {
            transform: 'scaleX(1.4) scaleY(1.6)',
            opacity: 0,
          },

          animation: 'moveInBottom 0.5s ease-out 0.75s',
          animationFillMode: 'backwards',
        },
        contained: {
          backgroundColor: '#fff',
          color: '#777',

          '&:hover': {
            backgroundColor: '#fff',
          },
        },
      },
    },
  },
});

export default theme;
