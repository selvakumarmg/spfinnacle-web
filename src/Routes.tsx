import Home from "pages/Home";
import EmiCalculator from "pages/Index/EmiCalculator";
import React from "react";
import { useRoutes } from "react-router-dom";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/emicalcualtor", element: <EmiCalculator /> },
  ]);

  return element;
};

export default ProjectRoutes;
