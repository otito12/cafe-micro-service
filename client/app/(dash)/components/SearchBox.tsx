import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";

export default function SearchBox({
  searchText,
  setSearchText,
}: {
  searchText: String;
  setSearchText: Function;
}) {
  const theme = useTheme();
  const onSearch = (event: any) => {
    if (event.key === "Enter") {
      event.preventDefault();
      // console.log(event.target.value);
      setSearchText(event.target.value);
    }
    // search(event.currentTarget.value);
  };
  return (
    <Grid container sx={{ maxWidth: "800px" }}>
      <Grid container flex={1}>
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
          defaultValue={searchText}
          onKeyDown={() => {}}
          placeholder="Search…"
          variant="outlined"
        />
      </Grid>

      <Button
        sx={{
          textTransform: "none",
          color: "white",
          borderTopLeftRadius: "0px",
          borderBottomLeftRadius: "0px",
          background: theme.palette.primary.main,
          ":hover": {
            background: theme.palette.primary.dark,
          },
        }}
      >
        <SearchIcon sx={{ color: "white" }} />
      </Button>
    </Grid>
  );
}
