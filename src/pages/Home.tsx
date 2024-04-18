import CompanyLogo from "assets/images/CompanyLogo";
import React from "react";
import "react-circular-progressbar/dist/styles.css";
import { Helmet } from "react-helmet";
import AboutPage from "./Index/AboutPage";
import CareerPage from "./Index/CareerPage";
import Footer from "./Index/Footer";
import ImageCarousel from "./Index/ImageCarousel";
import MeetOurTeam from "./Index/MeetOurTeam";
import Navbar from "./Index/Navbar";
import ProductPage from "./Index/ProductPage";
import ScrollToTopButton from "./Index/ScrollToTheTop";
import Services from "./Index/Services";
import Testimonial from "./Index/Testimonial";
import TrustedBanksHC from "./Index/TrustedBanksHC";
import WelcomePage from "./Index/WelcomePage";
import { menuItems } from "./constants/navbar";

export default function Home() {
  return (
    <>
      <div>
        <Helmet>
          <title>SP Finnacle</title>
          <meta
            name="description"
            content="Web site created using create-react-app"
          />
        </Helmet>

        <Navbar logo={<CompanyLogo />} menuItems={menuItems} />
        {/* <CarouselPage /> */}
        <ImageCarousel />
        <WelcomePage />
        <AboutPage />
        <TrustedBanksHC />
        <Services />
        <ProductPage />
        <Testimonial />
        <MeetOurTeam />
        <Footer />
        <CareerPage />
        <ScrollToTopButton />
      </div>
    </>
  );
}
