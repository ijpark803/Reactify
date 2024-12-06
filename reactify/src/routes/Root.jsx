import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Navigation from "../Navigation";

export default function Root() {
  return (
    <div className="container">
      <Navigation />
      <Outlet />
      <ToastContainer />
    </div>
  );
}