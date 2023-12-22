"use client";
import useTheme from "@mui/material/styles/useTheme";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function RichTextEditor({
  reviewText,
  setReviewText,
}: {
  reviewText: string;
  setReviewText: Function;
}) {
  const theme = useTheme();

  return (
    <Grid
      item
      xs={12}
      sx={{
        ".ql-toolbar": {
          borderTopLeftRadius: "5px",
          borderTopRightRadius: "5px",
        },
        ".ql-container": {
          borderBottomLeftRadius: "5px",
          borderBottomRightRadius: "5px",
        },
      }}
    >
      <TextField
        fullWidth
        sx={{
          input: {
            p: 1,
            height: "30px",
          },
        }}
        InputProps={{
          sx: {
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
          },
        }}
        multiline
        rows={4}
        type="text"
        value={reviewText}
        onChange={(event) => setReviewText(event.target.value)}
        placeholder="Search…"
        variant="outlined"
      />
    </Grid>
  );
}
