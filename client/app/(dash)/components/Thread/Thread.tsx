"use client";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Image from "next/image";
import userAvatar from "@/public/useravatar.svg";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import KeyboardArrowDownOutlinedIcon from "@mui/icons-material/KeyboardArrowDownOutlined";
import InsertCommentOutlinedIcon from "@mui/icons-material/InsertCommentOutlined";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import useTheme from "@mui/material/styles/useTheme";
import RichTextEditor from "./RichTextEditor";

type Comment = {
  comment_id: string;
  title: string;
  body: string;
  parent_type: string;
  parent_id: string;
  user_id: string;
  user_img: string;
  user_name: string;
  post_date: string;
  comment_count: number;
  comments: {
    [key: string]: Comment;
  };
};
type Comments = {
  [key: string]: Comment;
};

const display_comments = (comment: Comment) => {
  const [openReply, setOpenReply] = useState(false);
  const theme = useTheme();
  return (
    <Grid container>
      <Grid container pt={2} pb={2}>
        <Grid container alignItems={"center"}>
          <Image
            src={userAvatar}
            style={{
              borderRadius: "999px",
              height: "35px",
              width: "35px",
              objectFit: "contain",
            }}
            alt="none"
          />
          <Typography
            onClick={() => {
              //   router.push("forum/b/Columbia_Rockers");
            }}
            sx={{
              ml: 2,
              ":hover": {
                textDecoration: "underline",
                cursor: "pointer",
              },
            }}
            variant="body2"
          >
            b/Columbia_Rockers
          </Typography>
          <Typography sx={{ ml: 1, mr: 1 }}> • </Typography>
          <Typography sx={{ color: "#999999" }} variant="body2">
            2 hours ago
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        ml={2}
        p={2}
        pt={0}
        pb={0}
        sx={{ borderLeft: "1px solid #00000020" }}
      >
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eu
          sem urna. Aliquam suscipit odio eget lacus sagittis pulvinar. Nam vel
          hendrerit libero. Suspendisse quis sem eu tellus bibendum feugiat. In
          commodo felis ut ante imperdiet viverra. Class aptent taciti sociosqu
          ad litora torquent per conubia nostra, per inceptos himenaeos.
        </Typography>
        <Grid container mt={2}>
          <Grid
            container
            sx={{
              ".MuiButton-root": {
                textTransform: "none",
                pl: 2,
                pr: 2,
                borderRadius: "9999px",
                ".MuiTypography-root": {
                  fontSize: "12px",
                  color: "black",
                },
              },
              ".MuiSvgIcon-root": {
                color: theme.palette.primary.main,
                fontSize: "15px",
              },
            }}
          >
            <Grid item>
              <Grid
                container
                alignItems={"center"}
                sx={{
                  height: "100%",
                  textTransform: "none",
                }}
              >
                <IconButton>
                  <KeyboardArrowUpOutlinedIcon />
                </IconButton>
                <Grid item>
                  <Typography sx={{ fontSize: "12px" }}>135k</Typography>
                </Grid>
                <IconButton>
                  <KeyboardArrowDownOutlinedIcon />
                </IconButton>
              </Grid>
            </Grid>

            <Button disableRipple onClick={() => setOpenReply((prev) => !prev)}>
              <Grid container alignItems={"center"}>
                <InsertCommentOutlinedIcon />
                <Typography sx={{ ml: 1 }}>Reply</Typography>
              </Grid>
            </Button>

            <Button disableRipple>
              <Grid container alignItems={"center"}>
                <IosShareOutlinedIcon />
                <Typography sx={{ ml: 1 }}>Share</Typography>
              </Grid>
            </Button>
          </Grid>
        </Grid>
        {openReply && <RichTextEditor closeEditor={setOpenReply} />}
        {comment.comments &&
          Object.keys(comment.comments).map((comment_id: string) => (
            <Grid container key={comment_id}>
              {display_comments(comment.comments[comment_id])}
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};

export default function Thread() {
  const theme = useTheme();
  const all_comments: Comments = {
    1: {
      comment_id: "1",
      title: "First Comment",
      body: "the lorem ipsum game strong",
      parent_type: "thread",
      parent_id: "1",
      user_id: "12345",
      user_img: "google.com",
      user_name: "TonyTony_Choppa",
      post_date: "11/25/2023",
      comment_count: 0,
      comments: {
        12: {
          comment_id: "1",
          title: "First Comment",
          body: "the lorem ipsum game strong",
          parent_type: "thread",
          parent_id: "1",
          user_id: "12345",
          user_img: "google.com",
          user_name: "TonyTony_Choppa",
          post_date: "11/25/2023",
          comment_count: 0,
          comments: {
            12: {
              comment_id: "1",
              title: "First Comment",
              body: "the lorem ipsum game strong",
              parent_type: "thread",
              parent_id: "1",
              user_id: "12345",
              user_img: "google.com",
              user_name: "TonyTony_Choppa",
              post_date: "11/25/2023",
              comment_count: 0,
              comments: {},
            },
          },
        },
        13: {
          comment_id: "1",
          title: "First Comment",
          body: "the lorem ipsum game strong",
          parent_type: "thread",
          parent_id: "1",
          user_id: "12345",
          user_img: "google.com",
          user_name: "TonyTony_Choppa",
          post_date: "11/25/2023",
          comment_count: 0,
          comments: {},
        },
      },
    },
    2: {
      comment_id: "1",
      title: "First Comment",
      body: "the lorem ipsum game strong",
      parent_type: "thread",
      parent_id: "1",
      user_id: "12345",
      user_img: "google.com",
      user_name: "TonyTony_Choppa",
      post_date: "11/25/2023",
      comment_count: 0,
      comments: {
        12: {
          comment_id: "1",
          title: "First Comment",
          body: "the lorem ipsum game strong",
          parent_type: "thread",
          parent_id: "1",
          user_id: "12345",
          user_img: "google.com",
          user_name: "TonyTony_Choppa",
          post_date: "11/25/2023",
          comment_count: 0,
          comments: {
            12: {
              comment_id: "1",
              title: "First Comment",
              body: "the lorem ipsum game strong",
              parent_type: "thread",
              parent_id: "1",
              user_id: "12345",
              user_img: "google.com",
              user_name: "TonyTony_Choppa",
              post_date: "11/25/2023",
              comment_count: 0,
              comments: {},
            },
          },
        },
        13: {
          comment_id: "1",
          title: "First Comment",
          body: "the lorem ipsum game strong",
          parent_type: "thread",
          parent_id: "1",
          user_id: "12345",
          user_img: "google.com",
          user_name: "TonyTony_Choppa",
          post_date: "11/25/2023",
          comment_count: 0,
          comments: {},
        },
      },
    },
  };
  return (
    <Grid container>
      {Object.keys(all_comments).map((comment_id: string) => (
        <Grid container key={comment_id}>
          {display_comments(all_comments[comment_id])}
        </Grid>
      ))}
    </Grid>
  );
}
