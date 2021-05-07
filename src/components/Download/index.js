import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import CloudDownloadIcon from "@material-ui/icons/CloudDownload";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));
function Education() {
  const classes = useStyles();
  const cv = useSelector((state) => state.profile.cv);
  return (
    <Box display="flex" alignItems="center" justifyContent="center">
      <Button
        variant="contained"
        color="default"
        href={cv}
        target="_blank"
        className={classes.button}
        startIcon={<CloudDownloadIcon />}
      >
        <Typography color="primary">Download CV</Typography>
      </Button>
    </Box>
  );
}

export default Education;
