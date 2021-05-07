import React from "react";
import TitleHome from "../TitleHome";
import { useSelector, useDispatch } from "react-redux";
import View from "../View";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { changeScrollDown } from "../../action";
import background from "../../img/background.png";

const useStyles = makeStyles({
  home: {
    width: "100%",
    height: "100%",
    maxWidth: "100%",
    maxHeight: "100%",
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "top",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: -2,
    "&::before": {
      content: "''",
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "#13121278",
      zIndex: -1,
    },
  },
});

function Home() {
  const classes = useStyles();
  const scrollDown = useSelector((state) => state.scrollDown);
  const dispatch = useDispatch();
  const handleScroll = (scrollDown) => {
    const action = changeScrollDown(scrollDown);
    dispatch(action);
  };
  const handleViewClick = () => {
    const action = changeScrollDown(true);
    dispatch(action);
  };
  const handleScrollDown = (event) => {
    const currentY = event.deltaY;
    if (currentY > 0) handleScroll(true);
  };
  return (
    <Box className={classes.home} onWheel={handleScrollDown}>
      <TitleHome />
      <Box onClick={handleViewClick}>{!scrollDown ? <View /> : undefined}</Box>
    </Box>
  );
}

export default Home;
