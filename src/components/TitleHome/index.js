import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    position: "absolute",
    left: "50%",
    top: "40%",
    transform: "translate(-50%,-40%)",
    "& h1": {
      fontWeight: "bolder",
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.0rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "3.0rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "4.0rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "4.5rem",
      },
    },
    "& h4": {
      fontSize: "1.8rem",
      overflow: "hidden",
      borderRight: ".08em solid white",
      paddingRight: "5px",
      whiteSpace: "nowrap",
      margin: "0 auto",
      letterSpacing: ".15em",
      animation:
        "$typing 3.5s steps(40, end) ,$blinkCaret .75s step-end infinite",
      [theme.breakpoints.down("xs")]: {
        fontSize: "1.3rem",
      },
      [theme.breakpoints.up("sm")]: {
        fontSize: "1.4rem",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
      },
      [theme.breakpoints.up("lg")]: {
        fontSize: "1.8rem",
      },
    },
  },
  "@keyframes typing": {
    from: { width: 0 },
    to: { width: "100%" },
  },
  "@keyframes blinkCaret": {
    from: { borderColor: "transparent" },
    to: { borderColor: "transparent" },
    "50%": { borderColor: "white" },
  },
}));

function TitleHome() {
  const name = useSelector((state) => state.profile.name);
  const job = useSelector((state) => state.profile.job);
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" className={classes.title}>
      <Box marginBottom={4}>
        <Typography variant="h1" color="error" align="center">
          {name}
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" marginTop={4}>
        <Box display="inline">
          <Typography variant="h4" color="error" align="center">
            {job}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default TitleHome;
