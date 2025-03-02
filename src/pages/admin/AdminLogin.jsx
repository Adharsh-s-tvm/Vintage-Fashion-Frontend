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

const theme = createTheme({
  palette: {
    primary: {
      main: '#684824',
    },
    secondary: {
      main: '#856c48',
    },
    background: {
      default: '#e4e4c1',
    },
  },
});

function AdminLogin() {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#e4e4c1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={3}
            sx={{
              padding: { xs: 2, sm: 4 },
              backgroundColor: '#c0b592',
              border: '1px solid #a2906d',
            }}
          >
            <Typography
              variant="h4"
              component="h1"
              align="center"
              sx={{
                color: '#684824',
                marginBottom: 4,
                fontWeight: 'bold',
              }}
            >
              Admin Login
            </Typography>
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
                sx={{
                  backgroundColor: '#e4e4c1',
                  '& label.Mui-focused': {
                    color: '#684824',
                  },
                }}
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
                sx={{
                  backgroundColor: '#e4e4c1',
                  '& label.Mui-focused': {
                    color: '#684824',
                  },
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: '#856c48',
                  '&:hover': {
                    backgroundColor: '#684824',
                  },
                }}
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