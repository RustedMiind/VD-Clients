import Stack from "@mui/material/Stack";
import "./assets/fonts/include.scss";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
import {
  Backdrop,
  Button,
  CircularProgress,
  ThemeProvider,
  Typography,
  createTheme,
} from "@mui/material";
import LoginLayout from "./layouts/login-layout/LoginLayout";
import Handler from "./layouts/login-layout/steps/Handler";
import { useDispatch, useSelector } from "react-redux";
import type {} from "@mui/lab/themeAugmentation";
import ProtectedComponent from "./components/ProtectedComponent";
import { useEffect } from "react";
import { checkUser } from "./redux/actions/userActions";
import {
  UserStateType,
  UserType,
  setUserError,
} from "./redux/reducers/userReducer";

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#F19B02",
      dark: "#d18400",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#F19B02",
    },
    background: {
      paper: "#FFFFFF",
      default: "#F1F1F1",
    },
    text: {
      primary: "#004693",
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
  const dispatch = useDispatch();
  useEffect(() => {
    checkUser(dispatch).then(console.log).catch(console.log);
  }, []);

  const user = useSelector((state: { user: UserStateType }) => state.user);
  console.log(user);

  return (
    <ThemeProvider theme={theme}>
      <Stack className="App">
        <Backdrop
          sx={{
            color: "primary.main",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            backgroundColor: "white",
          }}
          open={user.user === "unkown"}
          // onClick={handleClose}
        >
          <CircularProgress size={"80px"} color="primary" />
        </Backdrop>
        <Routes>
          <Route
            path="/*"
            element={
              <ProtectedComponent>
                <>
                  {typeof user.user === "object" && (
                    <>
                      <Typography variant="h4">
                        مرحبا بك يا {user.user.name}
                      </Typography>
                      <Button
                        onClick={() => {
                          dispatch(setUserError());
                        }}
                      >
                        تسجيل الخروج
                      </Button>
                    </>
                  )}
                  <Typography variant="h4">
                    هنا سوف يكون صفحة طلب التصحيح , تحت الانشاء
                  </Typography>
                </>
              </ProtectedComponent>
            }
          />
          <Route path="/auth/*" element={<LoginLayout />} />
        </Routes>
      </Stack>
    </ThemeProvider>
  );
}

export default App;
