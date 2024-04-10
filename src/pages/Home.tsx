import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet";
import AboutPage from "./Index/AboutPage";
import CarouselPage from "./Index/CarouselPage";
import HeaderPage from "./Index/HeaderPage";
import TrustedBanksHC from "./Index/TrustedBanksHC";
import WelcomePage from "./Index/WelcomePage";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>SP Finnacle</title>
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
      </Helmet>
      <HeaderPage />
      <CarouselPage />
      <WelcomePage />
      <AboutPage />
      <TrustedBanksHC />
    </>
  );
}
