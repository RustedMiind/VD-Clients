import axios from "axios";
import { Dispatch, AnyAction } from "redux";
import api from "../../statics/api";
import ApiResponse from "../../types/ApiResponse";
import {
  UserType,
  setUserError,
  setUserLoading,
  setuser,
} from "../reducers/userReducer";

export function requestSetUser(dispatch: Dispatch<AnyAction>) {
  return new Promise((resolve, reject) => {
    dispatch(setUserLoading());
    axios
      .get<ApiResponse<UserType>>(api("client/service-page"))
      .then((res) => {
        dispatch(setuser({ services: res.data.data }));
        resolve(res.data);
      })
      .catch((err) => {
        dispatch(setUserError());
        reject(err);
      });
  });
}
