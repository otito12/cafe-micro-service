"use client";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CafeCard() {
  const router = useRouter();
  return (
    <Grid
      container
      columnSpacing={2}
      onClick={() => router.push("/cafe/5432")}
      p={2}
      pt={3}
      pb={3}
      sx={{
        borderRadius: "5px",
        transition: "box-shadow .5s",
        ":hover": {
          cursor: "pointer",
          boxShadow: "1px 1px 10px #00000020",
          transition: "box-shadow .5s",
        },
      }}
    >
      <Grid item>
        <Grid
          container
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            maxHeight: "200px",
            maxWidth: "250px",
            overflow: "hidden",
            borderRadius: "6px",
          }}
        >
          <img
            src={
              "https://media.gq-magazine.co.uk/photos/62c55e7b564b55738c336214/16:9/w_2240,c_limit/StrangerThings_StrangerThings4_8_00_48_09_23_R.jpg"
            }
            className="incentive_image"
            style={{
              width: "250px",
              height: "200px",
              objectFit: "cover",
              transition: ".2s height",
            }}
            alt="enyimba-logo"
          />
        </Grid>
      </Grid>
      <Grid item flex={1}>
        <Grid container alignContent={"space-between"} height={"100%"}>
          <Grid container>
            <Typography variant="h6">Cafe name</Typography>
            <Grid container>
              <Rating defaultValue={2} size="medium" readOnly />
            </Grid>
            <Grid container>
              <Grid item mr={1} pt={0.5}>
                <ChatBubbleOutlineIcon sx={{ fontSize: "18px" }} />
              </Grid>
              <Grid item flex={1}>
                <Typography variant="body2" color={"#00000080"}>
                  {" "}
                  "
                  {
                    "So after reading reviews for this place, I was skeptical. I had actually even postponed coming here. However, it isn't fair to judge something based solely on others opinions so I had to try it. I'm glad I did."
                  }
                  "
                  <Button
                    sx={{
                      p: 0,
                      textTransform: "none",
                      ":hover": {
                        background: "#00000000",
                      },
                    }}
                    disableRipple
                  >
                    more
                  </Button>
                </Typography>
              </Grid>
            </Grid>
          </Grid>

          <Grid container justifyContent={"end"}>
            <Button
              disableRipple
              sx={{
                border: "1px solid #00000020",
                color: "#000000",
                textTransform: "none",
                ":hover": {
                  background: "#00000020",
                },
              }}
            >
              <Typography>Details</Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
