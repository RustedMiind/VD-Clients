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

function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Stack width={"100%"} component={"form"}>
      <Typography sx={{ mb: 3 }} variant="h5">
        تسجيل الدخول
      </Typography>
      <Stack spacing={2}>
        <TextField name="nationalId" label="رقم الهوية" />
        {/* <FormControl sx={{ m: 1, width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            كلمة السر
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="password"
          />
        </FormControl> */}
        {/* <Stack
          direction={"row"}
          width={"100%"}
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
        >
          <FormGroup>
            <FormControlLabel control={<Checkbox />} label="حفظ كلمة السر" />
          </FormGroup>
          <Typography>
            نسيت كلمة المرور؟{" "}
            <Link fontWeight={"bold"} color={"text.primary"} href="#">
              أعد تعيين كلمة السر
            </Link>
          </Typography>
        </Stack> */}
        <Button variant="contained" size="large">
          تسجيل الدخول
        </Button>
      </Stack>
    </Stack>
  );
}

export default Login;
