import { Box, Typography, Icon } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  view: {
    cursor: "pointer",
    position: "absolute",
    left: "50%",
    bottom: 0,
    transform: "translate(-50%,0)",
    "&:hover": {
      animation: "$upDown 0.5s infinite alternate",
    },
    "& p": {
      fontSize: "0.9rem",
    },
    "& span": {
      fontSize: "5rem",
    },
  },
  "@keyframes upDown": {
    from: {
      bottom: "0",
      transform: "translate(-50%,0)",
    },
    to: {
      bottom: "2%",
      transform: "translate(-50%,-2%)",
    },
  },
});
function View() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      className={classes.view}
    >
      <Box>
        <Typography color="error">View Profile</Typography>
      </Box>
      <Box>
        <Icon color="error">keyboard_arrow_down</Icon>
      </Box>
    </Box>
  );
}

export default View;
