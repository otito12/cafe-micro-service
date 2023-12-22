"use client";
import EdgeContainer from "@/app/components/EdgeContainer";
import Grid from "@mui/material/Grid";
import React, { useState } from "react";
import Image from "next/image";
import cafe from "@/public/cafe.jpg";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import Button from "@mui/material/Button";
import useTheme from "@mui/material/styles/useTheme";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import { Divider } from "@mui/material";
import CafeMenu from "./components/CafeMenu";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useRouter } from "next/navigation";
import RichTextEditor from "./components/Thread/RichTextEditor";
import { CommentType } from "@/typings";
import Comment from "./components/Thread/Comment";

export default function page({ params }: { params: { id: string } }) {
  const theme = useTheme();
  const router = useRouter();
  const [reviewText, setReviewText] = useState("");
  const [rating, setRating] = useState(0);
  const [allComments, setAllComments] = useState([
    {
      comment_id: "1",
      body: "the lorem ipsum game strong",
      user_id: "12345",
      user_name: "TonyTony_Choppa",
      post_date: "11/25/2023",
      rating: 2,
    },
    {
      comment_id: "1",
      body: "the lorem ipsum game strong",
      user_id: "12345",
      user_name: "TonyTony_Choppa",
      post_date: "11/25/2023",
      rating: 3,
    },
  ]);

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

  return (
    <Grid container alignContent={"start"}>
      <Grid container>
        <Grid
          container
          sx={{
            position: "relative",
          }}
        >
          <Image
            src={cafe}
            style={{
              height: "300px",
              width: "100%",
              objectFit: "cover",
            }}
            alt="none"
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
                <Typography variant="h3">Cafe Name</Typography>
              </Grid>
              <Grid container alignItems={"center"}>
                <Rating
                  sx={{ mr: 2 }}
                  defaultValue={2}
                  size="large"
                  readOnly
                  emptyIcon={
                    <StarIcon
                      style={{ color: "#ffffff90" }}
                      fontSize="inherit"
                    />
                  }
                />
                <Typography>2.7 (150 reviews)</Typography>
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
            <CafeMenu />
          </Grid>

          <Grid item xs={12} mb={4}>
            {/* <Divider /> */}
          </Grid>

          <Grid container mb={4}>
            <Typography variant="body1" fontWeight={"bold"}>
              Reviews
            </Typography>
          </Grid>

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
