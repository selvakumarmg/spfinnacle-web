import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet";
import AboutPage from "./Index/AboutPage";
import CareerPage from "./Index/CareerPage";
import CarouselPage from "./Index/CarouselPage";
import Footer from "./Index/Footer";
import HeaderPage from "./Index/HeaderPage";
import MeetOurTeam from "./Index/MeetOurTeam";
import ProductPage from "./Index/ProductPage";
import ScrollToTopButton from "./Index/ScrollToTheTop";
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
      <ScrollToTopButton />
      <HeaderPage />
      <CarouselPage />
      <WelcomePage />
      <AboutPage />
      <TrustedBanksHC />
      <Services />
      <ProductPage />
      <Testimonial />
      <MeetOurTeam />
      {/* <ContactUs /> */}
      <Footer />
      <CareerPage />
    </>
  );
}
