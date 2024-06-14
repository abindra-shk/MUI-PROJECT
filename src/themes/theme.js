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
    fontSize: '1.6rem',
    color: '#777;',
    h6: {
      fontSize: '1.6rem',
      fontWeight: 700,
      textTransform: 'uppercase',
      marginBottom: '1.5rem',
    },
    body1: {
      fontSize: '1.6rem',
      fontWeight: 400,
      lineHeight: 1.7,
      marginBottom: '3rem',
    },
    h4: {
      textAlign: 'center',
      fontWeight: 700,
      fontSize: '3.5rem',
      background: 'linear-gradient(to right, #7ed56f, #28b485)',
      WebkitBackgroundClip: 'text',
      color: 'transparent',
      letterSpacing: '0.2rem',
      transition: 'all 0.2s',
      marginBottom: '5rem',
      textTransform: 'uppercase',
      '@media (max-width: 1200px)': {
        fontSize: '3rem',
      },
      '@media (max-width: 991px)': {
        fontSize: '2.5rem',
      },
      '@media (max-width: 768px)': {
        fontSize: '2.5rem',
        marginBottom: '3rem',
      },
      '@media (max-width: 576px)': {
        fontSize: '2.5rem',
        marginBottom: '3rem',
      },
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 10rem',
          '@media (max-width: 992px)': {
            padding: '0 8rem',
          },
          '@media (max-width: 768px)': {
            padding: '0 5rem',
          },
          '@media (max-width: 576px)': {
            padding: '0 3rem',
          },
        },
      },
    },
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
            backgroundColor: '#fff',
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
    MuiCard: {
      styleOverrides: {
        root: {
          color: 'inherit',
          backgroundColor: '#f7f7f7',
        },
      },
    },
  },
});

export default theme;
