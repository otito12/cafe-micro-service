import { Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React from "react";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SearchBox from "./SearchBox";
import EdgeContainer from "./EdgeContainer";
import { useRouter } from "next/navigation";

export default function Header() {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Grid
      container
      p={2}
      sx={{
        borderBottom: "1px solid #00000020",
      }}
    >
      <Grid item>
        <Grid item mr={3}>
          <Button
            disableRipple
            onClick={() => {
              router.push("/");
            }}
            sx={{
              textTransform: "none",
              ":hover": {
                background: "#00000000",
              },
            }}
          >
            <Grid container alignItems={"center"}>
              <EmojiFoodBeverageIcon sx={{ fontSize: "30px", pr: 1 }} />
              <Typography fontSize={20}> Columbia Cafe's</Typography>
            </Grid>
          </Button>
        </Grid>
      </Grid>
      <Grid container flex={1}>
        <EdgeContainer>
          <Grid container justifyContent={"center"}>
            <SearchBox searchText={""} setSearchText={() => {}} />
          </Grid>
        </EdgeContainer>
      </Grid>

      <Grid item>
        <Grid container columnSpacing={2}>
          <Grid item>
            <Button
              disableRipple
              sx={{
                textTransform: "none",
                border: "1px solid",
                ":hover": {
                  background: `${theme.palette.primary.dark}10`,
                },
              }}
            >
              <Grid container alignItems={"center"}>
                <Typography sx={{ p: 0.5, pl: 1, pr: 1 }}> Login</Typography>
              </Grid>
            </Button>
          </Grid>
          <Grid item>
            <Button
              disableRipple
              sx={{
                textTransform: "none",
                color: "white",
                background: theme.palette.primary.main,
                ":hover": {
                  background: theme.palette.primary.dark,
                },
              }}
            >
              <Grid container alignItems={"center"}>
                <Typography sx={{ p: 0.5, pl: 1, pr: 1 }}>Sign Up</Typography>
              </Grid>
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
