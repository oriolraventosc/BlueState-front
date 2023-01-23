import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
  isLogged: boolean;
  children: JSX.Element;
}

const ProtectedRoute = ({
  isLogged,
  children,
}: ProtectedRouteProps): JSX.Element => {
  if (!isLogged) {
    return <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
