import { CommentOutlined, Favorite } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardHeader,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { red } from "@mui/material/colors";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import api from "../apiHelper";
import DefaultLayout from "../Layouts/DefaultLayout";

const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const history = useHistory();
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
  }, [id]);

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
    <DefaultLayout>
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
            // sx={{ color: red[400] }}
          >
            {post.likes}
            <Favorite color={"red"} />{" "}
            <Divider
              orientation="vertical"
              sx={{ margin: "1rem", height: "1rem" }}
            />
            {post.comments}
            <CommentOutlined />
          </Box>
        </Box>
        <Divider sx={{ marginY: "1rem" }} />
        <Typography>{post.body}</Typography>
        <Divider sx={{ marginY: "1rem" }} />
      </Container>
      <Container>
        <Typography color="GrayText" variant="h4" marginBottom="8">
          Comments
          <Grid container spacing="18">
            {comments.map((comment) => {
              return (
                <Grid
                  item
                  xl={3}
                  lg={4}
                  md={6}
                  xs={12}
                  onClick={() => history.push(`/author/${comment.authorId}`)}
                >
                  <Card sx={{ padding: "1rem", cursor: "pointer" }}>
                    <CardHeader
                      avatar={
                        <Avatar sx={{ bgColor: red[500] }}>
                          {comment.name[0]}
                        </Avatar>
                      }
                      title={
                        <Typography variant="h6"> {comment.name} </Typography>
                      }
                    />
                    <Box></Box>
                    <Typography sx={{ paddingX: "1rem" }}>
                      {comment.body}
                    </Typography>
                  </Card>
                </Grid>
              );
            })}
          </Grid>
        </Typography>
      </Container>
    </DefaultLayout>
  );
};

export default Post;
