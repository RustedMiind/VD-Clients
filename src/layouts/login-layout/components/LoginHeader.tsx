import { Typography } from "@mui/material";
import Stack from "@mui/material/Stack";
import logo from "../../../assets/images/logo-vision.png";
import logo2 from "../../../assets/images/jeddah-logo.png";

function LogoContainer(props: ContainerPropsType) {
  return (
    <Stack
      sx={{
        height: "5rem",
        img: {
          height: "100%",
        },
      }}
    >
      <img src={props.logo} alt="logo" />
    </Stack>
  );
}
type ContainerPropsType = {
  // children : React.ReactNode;
  logo: string;
};

function LoginHeader() {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        py: 2,
        px: { xs: 1, md: 8 },
      }}
    >
      <Stack
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "100%",
          height: "fit-content",
          justifyContent: "space-between",
        }}
      >
        <LogoContainer logo={logo} />
        <Typography
          variant="h2"
          sx={{ fontSize: { xs: "32px", md: "48px" } }}
          textAlign={"center"}
        >
          بوابة جدة
        </Typography>
        <LogoContainer logo={logo2} />
      </Stack>
    </Stack>
  );
}

export default LoginHeader;
