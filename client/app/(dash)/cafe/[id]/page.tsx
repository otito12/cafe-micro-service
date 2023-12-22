"use client";
import EdgeContainer from "@/app/(dash)/components/EdgeContainer";
import Grid from "@mui/material/Grid";
import React, { useEffect, useState } from "react";
import cafeimg from "@/public/cafe.jpg";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CafeMenu from "./components/CafeMenu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
import RichTextEditor from "./components/Thread/RichTextEditor";
import { CommentType } from "@/typings";
import { getSession } from "next-auth/react";
import Comment from "./components/Thread/Comment";
import Loading from "@/app/(dash)/components/Loading";

export default function page({ params }: { params: { id: string } }) {
  const [userSession, setUserSession] = useState<any>();
  const theme = useTheme();
  const router = useRouter();
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [allComments, setAllComments] = useState<Array<CommentType>>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [cafe, setCafe] = useState<any>();
  async function getCafe() {
    const session = await getSession();
    console.log("SESSION", session);
    setUserSession(session);
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL + `cafe/?id=${params.id}`}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((cafes) => {
        setCafe(cafes);
        console.log(cafes);
        setIsLoading(false);
        setAllComments(cafes.reviews);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    getCafe();
  }, []);

  const addComment = () => {
    const newComment: CommentType = {
      comment_id: "",
      body: reviewText,
      user_id: "",
      user_name: "",
      post_date: "",
      rating: rating,
    };
    setAllComments((prev) => [newComment, ...prev]);
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Grid container alignContent={"start"}>
      <Grid container>
        <Grid
          container
          sx={{
            position: "relative",
          }}
        >
          <img
            src={cafe ? cafe.img : cafeimg}
            style={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
            }}
            alt="loading"
          />
          <Grid
            container
            justifyContent={"space-between"}
            direction={"column"}
            pb={2}
            sx={{
              position: "absolute",
              top: 0,
              color: "white",
              height: "100%",
              background:
                "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.44723827030812324) 25%, rgba(0,0,0,0) 100%)",
            }}
          >
            <EdgeContainer>
              <Button
                sx={{ textTransform: "none", color: "white", mt: 1 }}
                onClick={() => router.push("/")}
              >
                <Grid container>
                  <ArrowBackIosNewIcon />
                  <Typography>Back</Typography>
                </Grid>
              </Button>
            </EdgeContainer>
            <EdgeContainer>
              <Grid container>
                <Typography variant="h3">{cafe.name}</Typography>
              </Grid>
              <Grid container alignItems={"center"}>
                <Rating
                  sx={{ mr: 2 }}
                  value={cafe.avrg_rating}
                  size="large"
                  readOnly
                  emptyIcon={
                    <StarIcon
                      style={{ color: "#ffffff90" }}
                      fontSize="inherit"
                    />
                  }
                />
                <Typography>
                  {cafe.avrg_rating} ({cafe.reviews.length} reviews)
                </Typography>
              </Grid>
            </EdgeContainer>
          </Grid>
        </Grid>
      </Grid>

      <EdgeContainer>
        <Grid container mt={5}>
          <Grid container mb={4}>
            <Typography variant="body1" fontWeight={"bold"}>
              Menu
            </Typography>
          </Grid>

          <Grid container mb={4}>
            <CafeMenu menu={cafe.menu} />
          </Grid>

          <Grid item xs={12} mb={4}>
            {/* <Divider /> */}
          </Grid>

          <Grid container mb={4}>
            <Typography variant="body1" fontWeight={"bold"}>
              Reviews
            </Typography>
          </Grid>
          {userSession ? (
            <Grid container mb={4}>
              <Rating
                sx={{ mb: 2 }}
                value={rating}
                onChange={(event, newValue) => {
                  setRating(newValue ? newValue : 0);
                }}
                size="medium"
              />
              <RichTextEditor
                reviewText={reviewText}
                setReviewText={setReviewText}
              />
              <Grid
                container
                justifyContent={"end"}
                sx={{
                  mt: 2,
                  ".MuiButton-root": {
                    textTransform: "none",
                    pl: 2,
                    pr: 2,
                    borderRadius: "5px",
                    ".MuiTypography-root": {
                      fontSize: "12px",
                    },
                  },
                }}
              >
                <Button
                  disableRipple
                  onClick={() => {
                    addComment();
                    setReviewText("");
                    setRating(0);
                  }}
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
                    <StarBorderIcon />
                    <Typography sx={{ p: 0.5, pl: 1, pr: 1 }}>
                      Write a review
                    </Typography>
                  </Grid>
                </Button>
              </Grid>
            </Grid>
          ) : (
            <Grid
              container
              justifyContent={"start"}
              sx={{
                mt: 2,
                mb: 4,
                ".MuiButton-root": {
                  textTransform: "none",
                  // pl: 2,
                  pr: 2,
                  borderRadius: "5px",
                  ".MuiTypography-root": {
                    fontSize: "12px",
                  },
                },
              }}
            >
              <Button
                disableRipple
                onClick={() => {
                  router.push("/login");
                }}
                sx={{
                  background: theme.palette.primary.main,
                  color: "white",
                  ":hover": {
                    background: theme.palette.primary.dark,
                  },
                }}
              >
                <Grid container alignItems={"center"}>
                  <StarBorderIcon />
                  <Typography sx={{ p: 0.5, pl: 1, pr: 1 }}>
                    Write a review
                  </Typography>
                </Grid>
              </Button>
            </Grid>
          )}

          <Grid container mb={4}>
            <Grid container>
              {allComments.map((comment: CommentType, index) => (
                <Comment key={index} comment={comment} />
              ))}
            </Grid>
          </Grid>
        </Grid>
      </EdgeContainer>
    </Grid>
  );
}
