import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  summary: {
    "& h2": {
      fontWeight: "400",
      fontSize: "2rem",
    },
    "& p": {
      fontSize: "1rem",
    },
  },
});

function Summary() {
  const classes = useStyles();
  const aboutMe = useSelector((state) => state.profile.aboutMe);
  return (
    <Box display="flex" flexDirection="column" className={classes.summary}>
      <Box marginBottom={2}>
        <Typography variant="h2" color="primary">
          ABOUT ME
        </Typography>
      </Box>
      {[...aboutMe].map((line, ele) => {
        return (
          <Box key={ele} marginBottom={2}>
            <Typography color="secondary">{line}</Typography>
          </Box>
        );
      })}
    </Box>
  );
}

export default Summary;
