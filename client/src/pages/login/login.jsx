import React, { useState } from "react";
import { TextField, Button, Typography, Grid, Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Headersub from "../Header/header2";
import Footer from "../Footer/footer";

const Login = () => {
  const navigate = useNavigate();

  const [userEmailOrMobile, setuserEmailOrMobile] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");

  const handleUserDetailChange = (e) => {
    setuserEmailOrMobile(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post(
        "https://carbay.onrender.com/api/auth/login",
        {
          userEmailOrMobile,
          password,
        }
      );
      localStorage.setItem("token", loginResponse.data.token);

      if (loginResponse.data.user.role === "admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/user/dashboard");
      }
    } catch (error) {
      setLoginError(error.response.data.message);
    }

    setuserEmailOrMobile("");
    setPassword("");
  };

  return (
    <>
      <Headersub />
      <Grid
        container
        spacing={3}
        justifyContent="center"
        alignItems="center"
        sx={{ padding: "2rem" }}
      >
        <Grid item xs={12} sm={8} md={6} lg={4}>
          <div className="login-con">
            <Typography variant="h4">Login</Typography>
            <div className="login-section">
              <TextField
                label="Enter email / mobile number"
                placeholder="Enter Email / Phone no"
                fullWidth
                value={userEmailOrMobile}
                onChange={handleUserDetailChange}
                margin="normal"
              />
              <TextField
                label="Password"
                type="password"
                placeholder="Enter your Password"
                fullWidth
                value={password}
                onChange={handlePasswordChange}
                margin="normal"
              />
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleLogin}
                sx={{ marginTop: "1rem" }}
              >
                Login
              </Button>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  marginTop: "1rem",
                }}
              >
                <Typography>Create an account?</Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    navigate("/signup");
                  }}
                >
                  Sign up
                </Button>
              </div>
              {loginError && (
                <Alert severity="error" sx={{ marginTop: 2 }}>
                  {loginError}
                </Alert>
              )}
            </div>
          </div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
};

export default Login;
