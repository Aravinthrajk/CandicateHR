import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { red } from "@mui/material/colors";
import { grey } from "@mui/material/colors";

let theme = createTheme({
  spacing: 4,
  palette: {
    background: {
      default: "#050517",
    },
    primary: {
      main: "#cef9ea",
    },
    secondary: {
      main: "#21c672",
    },
    warning: {
      main: "#d93e0b",
    },
    info: {
      main: "#16A596",
    },
    success: {
      main: "#76ff03",
    },
    success1: {
      main: "#3ed90b",
    },
    error: {
      main: red.A400,
    },
    dark: {
      main: "#002c36",
    },
    warm1: {
      main: "#F2F2F2",
    },
    warm: {
      main: "#f5f5f5",
    },
  },

  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    h3: {
      color: "#f5f5f5", // Set the color for h5
    },

    h2: {
      color: "#f5f5f5",
    },
    h5: {
      color: "#f5f5f5",
    },
  },

  spacing: 16,

  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          // background: `rgba(230,238,255,0.50)`,
          // backdropFilter: `blur(20px)`,
          background: "white",
          borderRadius: "1rem",
          // display: 'flex',
          transition: "0.2s",
          margin: "0 2rem",
        },
        "& .card:hover": {
          transform: "translateY(-2rem)",
        },
      },
    },
  },
});

theme = responsiveFontSizes(theme);
export default theme;
