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
        <Typography color={"white"} textAlign={"center"}>
          جميع الحقوق محفوظة - مكتب ابعاد الرؤية للاستشارات الهندسية
        </Typography>
      </Stack>
    </Stack>
  );
}

export default LoginFooter;
