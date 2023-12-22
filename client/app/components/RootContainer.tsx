"use client";
import { Grid, useMediaQuery, useTheme } from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "./Header";

export default function RootContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  const matchesBreakpoint = useMediaQuery(theme.breakpoints.down("lg"));
  return (
    <Grid
      container
      direction={"column"}
      sx={{
        minHeight: "100vh",
      }}
    >
      <Grid container>
        <Header />
      </Grid>
      <Grid container pb={10} flex={1}>
        {children}
      </Grid>
    </Grid>
  );
}
