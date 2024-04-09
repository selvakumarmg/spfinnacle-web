import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import WireframeFour from "pages/WireframeFour";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "wireframefour",
      element: <WireframeFour />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
