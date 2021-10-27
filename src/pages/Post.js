import { Favorite } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  ToggleButton,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Box, typography } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import api from "../apiHelper";
import BlogAppBar from "../components/BlogAppBar";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const retriveData = async () => {
      try {
        const { data } = await api.get(`/comments`);
        setComments(data.filter((comment) => comment.postId === Number(id)));
      } catch (err) {
        console.log(err);
      }
    };
    retriveData();
  });
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
        <Divider sx={{ marginY: "1rem" }} />
      </Container>
      <Container>
        <Typography color="GrayText" variant="h4">
          Comments
          <Grid container spacing="18">
            {comments.map((comment) => {
              return (
                <Grid item xl={3} lg={4} md={6} xs={12}>
                  <Card sx={{ padding: "1rem" }}>
                    <Box>
                      <Avatar sx={{ bgColor: red[500] }}>R</Avatar>
                    </Box>
                    <Typography>{comment.body}</Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Typography>
      </Container>
    </React.Fragment>
  );
};

export default Post;
