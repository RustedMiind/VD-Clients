import Stack from "@mui/material/Stack";
import "./assets/fonts/include.scss";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import LoginLayout from "./layouts/LoginLayout";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#004693",
    },
    secondary: {
      main: "#F19B02",
      // main: colors.deepOrange[500],
    },
    background: {
      paper: "#FFFFFF",
      default: "#F1F1F1",
    },
    text: {
      primary: "#ef5350",
      secondary: "#004693",
    },
  },
  typography: {
    fontFamily: "TheSans",
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: "#004693",
          fontFamily: "TheSans",
        },
      },
    },
    // MuiCssBaseline: {
    //   styleOverrides: `
    //     @font-face {
    //       font-family: 'TheSans';
    //       font-style: normal;
    //       font-display: swap;
    //       font-weight: 400;
    //       src: local('TheSans'), local('TheSans-Regular'), url(${TheSansWoff2}) format('woff2');
    //       unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
    //     }
    //   `,
    // },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack className="App">
        <Routes>
          <Route path="/" element={<>Main Page</>} />
          <Route
            path="/login"
            element={
              <LoginLayout>
                <div>lorem</div>
              </LoginLayout>
            }
          />
        </Routes>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
