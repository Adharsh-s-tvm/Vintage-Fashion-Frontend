import React from "react";
import { AppBar, Toolbar, Typography, Container, Button, Box, Paper } from "@mui/material";
import Header from "../../components/components/Header";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear cookies
    document.cookie.split(";").forEach(cookie => {
      document.cookie = cookie
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });

    // Clear localStorage
    localStorage.clear();

    // Clear sessionStorage
    sessionStorage.clear();

    // Redirect to login page
    navigate("/login");
  };

  return (
    <Box sx={{ background: "linear-gradient(135deg, #e4e4c1, #a2906d)", minHeight: "100vh" }}>
      <Header onLogout={handleLogout} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "calc(100vh - 64px)",
          p: 2,
        }}
      >
        <Container maxWidth="md">
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
            <Typography variant="h4" sx={{ mb: 2, color: "#684824" }}>
              Welcome to Our E-Commerce Store!
            </Typography>
            <Typography variant="body1" sx={{ mb: 3, color: "#856c48" }}>
              Discover the best jackets in our collection. Stylish, comfortable, and designed just for you.
            </Typography>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#684824", "&:hover": { backgroundColor: "#856c48" }, mr: 2 }}
            >
              Shop Now
            </Button>
          </Paper>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
