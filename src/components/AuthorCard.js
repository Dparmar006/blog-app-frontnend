import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { Grid } from "@mui/material";

export default function AuthorCard({ author }) {
  const history = useHistory();
  return (
    <Grid item xl={3} lg={4} sm={6} xs={12}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {author.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {author.bio}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View posts</Button>
          <Button
            onClick={() => {
              history.push(`/author/${author.id}`);
            }}
            size="small"
          >
            View Profile
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
}
