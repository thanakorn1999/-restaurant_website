import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
// useNavigate
// useEffect

export function NotFound() {
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate(-1);
    }, 1000);
  }, []);
  return <>NotFound</>;
}

// export default Login;
