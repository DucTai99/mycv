import { Box } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ring from "../../img/ring.gif";
import React from "react";

const useStyles = makeStyles({
  loader: {
    width: "100%",
    height: "100vh",
  },
  "& img": {
    maxWidth: "100%",
  },
});
function Loader() {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      className={classes.loader}
    >
      <img src={ring} alt="load" />
    </Box>
  );
}

export default Loader;
