import React from 'react';
import './App.css';
import TestimonialSection from './TestimonialSection';
import Header from './components/Header';

const App = () => {
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
          {/* Hero Image */}
        </div>
      </section>
      <section className="features-section">
        <h2>Features</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">
              {/* Feature Icon */}
            </div>
            <h3>Expense Tracking</h3>
            <p>Effortlessly track your expenses and monitor your spending habits.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              {/* Feature Icon */}
            </div>
            <h3>Budgeting</h3>
            <p>Create personalized budgets and stay on top of your financial goals.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              {/* Feature Icon */}
            </div>
            <h3>Bill Reminders</h3>
            <p>Never miss a bill payment with timely reminders and notifications.</p>
          </div>
          <div className="feature">
            <div className="feature-icon">
              {/* Feature Icon */}
            </div>
            <h3>Financial Insights</h3>
            <p>Gain valuable insights into your spending patterns and make informed financial decisions.</p>
          </div>
        </div>
      </section>
      <TestimonialSection />
      <footer className="footer">
        <p>&copy; 2023 SP Finnacle . All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
