import { Stack, Typography } from "@mui/material";
import Login from "./Login/Login";

function Handler() {
  return (
    <Stack
      sx={{
        width: "35rem",
        maxWidth: "100%",
      }}
    >
      <Login />
    </Stack>
  );
}

export default Handler;
