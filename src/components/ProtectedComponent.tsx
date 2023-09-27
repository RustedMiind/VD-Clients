import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserStateType } from "../redux/reducers/userReducer";

function ProtectedComponent(props: PropsType): JSX.Element | null {
  const user = useSelector((state: { user: UserStateType }) => state.user);

  const condition = user.user === "error";
  const navigate = useNavigate();
  useEffect(() => {
    if (condition) {
      navigate(props.redirect || "/auth/login");
    }
  });
  return props.children;
}

type PropsType = {
  children: JSX.Element;
  redirect?: string;
};

export default ProtectedComponent;
