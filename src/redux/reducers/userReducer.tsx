import { createSlice } from "@reduxjs/toolkit";

export type UserStateType = {
  user: UserType | "error" | "loading";
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
      return { user: "error" };
    },
    setUserLoading: (): UserStateType => {
      return { user: "loading" };
    },
  },
});

export type UserType = {
  id: number;
  name: string;
  title: string;
  description: string;
  link: string | null;
  details: string | null;
  image: string;
  category_id: number;
  order_id: number;
};

export const initialService: UserStateType = { user: "loading" };

// export type userType = ServiceType[] | "error" | "loading";

export const { setuser, setUserLoading, setUserError } = userSlice.actions;
export default userSlice.reducer;
