import { Stack, Typography } from "@mui/material";
import LoginHeader from "./components/LoginHeader";
import LoginFooter from "./components/LoginFooter";
import bg from "../../assets/images/login-bg.png";

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
          // flexGrow: 1,
          height: "28rem",
        }}
      >
        {props.children}
      </Stack>
      <LoginFooter />
    </Stack>
  );
}

type PropsType = {
  children: React.ReactNode;
};

export default LoginLayout;
