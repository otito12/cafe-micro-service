import { Grid } from "@mui/material";
import React from "react";

export default function EdgeContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Grid container justifyContent={"center"}>
      <Grid container maxWidth={"1000px"}>
        {children}
      </Grid>
    </Grid>
  );
}
