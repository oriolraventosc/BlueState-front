import { Navigate } from "react-router-dom";

interface ProtectedRouteWithAuthProps {
  isLogged: boolean;
  children: JSX.Element;
}

const ProtectedRouteWithAuth = ({
  isLogged,
  children,
}: ProtectedRouteWithAuthProps): JSX.Element => {
  if (isLogged) {
    return <Navigate to="/contacts" />;
  }

  return children;
};

export default ProtectedRouteWithAuth;
