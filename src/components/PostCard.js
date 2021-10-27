import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import { Grid } from "@mui/material";

export default function PostCard() {
  const theme = useTheme();

  return (
    <Grid item xl={3} lg={4} sm={6} xs={12}>
      <Card sx={{ display: "flex", curser: "pointer" }}>
        <Box sx={{ display: "flex", flexDirection: "column", width: 340 }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              Post name
            </Typography>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              Mac Miller
            </Typography>
            <Typography noWrap color="gray">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia vero
              et voluptas quisquam incidunt alias magnam aspernatur hic quis
              earum inventore temporibus error voluptatem, molestiae accusantium
              culpa ab eum ducimus!
            </Typography>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
}
