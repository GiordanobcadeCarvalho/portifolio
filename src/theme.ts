import { createTheme, responsiveFontSizes } from "@mui/material";

const createResponsiveTheme = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#1b1f3b", // Deep navy blue
      },
      secondary: {
        main: "#5c3c92", // Dark purple
      },
      error: {
        main: "#8b0000", // Deep red
      },
      warning: {
        main: "#ff4500", // Orange red
      },
      info: {
        main: "#274060", // Dark slate blue
      },
      success: {
        main: "#2e8b57", // Dark sea green
      },
      background: {
        default: "#121212", // Almost black
        paper: "#1e1e1e", // Very dark grey
      },
      text: {
        primary: "#e0e0e0", // Light grey
        secondary: "#b0b0b0", // Medium grey
      },
    },
    typography: {
      fontFamily: "Roboto Mono",
    },
  });

  return responsiveFontSizes(theme);
};

const theme = createResponsiveTheme();

export default theme;
