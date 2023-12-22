"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useTheme } from "@mui/material";
// import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

function Login() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const theme = useTheme();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const handleUsername = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUsername(event.target.value);
  };
  const handlePassword = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };
  const handleSignin: any = async () => {
    const res = await signIn("credentials", {
      username: username, // set to actual inputs
      password: password,
      redirect: true,
      callbackUrl: "/dashboard/home",
    });
  };
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        sx={{
          height: "100vh",
          background: "#2196f310",
        }}
      >
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignContent="center"
          flexGrow={1}
        >
          <form style={{ maxWidth: "500px", width: "50%", minWidth: "300px" }}>
            <Card
              elevation={3}
              sx={{
                borderRadius: "20px",
                boxShadow: "1px 5px 10px #e8e8e8 !important",
              }}
            >
              <Grid
                container
                direction="column"
                padding={2}
                justifyContent="stretch"
                alignContent="stretch"
              >
                {/* <EmojiFoodBeverageIcon
                  color={"primary"}
                  sx={{ fontSize: "30px" }}
                /> */}
                <Typography
                  variant="h6"
                  align="center"
                  noWrap
                  sx={{
                    m: 1,
                    padding: 2,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  Welcome Back
                </Typography>
                <FormControl sx={{ m: 3 }} variant="outlined">
                  <InputLabel htmlFor="standard-adornment-amount">
                    Username
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-email"
                    label="Username"
                    placeholder="username"
                    value={username}
                    onChange={(event) => handleUsername(event)}
                    startAdornment={
                      <InputAdornment position="start">
                        <MailOutlineIcon />
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <FormControl sx={{ m: 3 }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">
                    Password
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    placeholder="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(event) => handlePassword(event)}
                    startAdornment={
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    }
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>

                <Button
                  sx={{ m: 3, p: 3 }}
                  disableElevation
                  disableRipple
                  color="primary"
                  variant="contained"
                  onClick={() => handleSignin()}
                >
                  Sign in
                </Button>
              </Grid>
            </Card>
          </form>
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
