import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import hat from "../../img/hat.png";
import { Animated } from "react-animated-css";
const useStyles = makeStyles((theme) => ({
  education: {
    "& h2": {
      fontWeight: "400",
      fontSize: "2rem",
      paddingBottom: "10px",
      borderBottom: "2px dashed #69606b",
    },
    "& img": {
      maxWidth: "100%",
    },
    "& h5": {
      fontWeight: "600",
      fontSize: "1.2rem",
    },
    "& h3": {
      fontWeight: "600",
      fontSize: "1.8rem",
      [theme.breakpoints.down("xs")]: {
        paddingTop: "10px",
        fontSize: "1.6rem",
      },
    },
  },
}));
function Education(props) {
  const classes = useStyles();
  const myEducation = useSelector((state) => state.profile.education);
  return (
    <Box className={classes.education} marginBottom={2}>
      <Box marginBottom={2}>
        <Typography variant="h2" color="primary">
          EDUCATION
        </Typography>
      </Box>
      <div id="education"></div>
      <Grid container display="flex" alignItems="center">
        <Grid item sm={5} xs={12}>
          <Animated
            animationIn="zoomIn"
            animationInDuration={1000}
            isVisible={props.zoom}
            style={{ with: "100%", display: "flex", alignItems: "center" }}
          >
            <Box display="flex" width="100%" alignItems="center">
              <Box width="12%">
                <img src={hat} alt="graduation-icon" />
              </Box>
              <Box width="88%" paddingLeft="15px">
                <Typography variant="h5" color="primary">
                  {myEducation.school}
                </Typography>
                <Typography color="secondary">{myEducation.time}</Typography>
              </Box>
            </Box>
          </Animated>
        </Grid>
        <Grid item sm={7} xs={12}>
          <Animated
            animationIn="zoomIn"
            animationInDuration={1000}
            isVisible={props.zoom}
            style={{ with: "100%" }}
          >
            <Box width="100%">
              <Typography variant="h3" color="primary">
                {myEducation.specialized}
              </Typography>
              <Typography color="secondary">
                {myEducation.description}
              </Typography>
            </Box>
          </Animated>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Education;
