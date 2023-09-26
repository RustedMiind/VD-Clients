import {
  Stack,
  Typography,
  TextField,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControlLabel,
  Checkbox,
  FormGroup,
  Link,
  IconButton,
  Button,
} from "@mui/material";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { isStringAllNumbers } from "../../../functions/isStringAllNumbers";

function Login() {
  const [visible, setVisible] = useState(false);
  const [nationalNumber, setNationalNumber] = useState("");
  const [otp, setOtp] = useState("");

  function handleNationalIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    const condition = isStringAllNumbers(e.target.value);
    if (condition) setNationalNumber(e.target.value);
  }
  function handleOtpChange(e: React.ChangeEvent<HTMLInputElement>) {
    const condition = e.target.value.length <= 6;
    if (condition) setOtp(e.target.value);
  }

  return (
    <Stack width={"100%"} component={"form"}>
      <Typography sx={{ mb: 3 }} variant="h5">
        تسجيل الدخول
      </Typography>
      <Stack spacing={2}>
        <TextField
          disabled={visible}
          value={nationalNumber}
          onChange={handleNationalIdChange}
          name="nationalId"
          label="رقم الهوية"
        />
        <Stack
          sx={{
            transition: "500ms",
            // py: 1,
            ...(visible
              ? {
                  maxHeight: "100px",
                  opacity: 1,
                  pointerEvents: "all",
                }
              : {
                  maxHeight: 0,
                  opacity: 0,
                  pointerEvents: "none",
                }),
          }}
        >
          <TextField
            value={otp}
            onChange={handleOtpChange}
            name="nationalId"
            label="رقم التفعيل المرسل علي الهاتف"
          />
          <Typography>
            لم يصلك كود الدخول؟
            <Button>اعد الارسال</Button>
          </Typography>
        </Stack>
        <Button
          variant="contained"
          size="large"
          onClick={() => {
            setTimeout(() => {
              setVisible(!visible);
            }, 500);
          }}
        >
          تسجيل الدخول
        </Button>
      </Stack>
    </Stack>
  );
}

export default Login;
