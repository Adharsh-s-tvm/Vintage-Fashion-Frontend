import React, { useState } from "react";
import { Container, TextField, Button, Typography, Box, Paper } from "@mui/material";

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password, confirmPassword } = formData;
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all fields");
      return;
    }
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }
    setError("");
    console.log("Signup Successful", formData);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #e4e4c1, #a2906d)",
        p: 2,
      }}
    >
      <Container maxWidth="xs">
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
            User Signup
          </Typography>
          {error && <Typography color="error">{error}</Typography>}
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="First Name"
              name="firstName"
              variant="outlined"
              margin="normal"
              value={formData.firstName}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#856c48" },
                  "&:hover fieldset": { borderColor: "#a2906d" },
                },
              }}
            />
            <TextField
              fullWidth
              label="Last Name"
              name="lastName"
              variant="outlined"
              margin="normal"
              value={formData.lastName}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#856c48" },
                  "&:hover fieldset": { borderColor: "#a2906d" },
                },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              variant="outlined"
              margin="normal"
              value={formData.email}
              onChange={handleChange}
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
              name="password"
              type="password"
              variant="outlined"
              margin="normal"
              value={formData.password}
              onChange={handleChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "#856c48" },
                  "&:hover fieldset": { borderColor: "#a2906d" },
                },
              }}
            />
            <TextField
              fullWidth
              label="Confirm Password"
              name="confirmPassword"
              type="password"
              variant="outlined"
              margin="normal"
              value={formData.confirmPassword}
              onChange={handleChange}
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
              Signup
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default SignupPage;
