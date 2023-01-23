import { createTheme } from "@mui/material";

const MainTheme = createTheme({
  palette: {
    primary: {
      main: "#358EFD",
      light: "#4681f2",
      dark: "#1f2937",
      contrastText: "#111927",
    },
    secondary: {
      main: "#F4F6FA",
      light: "#EDEFF3",
      contrastText: "#255EC1",
    },
    text: {
      primary: "#1f2937",
      secondary: "#4681f2",
      disabled: "#ffffff",
    },
    warning: {
      main: "#fdeded",
    },
    success: {
      main: "#edf7ed",
    },
  },
  typography: {
    h1: {
      fontWeight: 500,
      fontSize: "2.5rem",
    },
    h2: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 400,
    },
    button: {
      fontSize: "1rem",
      fontWeight: 400,
    },
  },
  shape: {
    borderRadius: 10,
  },
});

//<Box sx={{ height: (MainTheme) => MainTheme.spacing(10) }} /> to apply the theme to a value

export default MainTheme;
