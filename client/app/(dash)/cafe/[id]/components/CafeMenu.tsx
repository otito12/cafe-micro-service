import { Divider, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";

export default function CafeMenu({ cafe }: { cafe: any }) {
  return (
    <Grid
      container
      sx={{ border: "1px solid #00000020", p: 3, borderRadius: "5px" }}
    >
      {Object.keys(cafe.menu).map((key: string, index) => (
        <Grid
          container
          key={index}
          mb={index < Object.keys(cafe.menu).length - 1 ? 2 : 0}
          alignItems={"center"}
        >
          <Grid container alignItems={"center"} mb={1}>
            <Grid item>
              <Typography>{key}</Typography>
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
              <Typography>$ {parseFloat(cafe.menu[key]).toFixed(2)}</Typography>
            </Grid>
          </Grid>
          <Grid
            container
            sx={{
              ".MuiTypography-root": {
                fontSize: "12px",
              },
            }}
          >
            <Typography fontWeight={"bold"}>Ingredients:</Typography>
            {cafe.ingredients[key].map((item: any, index: any) => (
              <Typography key={index} sx={{ ml: 2 }}>
                {item}
              </Typography>
            ))}
          </Grid>
        </Grid>
      ))}
    </Grid>
  );
}
