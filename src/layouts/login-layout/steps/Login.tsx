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
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useState } from "react";
import { isStringAllNumbers } from "../../../functions/isStringAllNumbers";

function Login() {
  const [state, setState] = useState<"show" | "loading" | "hide">("hide");
  const [nationalNumber, setNationalNumber] = useState("");
  const [otp, setOtp] = useState("");

  function handleNationalIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    const condition = isStringAllNumbers(e.target.value);
    if (condition) setNationalNumber(e.target.value);
  }
  function handleOtpChange(e: React.ChangeEvent<HTMLInputElement>) {
    const condition =
      e.target.value.length <= 6 && isStringAllNumbers(e.target.value);
    if (condition) setOtp(e.target.value);
  }

  return (
    <Stack width={"100%"} component={"form"}>
      <Typography sx={{ mb: 3 }} variant="h5">
        تسجيل الدخول
      </Typography>
      <Stack spacing={2}>
        <TextField
          disabled={state !== "hide"}
          value={nationalNumber}
          onChange={handleNationalIdChange}
          name="nationalId"
          label="رقم الهوية"
        />
        <Stack
          sx={{
            transition: "500ms",
            // py: 1,
            ...(state === "show"
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
        {state === "loading" ? (
          <LoadingButton
            size="large"
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            تسجيل الدخول
          </LoadingButton>
        ) : (
          <Button
            variant="contained"
            size="large"
            onClick={() => {
              const last = state.toString();
              setState("loading");
              setTimeout(() => {
                setState(last === "show" ? "hide" : "show");
              }, 1500);
            }}
          >
            تسجيل الدخول
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

export default Login;
