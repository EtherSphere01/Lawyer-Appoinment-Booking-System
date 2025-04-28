import React, { use } from "react";
import { AuthContext } from "../AuthContext/AuthContext";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
      </div>
    );
  }
  if (!user) {
    return <Navigate to="/sign-in" />;
  }
  return children;
};

export default PrivateRoute;
