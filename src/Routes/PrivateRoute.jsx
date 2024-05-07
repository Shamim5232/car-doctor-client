import { useContext } from "react";
import { ContextProvider } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(ContextProvider);
  const location = useLocation();
  if (user?.email) {
    return children;
  }
  if (loading) {
    return <progress className="progress w-56"></progress>;
  }
  return <Navigate to="/login" state={location.pathname}></Navigate>;
};

export default PrivateRoute;
