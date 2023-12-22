"use client";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import { useTheme } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
// import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

function Login() {
  const handleSignin: any = async () => {
    const res = await signIn("google", {
      redirect: true,
      callbackUrl: "/",
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
                <Grid container p={2} justifyContent={"center"}>
                  <EmojiFoodBeverageIcon
                    color={"primary"}
                    sx={{ fontSize: "60px" }}
                  />
                </Grid>

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
                  Welcome to Columbia Cafe's
                </Typography>

                <Button
                  sx={{ m: 3, p: 3 }}
                  disableElevation
                  disableRipple
                  color="primary"
                  variant="contained"
                  onClick={() => handleSignin()}
                >
                  <GoogleIcon sx={{ mr: 2 }} />
                  Sign in with Google
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
