import React from "react";
import { Box, Typography, Icon } from "@material-ui/core";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  titleContent: {
    "& h1": {
      fontWeight: "900",
      fontSize: "3rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "2.3rem",
      },
      // [theme.breakpoints.up("sm")]: {
      //   fontSize: "3.0rem",
      // },
      // [theme.breakpoints.up("md")]: {
      //   fontSize: "4.0rem",
      // },
      // [theme.breakpoints.up("lg")]: {
      //   fontSize: "4.5rem",
      // },
    },
    "& span": {
      marginRight: "20px",
      fontSize: "1.2rem",
    },
    "& a": {
      textDecoration: "none",
    },
  },
}));

function TitleContent() {
  const name = useSelector((state) => state.profile.name);
  const phone = useSelector((state) => state.profile.phone);
  const email = useSelector((state) => state.profile.email);
  const github = useSelector((state) => state.profile.gitHub);
  const classes = useStyles();
  return (
    <Box display="flex" flexDirection="column" className={classes.titleContent}>
      <Box marginBottom={2}>
        <Typography variant="h1" color="primary">
          {name}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Icon color="primary">phone</Icon>
        <a href="tel:+84379252699">
          <Typography color="primary">{phone}</Typography>
        </a>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Icon color="primary">email</Icon>
        <a href="mailto:ductaiit99@gmail.com">
          <Typography color="primary">{email}</Typography>
        </a>
      </Box>
      <Box display="flex" alignItems="center" marginBottom={2}>
        <Box marginRight="20px">
          <GitHubIcon color="primary" fontSize="small" />
        </Box>
        <a href="https://github.com/DucTai99" target="_blank" rel="noreferrer">
          <Typography color="primary">{github}</Typography>
        </a>
      </Box>
    </Box>
  );
}

export default TitleContent;
