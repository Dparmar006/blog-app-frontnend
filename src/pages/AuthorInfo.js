import {
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../apiHelper";
import LoadingDivison from "../components/LoadingDivison";
import PostCard from "../components/PostCard";
import DefaultLayout from "../Layouts/DefaultLayout";

const AuthorInfo = () => {
  const params = useParams();

  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState({});
  const [sortBy, setSortBy] = useState("date");
  const [isAscending, setIsAscending] = useState(false);

  useEffect(() => {
    const retriveData = async () => {
      try {
        const response = await api.get(`/authors/${params.id}`);
        setAuthor(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    retriveData();
  }, [params.id]);

  useEffect(() => {
    const retriveData = async () => {
      try {
        const { data } = await api.get(`/posts`);
        const authorsPost = data.filter((post) => {
          return post.authorId === Number(params.id);
        });
        let sortedPosts = [];

        if (sortBy === "date") {
          sortedPosts = authorsPost.sort(
            (a, b) => new Date(a.publishedDate) - new Date(b.publishedDate)
          );
        } else if (sortBy === "likes") {
          sortedPosts = authorsPost.sort((a, b) => a.likes - b.likes);
        }
        if (isAscending) {
          sortedPosts.reverse();
        }
        setPosts(sortedPosts);
      } catch (err) {
        console.log(err);
      }
    };
    retriveData();
  }, [params.id, isAscending, sortBy]);

  return (
    <DefaultLayout>
      <Container>
        <Typography variant="h3">{author.name}</Typography>
        <Typography variant="h6" color="textSecondary">
          {author.username}
        </Typography>
        <Typography>{author.bio}</Typography>
      </Container>
      <br />
      <br />
      <Container sx={{ marginBottom: "2rem" }}>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="h4">Posts from {author.name}</Typography>
          <Box>
            <FormControl component="fieldset">
              <FormLabel component="legend">Sort by</FormLabel>
              <RadioGroup
                row
                aria-label="sortby"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="date"
                  onClick={() => setSortBy("date")}
                  control={<Radio />}
                  label="Date"
                />
                <FormControlLabel
                  value="likes"
                  onClick={() => setSortBy("likes")}
                  control={<Radio />}
                  label="Likes"
                />
              </RadioGroup>
              <FormControlLabel
                checked={isAscending}
                onChange={() => setIsAscending(!isAscending)}
                control={<Checkbox />}
                label="Ascending order"
              />
            </FormControl>
          </Box>
        </Box>
        <Divider />
      </Container>
      <Container>
        <Grid container spacing="18">
          {posts.length === 0 ? (
            <LoadingDivison loading={false} />
          ) : (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          )}
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default AuthorInfo;
