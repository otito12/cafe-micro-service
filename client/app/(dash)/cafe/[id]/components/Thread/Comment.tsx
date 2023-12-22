"use client";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import userAvatar from "@/public/useravatar.svg";
import useTheme from "@mui/material/styles/useTheme";
import { CommentType } from "@/typings";
import Rating from "@mui/material/Rating";
import dayjs from "dayjs";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { getSession, signOut } from "next-auth/react";

export default function Comment({
  comment,
  editable,
  deleteComment,
}: {
  comment: CommentType;
  editable: boolean;
  deleteComment: Function;
}) {
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
            b/{comment.user_name}
          </Typography>
          <Typography sx={{ ml: 1, mr: 1 }}> • </Typography>
          <Rating value={comment.rating} readOnly size="small" />
          <Typography sx={{ ml: 1, mr: 1 }}> • </Typography>
          <Typography sx={{ color: "#999999" }} variant="body2">
            {dayjs(comment.post_date).format("D ddd YYYY, HH:mm a")}
          </Typography>
          {editable && (
            <>
              <Typography sx={{ ml: 1, mr: 1 }}> • </Typography>
              <Typography sx={{ color: "#999999" }} variant="body2">
                <IconButton>
                  <EditIcon sx={{ fontSize: "15px" }} />
                </IconButton>
                <IconButton onClick={() => deleteComment(comment._id)}>
                  <DeleteIcon color="error" sx={{ fontSize: "15px" }} />
                </IconButton>
              </Typography>
            </>
          )}
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
        <Typography variant="body2">{comment.body}</Typography>
      </Grid>
    </Grid>
  );
}
