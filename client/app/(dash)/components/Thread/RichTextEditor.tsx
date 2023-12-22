"use client";
import useTheme from "@mui/material/styles/useTheme";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export default function RichTextEditor({
  closeEditor,
}: {
  closeEditor: Function;
}) {
  const [value, setValue] = useState("");
  const theme = useTheme();

  return (
    <Grid
      item
      mt={2}
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
        type="text"
        defaultValue={""}
        onKeyDown={() => {}}
        placeholder="Search…"
        variant="outlined"
      />
      <Grid
        container
        justifyContent={"end"}
        sx={{
          mt: 7,
          ".MuiButton-root": {
            textTransform: "none",
            pl: 2,
            pr: 2,
            borderRadius: "9999px",
            ".MuiTypography-root": {
              fontSize: "12px",
            },
          },
        }}
      >
        <Button disableRipple onClick={() => closeEditor((prev: any) => !prev)}>
          <Grid container alignItems={"center"}>
            <Typography>cancel</Typography>
          </Grid>
        </Button>

        <Button
          disableRipple
          sx={{
            ml: 2,
            background: theme.palette.primary.main,
            color: "white",
            ":hover": {
              background: theme.palette.primary.dark,
            },
          }}
        >
          <Grid container alignItems={"center"}>
            <Typography fontWeight={"bold"} sx={{ color: "white" }}>
              comment
            </Typography>
          </Grid>
        </Button>
      </Grid>
    </Grid>
  );
}
