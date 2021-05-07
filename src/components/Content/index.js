import React, { useState } from "react";
import { Box, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { changeScrollDown } from "../../action";
import TitleContent from "../TitleContent";
import Summary from "../Summary";
import Avatar from "../Avatar";
import SoftSkill from "../SoftSkill";
import Project from "../Project";
import Education from "../Education";
import Download from "../Download";
import { Animated } from "react-animated-css";

const useStyles = makeStyles((theme) => ({
  "@global": {
    "*::-webkit-scrollbar": {
      width: "1px",
    },
    "*::-webkit-scrollbar-track": {
      "-webkit-box-shadow": "inset 0 0 6px rgba(0,0,0,0.00)",
    },
    "*::-webkit-scrollbar-thumb": {
      backgroundColor: "rgba(0,0,0,.1)",
    },
  },
  content: {
    "& .content-body": {
      padding: "50px",
      [theme.breakpoints.down("xs")]: {
        padding: "20px",
      },
    },
  },
}));
function Content() {
  const classes = useStyles();

  const [scrollDown, setScrollDown] = useState(
    useSelector((state) => state.scrollDown)
  );
  const [zoomLanguage, setZoomLanguage] = useState(false);
  const [zoomSkill, setZoomSkill] = useState(false);
  const [zoomProject, setZoomProject] = useState(false);
  const [zoomEducation, setZoomEducation] = useState(false);
  const dispatch = useDispatch();
  const handleScroll = (scrollDown) => {
    const action = changeScrollDown(scrollDown);
    dispatch(action);
  };
  useEffect(() => {
    const scrollOffset = 100;
    const scrollLanguage = document.querySelector("#language");
    const scrollSoftSkill = document.querySelector("#soft-skill");
    const scrollProject = document.querySelector("#project");
    const scrollEducation = document.querySelector("#education");
    const elementInView = (ele, offset = 0) => {
      const elementTop = ele.getBoundingClientRect().top;
      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) - offset
      );
    };
    const handleScrollUp = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY === 0) {
        setScrollDown(false);
        setTimeout(() => {
          handleScroll(false);
        }, 1200);
      }
      if (elementInView(scrollLanguage, scrollOffset)) {
        setZoomLanguage(true);
      }
      if (elementInView(scrollSoftSkill, scrollOffset)) {
        setZoomSkill(true);
      }
      if (elementInView(scrollProject, scrollOffset)) {
        setZoomProject(true);
      }
      if (elementInView(scrollEducation, scrollOffset)) {
        setZoomEducation(true);
      }
    };
    window.addEventListener("scroll", handleScrollUp, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScrollUp);
    };
  });
  return (
    <Box width="100%" className={classes.content}>
      <Grid container display="flex" justify="flex-end">
        <Grid item lg={5} md={4}>
          <Box width="40%" bgcolor="transparent"></Box>
        </Grid>
        <Grid item lg={7} md={8} sm={12}>
          <Box bgcolor="transparent" overflow="hidden">
            <Animated
              animationIn="slideInRight"
              animationOut="slideOutRight"
              animationInDelay={400}
              animationOutDuration={1200}
              isVisible={scrollDown}
            >
              <Box width="100%" bgcolor="white" className="content-body">
                <Animated
                  animationIn="fadeInUp"
                  animationOut="fadeOutDown"
                  animationInDelay={600}
                  animationOutDuration={1000}
                  isVisible={scrollDown}
                >
                  <TitleContent />
                  <Summary />
                  <Avatar zoom={zoomLanguage} />
                  <SoftSkill zoom={zoomSkill} />
                  <Project zoom={zoomProject} />
                  <Education zoom={zoomEducation} />
                  <Download />
                </Animated>
              </Box>
            </Animated>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Content;
