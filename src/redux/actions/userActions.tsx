import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "../../statics/api";
import ApiResponse from "../../types/ApiResponse";
import {
  UserResponseType,
  UserType,
  setUserError,
  setUserLoading,
  setuser,
} from "../reducers/userReducer";
import { getCookie, setCookie } from "../../functions/cookies";

type ReqType = {
  id: number | string;
  otp: number | string;
  token: string;
  imei: "1423425";
  device_type: "ios";
  type: "individual";
};

const token = () => getCookie("token");

if (token()) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token()}`;
}
axios.defaults.headers.common["from"] = "website";

export function requestSetUser(dispatch: Dispatch<AnyAction>, data: ReqType) {
  return new Promise((resolve, reject) => {
    dispatch(setUserLoading());
    axios
      .post<ApiResponse<UserResponseType>>(api("confirm"), data)
      .then((res) => {
        console.log("a7a", res.data.data);
        dispatch(setuser({ user: res.data.data.client }));
        resolve(res);
        setCookie("token", res.data.data.token, 10);
      })
      .catch((err) => {
        dispatch(setUserError());
        reject(err);
      });
  });
}
export function checkUser(dispatch: Dispatch<AnyAction>) {
  return new Promise((resolve, reject) => {
    if (token()) {
      dispatch(setUserLoading());
      axios
        .post<ApiResponse<UserType>>(api("client/user"))
        .then((res) => {
          console.log("a7a", res.data.data);
          dispatch(setuser({ user: res.data.data }));
          resolve(res.data);
        })
        .catch((err) => {
          dispatch(setUserError());
          reject(err);
        });
    } else {
      dispatch(setUserError());
      reject("No Token Saved");
    }
  });
}
