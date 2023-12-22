import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export default function CafeMenu() {
  const menuItems = [{}, {}, {}];
  return (
    <Grid
      container
      sx={{ border: "1px solid #00000020", p: 3, borderRadius: "5px" }}
    >
      {menuItems.map((item, index) => (
        <Grid
          container
          key={index}
          mb={index < menuItems.length - 1 ? 2 : 0}
          alignItems={"center"}
        >
          <Grid item>
            <Typography> Apple</Typography>
          </Grid>
          <Grid item flex={1} pl={2} pr={2}>
            <Divider
              sx={{
                border: "1px dashed #00000030",
                borderStyle: "dashed",
                strokeDasharray: "10",
              }}
            />
          </Grid>
          <Grid item>
            <Typography>$ {2.0}</Typography>
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
