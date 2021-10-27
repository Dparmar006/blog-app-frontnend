import { Container, Grid, Typography } from "@mui/material";

import React from "react";
import BlogAppBar from "../components/BlogAppBar";
import PostCard from "../components/PostCard";

const AuthorInfo = () => {
  return (
    <React.Fragment>
      <BlogAppBar />
      <Container>
        <Typography variant="h3">Author name</Typography>
        <Typography variant="h6" color="textsecondary">
          @username
        </Typography>
        <Typography>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
          adipisci repudiandae ipsa harum tempora veniam reprehenderit
          accusantium explicabo exercitationem. Minus facilis eum iure est,
          reiciendis dolorem excepturi neque incidunt voluptate!
        </Typography>
      </Container>
      <br />
      <br />
      <Container>
        <Typography variant="h3">Posts from Author name</Typography>
      </Container>
      <Container>
        <Grid container spacing="18">
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default AuthorInfo;
