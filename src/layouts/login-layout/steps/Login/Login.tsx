import { Stack, Typography, TextField, Button } from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import LoadingButton from "@mui/lab/LoadingButton";
import React, { useEffect, useState } from "react";
import { isStringAllNumbers } from "../../../../functions/isStringAllNumbers";
import { useDispatch, useSelector } from "react-redux";
import { UserStateType } from "../../../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import api from "../../../../statics/api";
import axios from "axios";
import { requestSetUser } from "../../../../redux/actions/userActions";
import NationalIdInput from "./components/NationalIdInput";
import OtpInputContainer from "./components/OtpInputContainer";

function Login() {
  const [state, setState] = useState<"show" | "loading" | "hide">("hide");
  const [nationalNumber, setNationalNumber] = useState("");
  const [error, setError] = useState("");
  const [otp, setOtp] = useState("");
  const dispatch = useDispatch();

  function handleNationalIdChange(e: React.ChangeEvent<HTMLInputElement>) {
    const condition = isStringAllNumbers(e.target.value);
    if (condition) setNationalNumber(e.target.value);
  }
  function handleOtpChange(e: React.ChangeEvent<HTMLInputElement>) {
    const condition =
      e.target.value.length <= 6 && isStringAllNumbers(e.target.value);
    if (condition) setOtp(e.target.value);
  }

  const navigate = useNavigate();
  const user = useSelector((state: { user: UserStateType }) => state.user);
  useEffect(() => {
    if (typeof user.user !== "string") {
      navigate("/auth/service");
    }
  }, [user, navigate]);

  return (
    <Stack
      width={"100%"}
      component={"form"}
      onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        setState("loading");
        if (state === "hide") {
          axios
            .post(api("check"), {
              token: "token",
              imei: "1423425",
              device_type: "ios",
              id: nationalNumber,
              type: "individual",
            })
            .then(() => setState("show"))
            .catch((err) => {
              setState("hide");
              console.log("Raw Err", err);
              setError(err.response.data.message.message);
            });
        } else if (state === "show") {
          requestSetUser(dispatch, {
            otp,
            token: "token",
            imei: "1423425",
            device_type: "ios",
            id: parseInt(nationalNumber),
            type: "individual",
          })
            .then((res) => {
              console.log("response", res);
            })
            .catch((err) => {
              console.log(err);
              setError(err.data.message);
            });
        }
      }}
    >
      <Typography sx={{ mb: 3 }} variant="h5">
        تسجيل الدخول
      </Typography>
      <Stack spacing={2}>
        <NationalIdInput
          {...{
            value: nationalNumber,
            onChange: handleNationalIdChange,
            error,
            current: state === "hide",
          }}
        />
        <OtpInputContainer
          {...{
            value: otp,
            onChange: handleOtpChange,
            current: state === "show",
          }}
        />
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
          <Button variant="contained" size="large" type="submit">
            تسجيل الدخول
          </Button>
        )}
      </Stack>
    </Stack>
  );
}

export default Login;
