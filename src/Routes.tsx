import Home from "pages/Home";
import React from "react";
import { useRoutes } from "react-router-dom";

const ProjectRoutes = () => {
  let element = useRoutes([{ path: "/", element: <Home /> }]);

  return element;
};

export default ProjectRoutes;
