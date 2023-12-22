import { Grid } from "@mui/material";
import RootContainer from "./components/RootContainer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Grid container>
      <RootContainer>{children}</RootContainer>
    </Grid>
  );
}
