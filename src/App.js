// import './App.css';
import Home from "./components/Home";
import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import Content from "./components/Content";
import { ThemeProvider } from "@material-ui/core";
import theme from "./common/theme";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";

const useStyles = makeStyles({
  app: {
    position: "relative",
    width: "100%",
    maxWidth: "100%",
  },
});

function App() {
  const classes = useStyles();
  const scrollDown = useSelector((state) => state.scrollDown);
  const [load, setLoad] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoad(false);
    }, 1500);
    return () => {
      clearTimeout(timeout);
    };
  });
  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.app}>
        {load ? <Loader /> : <Home />}
        {scrollDown ? <Content /> : undefined}
      </Box>
    </ThemeProvider>
  );
}

export default App;
