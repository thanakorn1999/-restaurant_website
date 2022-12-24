import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#FF914D",

      light: "#skyblue",
      contrastText: "white",
    },
    secondary: {
      main: "#1760a5",
      contrastText: "white",
    },
    otherColor: {
      main: "#999",
      grey: "#D9D9D9",
    },
  },
});
