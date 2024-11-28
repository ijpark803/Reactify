import React from "react";
import { Navigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

const ProtectedRoute = ({ children }) => {
  const auth = getAuth();
  const user = auth.currentUser;

  // If the user is authenticated, render the children (protected page)
  if (user) {
    return children;
  }

  // Otherwise, redirect to the login page
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
