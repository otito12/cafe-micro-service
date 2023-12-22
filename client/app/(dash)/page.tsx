"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid";
import EdgeContainer from "./components/EdgeContainer";
import CafeCard from "./components/CafeCards";
import Divider from "@mui/material/Divider";
import cafe from "@/public/cafe.jpg";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";

export default function Home() {
  const [cafes, setCafes] = useState([]);
  async function getCafes() {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL + "cafe/"}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((cafes) => {
        console.log(cafes);
        setCafes(cafes);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getCafes();
  }, []);
  return (
    <Grid container alignContent={"start"}>
      <Grid container>
        <Grid container>
          <Image
            src={cafe}
            style={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
            }}
            alt="none"
          />
        </Grid>
      </Grid>
      <Grid container>
        <EdgeContainer>
          <Grid container mt={5} mb={4}>
            <Typography variant="body1" fontWeight={"bold"}>
              Top Cafe's on Columbia Campus
            </Typography>
          </Grid>
          <Grid container>
            {cafes &&
              cafes.map((cafe, index) => (
                <Grid key={index} item xs={12}>
                  {index > 0 && (
                    <Grid item xs={12}>
                      <Divider />
                    </Grid>
                  )}
                  <CafeCard cafe={cafe} />
                </Grid>
              ))}
          </Grid>
        </EdgeContainer>
      </Grid>
    </Grid>
  );
}
