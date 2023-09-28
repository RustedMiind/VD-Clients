import { SwipeableDrawer, Typography, Stack } from "@mui/material";
import logo from "../../../assets/images/logo-vision.png";

function Sidebar(props: PropsType) {
  return (
    <SwipeableDrawer
      anchor={"left"}
      open={props.isOpen}
      onClose={props.close}
      onOpen={props.open}
    >
      <Stack
        sx={{ px: 2, py: 4 }}
        alignItems={"center"}
        width={350}
        maxWidth={"100vw"}
        spacing={2}
      >
        <Stack alignItems={"center"}>
          <img src={logo} alt="logo" style={{ width: 100 }} />
          <Typography variant="h5" fontWeight={"bold"}>
            أبعاد الرؤية
          </Typography>
        </Stack>
      </Stack>
    </SwipeableDrawer>
  );
}

interface PropsType {
  isOpen: boolean;
  close: () => void;
  open: () => void;
}

export default Sidebar;
