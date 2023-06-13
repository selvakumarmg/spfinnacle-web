import React from 'react';
import '../App.css';
import TestimonialSection from '../TestimonialSection';
import Header from '../components/Header';
import FeaturesSection from '../components/FeaturesSection';
import ScrollToTopButton from '../components/ScrollToTopButton';
import Footer from '../components/Footer';

const Main = () => {
  return (
    <div className="app">
      <Header />
      <section className="hero-section">
        <div className="hero-content">
          <h1>Manage Your Finances with Ease</h1>
          <p>MoneyView helps you track your expenses, budget effectively, and achieve your financial goals.</p>
          <button className="btn btn-get-started">Get Started</button>
        </div>
        <div className="hero-image">
            <h1>Image</h1>
        </div>
      </section>
      <FeaturesSection />
      <TestimonialSection />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default Main;
