import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import { CSSTransition } from "react-transition-group";
import "../../styles/auth.css";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }
    setError("");
    console.log("Login Successful", { email, password });
  };

  return (
    <div className="auth-container">
      <div className="auth-side">
        <div className="advertisement">
          <Typography variant="h4" sx={{ mb: 3 }}>
            Welcome to Our Platform
          </Typography>
          <Typography variant="body1">
            Discover amazing features and benefits when you join our community.
            Start your journey with us today!
          </Typography>
        </div>
      </div>

      <div className="auth-side">
        <div className="auth-form-container">
          <Paper
            elevation={5}
            sx={{
              p: 4,
              textAlign: "center",
              backgroundColor: "#e4e4c1",
              borderRadius: 3,
              boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            }}
          >
            <Typography variant="h5" sx={{ mb: 2, color: "#684824" }}>
              User Login
            </Typography>
            {error && <Typography color="error">{error}</Typography>}
            <form onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#856c48" },
                    "&:hover fieldset": { borderColor: "#a2906d" },
                  },
                }}
              />
              <TextField
                fullWidth
                label="Password"
                type="password"
                variant="outlined"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": { borderColor: "#856c48" },
                    "&:hover fieldset": { borderColor: "#a2906d" },
                  },
                }}
              />
              <Button
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  mt: 2,
                  backgroundColor: "#684824",
                  "&:hover": { backgroundColor: "#856c48" },
                }}
              >
                Login
              </Button>
              <Box mt={2}>
                <Link to="/signup" className="auth-link">
                  <Typography variant="body2">
                    New user? Create an account
                  </Typography>
                </Link>
              </Box>
            </form>
          </Paper>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
