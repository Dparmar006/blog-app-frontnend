import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";
import { useHistory } from "react-router-dom";

export default function PostCard({ post }) {
  const theme = useTheme();
  const history = useHistory();
  return (
    <Grid
      onClick={() => history.push(`/post/${post.id}`)}
      item
      xl={3}
      lg={4}
      sm={6}
      xs={12}
    >
      <Card sx={{ display: "flex", cursor: "pointer" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: 340 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              {post.title}
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {post.author}
            </Typography>
            <Typography noWrap color="gray">
              {post.body}
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}
