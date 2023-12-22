import { Typography } from "@mui/material";
import useTheme from "@mui/material/styles/useTheme";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React, { useEffect, useState } from "react";
import EmojiFoodBeverageIcon from "@mui/icons-material/EmojiFoodBeverage";
import SearchBox from "./SearchBox";
import EdgeContainer from "./EdgeContainer";
import { useRouter } from "next/navigation";
import { getSession, signOut } from "next-auth/react";

export default function Header() {
  const theme = useTheme();
  const router = useRouter();
  const [userSession, setUserSession] = useState<any>();

  async function getUserSession() {
    const session = await getSession();
    setUserSession(session);
  }
  useEffect(() => {
    getUserSession();
  }, []);

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
        {/* <EdgeContainer>
          <Grid container justifyContent={"center"}>
            <SearchBox searchText={""} setSearchText={() => {}} />
          </Grid>
        </EdgeContainer> */}
      </Grid>

      <Grid item>
        <Grid container columnSpacing={2} alignItems={"center"}>
          <Typography>
            {userSession && `Hello! ${userSession.user.name}`}
          </Typography>
          <Grid item>
            {userSession ? (
              <Grid item>
                <Button
                  disableRipple
                  onClick={() => signOut()}
                  sx={{
                    textTransform: "none",
                    border: "1px solid",
                    ":hover": {
                      background: `${theme.palette.primary.dark}10`,
                    },
                  }}
                >
                  <Grid container alignItems={"center"}>
                    <Typography sx={{ p: 0.5, pl: 1, pr: 1 }}>
                      Logout
                    </Typography>
                  </Grid>
                </Button>
              </Grid>
            ) : (
              <Button
                onClick={() => router.push("/login")}
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
                  <Typography sx={{ p: 0.5, pl: 1, pr: 1 }}>Login</Typography>
                </Grid>
              </Button>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
