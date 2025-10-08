import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ user, children, onOpenAuth }) => {
  if (!user) {
    // Option 1: Redirect to login page
    // return <Navigate to="/login" replace />;

    // Option 2: Open login modal
    if (onOpenAuth) {
      onOpenAuth("login");
    }
    return null; // Don't render the protected component
  }
  return children;
};

export default ProtectedRoute;
