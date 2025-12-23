import { createTheme } from '@mui/material/styles';

export const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#8FAF7C', // Verde da marca
      light: '#A8C4A0',
      dark: '#6B8F5A',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4A5547', // Verde escuro
      light: '#6B7B6A',
      dark: '#2F3A2E',
      contrastText: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f8f9fa',
    },
    text: {
      primary: '#2D3748',
      secondary: '#718096',
    },
  },
  typography: {
    fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h3: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 25,
          textTransform: 'none',
          fontWeight: 600,
          padding: '12px 24px',
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(143, 175, 124, 0.3)',
          },
        },
        contained: {
          '&:hover': {
            boxShadow: '0 6px 20px rgba(143, 175, 124, 0.4)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 16,
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
          border: '1px solid rgba(0, 0, 0, 0.06)',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            boxShadow: '0 8px 25px rgba(0, 0, 0, 0.12)',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 500,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          borderRadius: '16px 0 0 16px',
        },
      },
    },
  },
});