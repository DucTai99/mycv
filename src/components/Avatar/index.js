import React from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import avatar from "../../img/avatar.png";
import html from "../../img/html.png";
import css from "../../img/css.png";
import js from "../../img/js.png";
import java from "../../img/java.png";
import reactjs from "../../img/reactjs.png";
import mysql from "../../img/mysql.png";
import vietnam from "../../img/vietnam.png";
import japan from "../../img/japan.png";
import english from "../../img/english.png";
import { Animated } from "react-animated-css";
const useStyles = makeStyles((theme) => ({
  avatar: {
    "& h2": {
      fontWeight: "400",
      fontSize: "2rem",
    },
    "& img": {
      maxWidth: "100%",
    },
    "& .tecnology-language": {
      padding: "0px 20px",
      [theme.breakpoints.down("xs")]: {
        padding: "0px",
      },
    },
  },
}));

function Avatar(props) {
  const classes = useStyles();
  const logos = [java, reactjs, mysql, html, css, js];
  const flags = [vietnam, japan, english];
  return (
    <Box display="flex" className={classes.avatar}>
      <Grid container display="flex">
        <Grid item sm={6}>
          <Box width="100%" marginBottom={2}>
            <img src={avatar} alt="avatar" />
          </Box>
        </Grid>
        <Grid item sm={6} xs={12}>
          <Box width="100%" className="tecnology-language">
            <Typography variant="h2" color="primary">
              TECHNOLOGY
            </Typography>
            <div id="technology"></div>
            <Box display="flex" flexWrap="wrap">
              {[...logos].map((logo, ele) => {
                return (
                  <Box
                    key={ele}
                    width="20%"
                    display="flex"
                    justifyContent="center"
                    margin={2}
                  >
                    <img src={logo} alt="logo" />
                  </Box>
                );
              })}
            </Box>
            <br />
            <Typography variant="h2" color="primary">
              LANGUAGE
            </Typography>
            <div id="language"></div>
            <Box display="flex" flexWrap="wrap">
              {[...flags].map((flag, ele) => {
                return (
                  <Box
                    key={ele}
                    width="20%"
                    display="flex"
                    justifyContent="center"
                    margin={2}
                  >
                    <Animated
                      animationIn="zoomIn"
                      animationInDuration={1000}
                      isVisible={props.zoom}
                      style={{
                        with: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <img src={flag} alt="logo" />
                    </Animated>
                  </Box>
                );
              })}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Avatar;
