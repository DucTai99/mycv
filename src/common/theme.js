import { createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#444444",
    },
    secondary: {
      main: "#69606b",
    },
    error: {
      main: "#ffffff",
    },
  },
  typography: {
    fontFamily: ["Raleway", "Arial", "sans-serif"].join(","),
    fontSize: 14,
  },
});

export default theme;
