import React from "react";
import { Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import YouTubeIcon from "@material-ui/icons/YouTube";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Animated } from "react-animated-css";
const useStyles = makeStyles((theme) => ({
  project: {
    "& h2": {
      fontWeight: "400",
      fontSize: "2rem",
      paddingBottom: "10px",
      borderBottom: "2px dashed #69606b",
    },
    "& .animated": {
      display: "flex",
      width: "48%",
      [theme.breakpoints.down("xs")]: {
        width: "90%",
      },
    },
    "& .project-content": {
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#13121278",
        zIndex: 1,
      },
      "&:hover": {
        "& .project-reference": {
          top: "85%",
        },
      },
      "& .project-title": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 2,
        "& p": {
          fontWeight: "600",
          fontSize: "1.5rem",
        },
      },
      "& .project-reference": {
        position: "absolute",
        top: "100%",
        left: "50%",
        width: "100%",
        transform: "translate(-50%)",
        backgroundColor: "#ffffff",
        transition: "all 0.5s",
        zIndex: 3,
        "& a": {
          color: "initial",
          margin: "10px",
        },
      },
    },
  },
}));
function Project(props) {
  const classes = useStyles();
  const myProject = useSelector((state) => state.profile.project);
  return (
    <Box className={classes.project}>
      <Box marginBottom={2}>
        <Typography variant="h2" color="primary">
          PROJECT
        </Typography>
      </Box>
      <div id="project"></div>
      <Box display="flex" flexWrap="wrap" justifyContent="space-evenly">
        {[...myProject].map((project, ele) => {
          return (
            <Animated
              animationIn="zoomIn"
              animationInDuration={1500}
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
                height="300px"
                marginBottom={2}
                borderRadius="10px"
                paddingY="20px"
                className="project-content"
                overflow="hidden"
                style={{
                  backgroundImage: `url(${project.img})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <Box
                  className="project-title"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography color="error" align="center">
                    {project.title}
                  </Typography>
                </Box>
                <Box
                  className="project-reference"
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                >
                  <a href={project.git} target="_blank" rel="noreferrer">
                    <GitHubIcon />
                  </a>
                  {project.youtube.length === 0 ? undefined : (
                    <a
                      href={project.youtube}
                      target="_blank"
                      rel="noreferrer"
                      style={{ color: "#f00" }}
                    >
                      <YouTubeIcon />
                    </a>
                  )}
                </Box>
              </Box>
            </Animated>
          );
        })}
      </Box>
    </Box>
  );
}

export default Project;
