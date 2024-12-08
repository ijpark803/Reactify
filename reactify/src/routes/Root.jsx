import { Outlet } from "react-router-dom";

import { ToastContainer } from "react-toastify";
import Navigation from "../Navigation";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const routeToTitle = {
  '/': 'Submit Entry | Reactify',
  '/home': 'Journal Entries | Reactify',
  '/home/:postId': `Entry Details | Reactify`,
  '/home/:postId/edit': 'Edit Entry | Reactify'
};

const getTitleForPath = (path) => {
  if (routeToTitle[path]) {
    return routeToTitle[path];
  }

  for (const route in routeToTitle) {
    const dynamicRouteRegex = new RegExp(
      `^${route.replace(/:\w+/g, "\\w+")}$`
    );
    if (dynamicRouteRegex.test(path)) {
      return routeToTitle[route];
    }
  }

  return "Reactify";
};

const UpdateDocumentTitle = () => {
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    const title = getTitleForPath(path);
    document.title = title;
  }, [location]);

  return null;
};


export default function Root() {
  return (
    <div className="container">
      <Navigation />
      <UpdateDocumentTitle />
      <Outlet />
      <ToastContainer />
    </div>
  );
}