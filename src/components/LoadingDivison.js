import { CircularProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const LoadingDivison = ({ loading = true }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      sx={{ height: "14rem", width: "100%" }}
    >
      {loading && <CircularProgress />}
      {!loading && (
        <Typography variant="h2" textAlign="center">
          It looks empty in here
        </Typography>
      )}
    </Box>
  );
};

export default LoadingDivison;
