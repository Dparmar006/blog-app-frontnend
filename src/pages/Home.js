import { Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import api from "../apiHelper";
import AuthorCard from "../components/AuthorCard";
import BlogAppBar from "../components/BlogAppBar";
const Home = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    const retriveData = async () => {
      try {
        const response = await api.get("/authors");
        setAuthors(response.data);
      } catch (err) {}
    };
    retriveData();
  }, []);

  return (
    <React.Fragment>
      <BlogAppBar />
      <Container>
        <Typography variant="h2" sx={{ marginY: "1rem" }}>
          Authors
        </Typography>
        <Grid container spacing="18">
          {authors.map((author) => {
            return <AuthorCard author={author} key={author.id} />;
          })}
        </Grid>
      </Container>
    </React.Fragment>
  );
};

export default Home;
