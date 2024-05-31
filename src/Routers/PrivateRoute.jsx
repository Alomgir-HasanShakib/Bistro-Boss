import { useContext } from "react";
import { AuthContext } from "../Context/Authentication";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loader } = useContext(AuthContext);
  const location = useLocation();
  if (user) return children;
  if (loader) return <p>loading....</p>;

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
