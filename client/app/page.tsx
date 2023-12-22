import Image from "next/image";
import styles from "./page.module.css";
import Grid from "@mui/material/Grid";
import EdgeContainer from "./components/EdgeContainer";
import CafeCard from "./components/CafeCards";
import Divider from "@mui/material/Divider";
import cafe from "@/public/cafe.jpg";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Grid container>
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
          <Grid container mt={5} mb={2}>
            <Typography variant="body1" fontWeight={"bold"}>
              Top Cafe's on Columbia Campus
            </Typography>
          </Grid>
          <Grid container>
            {[{}, {}, {}, {}, {}].map((cafe, index) => (
              <Grid key={index} item xs={12}>
                {index > 0 && (
                  <Grid item xs={12}>
                    <Divider />
                  </Grid>
                )}
                <CafeCard />
              </Grid>
            ))}
          </Grid>
        </EdgeContainer>
      </Grid>
    </Grid>
  );
}
