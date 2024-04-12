import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet";
import AboutPage from "./Index/AboutPage";
import CarouselPage from "./Index/CarouselPage";
import ContactUs from "./Index/ContactUs";
import Footer from "./Index/Footer";
import HeaderPage from "./Index/HeaderPage";
import MeetOurTeam from "./Index/MeetOurTeam";
import Services from "./Index/Services";
import Testimonial from "./Index/Testimonial";
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
      <Services />
      <Testimonial />
      <MeetOurTeam />
      <ContactUs />
      <Footer />
    </>
  );
}
