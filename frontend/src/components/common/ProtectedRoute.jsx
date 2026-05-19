import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {

  // Get token from localStorage
  const token = localStorage.getItem("token");

  // Check token
  if (!token) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;