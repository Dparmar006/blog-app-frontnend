import { Favorite } from "@mui/icons-material";
import { Container, Divider, ToggleButton, Typography } from "@mui/material";
import { red } from "@mui/material/colors";
import { Box, typography } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../apiHelper";
import BlogAppBar from "../components/BlogAppBar";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  useEffect(() => {
    const retriveData = async () => {
      try {
        const response = await api.get(`/posts/${id}`);
        setPost(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    retriveData();
  }, [id]);

  return (
    <React.Fragment>
      <BlogAppBar />
      <Container sx={{ marginTop: "2rem" }}>
        <Box display="flex" justifyContent="space-between">
          <div>
            <Typography variant="h4">{post.title}</Typography>
            <Typography variant="h6">
              {new Date(post.publishedDate).toDateString()} by {post.author}
            </Typography>
          </div>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{ color: red[400] }}
          >
            {post.likes}
            <Favorite />
          </Box>
        </Box>
        <Divider sx={{ marginY: "1rem" }} />
        <Typography>{post.body}</Typography>
      </Container>
    </React.Fragment>
  );
};

export default Post;
