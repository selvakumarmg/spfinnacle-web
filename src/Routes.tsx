import Home from "pages/Home";
import EmiCalculator from "pages/Index/EmiCalculator";
import LoanForm from "pages/Index/LoanForm";
import React from "react";
import { useRoutes } from "react-router-dom";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/emicalcualtor", element: <EmiCalculator /> },
    { path: "/loan-form", element: <LoanForm /> },
  ]);

  return element;
};

export default ProjectRoutes;
