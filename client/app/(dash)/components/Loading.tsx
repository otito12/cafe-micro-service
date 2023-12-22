import { Grid, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import loader from "@/public/loading.svg";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";

export default function DashLoading({
  loadingText = "Loading...",
  showText = true,
  size = 80,
}: {
  loadingText?: string;
  showText?: boolean;
  size?: number;
}) {
  return (
    <Grid
      container
      mt={5}
      justifyItems={"center"}
      alignContent={"start"}
      justifyContent={"center"}
    >
      <Image
        src={loader}
        style={{
          padding: "0",
          width: `${size}` + "px",
          height: `${size}` + "px",
          position: "relative",
          objectFit: "cover", // Optional
        }}
        alt="ass-hat"
      />
      <Grid item sx={{ position: "absolute" }}>
        <Grid
          container
          sx={{ height: "100%" }}
          mt={`${size * 0.3375}` + "px"}
          alignContent={"center"}
        >
          <EmojiFoodBeverageIcon color={"primary"} sx={{ fontSize: "30px" }} />
        </Grid>
      </Grid>
      {showText && (
        <Grid item xs={12} pt={1} pl={1.5}>
          <Grid container justifyContent={"center"}>
            <Typography fontWeight={"200"} sx={{ color: "#a9a9a9" }}>
              {loadingText}
            </Typography>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
}
