import React, { useState } from 'react';
import {
  Box,
  Container,
  Paper,
  TextField,
  Button,
  Typography,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import '../../styles/AdminLogin.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#684824',
      light: '#856c48',
      dark: '#523920',
    },
    secondary: {
      main: '#a2906d',
      light: '#c0b592',
      dark: '#856c48',
    },
    background: {
      default: '#e4e4c1',
      paper: '#c0b592',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });
  const [error, setError] = useState('');

  const validateUsername = (username) => {
    return username.length >= 3; // Minimum 3 characters for username
  };

  const validatePassword = (password) => {
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /\d/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    return (
      password.length >= minLength &&
      hasUpperCase &&
      hasLowerCase &&
      hasNumbers &&
      hasSpecialChar
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { username, password } = credentials;

    if (!username || !password) {
      setError('Please fill in all fields');
      return;
    }

    if (!validateUsername(username)) {
      setError('Username must be at least 3 characters long');
      return;
    }

    if (!validatePassword(password)) {
      setError(
        'Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters'
      );
      return;
    }

    setError('');
    // Handle login logic here
    console.log('Login attempt with:', credentials);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box className="admin-container">
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            className="admin-paper"
            sx={{ padding: { xs: 2, sm: 4 } }}
          >
            <Typography
              variant="h4"
              component="h1"
              align="center"
              className="admin-title"
            >
              Admin Login
            </Typography>
            {error && (
              <Typography
                component="div"
                className="error-message"
                align="center"
              >
                {error}
              </Typography>
            )}
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Username"
                variant="outlined"
                margin="normal"
                value={credentials.username}
                onChange={(e) =>
                  setCredentials({ ...credentials, username: e.target.value })
                }
                className="admin-textfield"
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={credentials.password}
                onChange={(e) =>
                  setCredentials({ ...credentials, password: e.target.value })
                }
                className="admin-textfield"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                className="admin-button"
              >
                Login
              </Button>
            </form>
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default AdminLogin;