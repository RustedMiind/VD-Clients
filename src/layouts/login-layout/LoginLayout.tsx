import { Stack, Typography } from "@mui/material";
import LoginHeader from "./components/LoginHeader";
import LoginFooter from "./components/LoginFooter";
import bg from "../../assets/images/login-bg.png";
import { Routes, Route } from "react-router-dom";
import Login from "./steps/Login";
import Handler from "./steps/Handler";
import ChooseService from "./steps/ChooseService";

function LoginLayout(props: PropsType) {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "column",
      }}
    >
      <LoginHeader />
      <Stack
        sx={{
          width: "100%",
          backgroundColor: "rgb(255,255,255,0.9)",
          px: 1,
          py: 2,
          // maxHeight: "70%",
          overflowY: "auto",
          alignItems: "center",
          justifyContent: "center",
          // flexGrow: 1,
          height: "28rem",
        }}
      >
        <Routes>
          <Route path="/login" element={<Handler />} />
          <Route path="/service" element={<ChooseService />} />
        </Routes>
      </Stack>
      <LoginFooter />
    </Stack>
  );
}

type PropsType = {};

export default LoginLayout;
