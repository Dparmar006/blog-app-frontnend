import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../apiHelper";
import PostCard from "../components/PostCard";
import DefaultLayout from "../Layouts/DefaultLayout";

const MostLikedPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const retriveData = async () => {
      try {
        const { data } = await api.get(`/posts`);
        const sortedPost = data.sort((a, b) => {
          return a.likes - b.likes;
        });
        setPosts(sortedPost.reverse().slice(0, 10));
      } catch (err) {
        console.log(err);
      }
    };
    retriveData();
  }, []);

  return (
    <DefaultLayout>
      <Container>
        <Typography variant="h4" sx={{ marginY: "1rem" }}>
          Most liked posts
        </Typography>
        <Grid container spacing="18">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Grid>
      </Container>
    </DefaultLayout>
  );
};

export default MostLikedPosts;
