import { createSlice } from "@reduxjs/toolkit";
import { setCookie } from "../../functions/cookies";

export type UserStateType = {
  user: UserType | "error" | "loading" | "unkown";
};

const initialState: UserStateType = { user: "loading" };
export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setuser: (state: UserStateType, action): UserStateType => {
      return { user: action.payload.user };
    },
    setUserError: (): UserStateType => {
      setCookie("token", "", 0.0001);
      return { user: "error" };
    },
    setUserLoading: (): UserStateType => {
      return { user: "loading" };
    },
    setUserUnkown: (): UserStateType => {
      return { user: "unkown" };
    },
  },
});

export type UserResponseType = {
  client: UserType;
  token: string;
};

export type UserType = {
  id: number;
  name: string;
  phone: string;
  email: string;
  type: "individual";
  image: null | string;
  card_id: string;
  card_image: string;
  status: null;
  letter_head: null;
  branch_id: number;
  branch: null;
};

export const initialService: UserStateType = { user: "unkown" };

// export type userType = ServiceType[] | "error" | "loading";

export const { setuser, setUserLoading, setUserError, setUserUnkown } =
  userSlice.actions;
export default userSlice.reducer;
