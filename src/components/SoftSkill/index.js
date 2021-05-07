import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { Animated } from "react-animated-css";
const useStyles = makeStyles((theme) => ({
  softSkill: {
    "& h2": {
      fontWeight: "400",
      fontSize: "2rem",
      paddingBottom: "10px",
      borderBottom: "2px dashed #69606b",
    },
    "& .animated": {
      display: "flex",
      width: "45%",
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },

    "& .skill-content": {
      transform: "scale(1)",
      transition: "all 0.3s",
      "&:hover": {
        transform: "scale(1.1)",
      },
      "&:hover p": {
        color: "#cf4a5c",
      },
      "& img": {
        maxWidth: "100%",
      },
      "& p": {
        textTransform: "uppercase",
        transition: "all 0.3s",
      },
    },
  },
}));
function SoftSkill(props) {
  const classes = useStyles();

  const mySoftSkill = useSelector((state) => state.profile.softSkill);

  return (
    <Box className={classes.softSkill}>
      <Box marginBottom={2}>
        <Typography variant="h2" color="primary">
          SOFT SKILL
        </Typography>
      </Box>
      <div id="soft-skill"></div>
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {[...mySoftSkill].map((skill, ele) => {
          return (
            <Animated
              animationIn="zoomIn"
              animationInDuration={1000}
              isVisible={props.zoom}
              key={ele}
            >
              <Box
                display="flex"
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                boxShadow={5}
                width="100%"
                marginBottom={2}
                borderRadius="10px"
                paddingY="20px"
                className="skill-content"
              >
                <Box width="15%" marginBottom={2}>
                  <img src={skill.img} alt="skill-icon" />
                </Box>
                <Box>
                  <Typography>{skill.title}</Typography>
                </Box>
              </Box>
            </Animated>
          );
        })}
      </Box>
    </Box>
  );
}

export default SoftSkill;
