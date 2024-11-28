import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";

export default function Root() {
  return (
    <div className="container">
      <Outlet />
      <ToastContainer />
    </div>
  );
}