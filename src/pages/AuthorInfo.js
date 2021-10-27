import { Container, Grid, Typography } from "@mui/material";

import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../apiHelper";
import BlogAppBar from "../components/BlogAppBar";
import PostCard from "../components/PostCard";

const AuthorInfo = () => {
  const params = useParams();

  const [posts, setPosts] = useState([]);
  const [author, setAuthor] = useState({ name: "" });
  useEffect(() => {
    const retriveData = async () => {
      try {
        const response = await api.get(`/authors/${params.id}`);
        setAuthor(response.data);
      } catch (err) {}
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
        setPosts(authorsPost);
        console.log(data);
        console.log(authorsPost);
      } catch (err) {}
    };
    retriveData();
  }, [params.id]);

  return (
    <React.Fragment>
      <BlogAppBar />
      <Container>
        <Typography variant="h3">{author.name}</Typography>
        <Typography variant="h6" color="textsecondary">
          {author.username}
        </Typography>
        <Typography>{author.bio}</Typography>
      </Container>
      <br />
      <br />
      <Container>
        <Typography variant="h4">Posts from {author.name}</Typography>
      </Container>
      <Container>
        <Grid container spacing="18">
          {posts.map((post) => (
            <PostCard key={post.id} />
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AuthorInfo;
