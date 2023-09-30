import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { UserStateType } from "../redux/reducers/userReducer";

function ProtectedComponent(props: PropsType): JSX.Element | null {
  const user = useSelector((state: { user: UserStateType }) => state.user);
  // use in production mode
  const redirectCondition = user.user === "error";

  // use in development mode
  // const redirectCondition = false;

  const navigate = useNavigate();
  useEffect(() => {
    if (redirectCondition) {
      navigate(props.redirect || "/auth/login");
    }
  }, [redirectCondition, user.user]);
  return props.children;
}

type PropsType = {
  children: JSX.Element;
  redirect?: string;
};

export default ProtectedComponent;
