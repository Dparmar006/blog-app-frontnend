import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import AuthorCard from "../components/AuthorCard";
import BlogAppBar from "../components/BlogAppBar";
const Home = () => {
  return (
    <React.Fragment>
      <BlogAppBar />
      <Container maxWidth="xl">
        <Typography variant="h2">Authors</Typography>
        <Grid container spacing="18">
          <AuthorCard />
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
