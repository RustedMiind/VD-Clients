import { Height } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";

function LoginFooter() {
  return (
    <Stack
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "end",
        width: "100%",
        py: 2,
      }}
    >
      <Stack
        sx={{
          display: "flex",
          alignItems: "center",
          width: "100%",
          justifyContent: "space-between",
          flexDirection: "column-reverse",
        }}
      >
        <Typography>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Typography>
      </Stack>
    </Stack>
  );
}

export default LoginFooter;
