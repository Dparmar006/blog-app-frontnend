import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useHistory } from "react-router-dom";
import { Grid } from "@mui/material";

export default function AuthorCard() {
  const history = useHistory();
  return (
    <Grid item xl={3} lg={4} sm={6} xs={12}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Author Name
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">View posts</Button>
          <Button
            onClick={() => {
              history.push("/author/1");
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
