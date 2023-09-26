import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedComponent(props: PropsType): JSX.Element | null {
  const condition = false;
  const navigate = useNavigate();
  useEffect(() => {
    if (!condition) {
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
