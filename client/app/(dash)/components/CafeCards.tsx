"use client";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";
import React from "react";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function CafeCard({ cafe }: { cafe: any }) {
  const router = useRouter();
  return (
    <Grid
      container
      columnSpacing={2}
      onClick={() => router.push(`/cafe/${cafe._id}`)}
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
            src={cafe.img}
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
            <Typography variant="h6">{cafe.name}</Typography>
            <Grid container>
              <Rating value={cafe.avrg_rating} size="medium" readOnly />
            </Grid>
            <Grid container>
              <Grid item mr={1} pt={0.5}>
                <ChatBubbleOutlineIcon sx={{ fontSize: "18px" }} />
              </Grid>
              <Grid item flex={1}>
                <Typography variant="body2" color={"#00000080"}>
                  {" "}
                  "{cafe.reviews[0]?.body}"
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
