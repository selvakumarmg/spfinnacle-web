import React from 'react'
import { Navigate } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/dashboard.css'
import { images } from '../constants/images';

const Dashboard = () => {
    const isAuthenticated = false;

  // Redirect to login page if user is not authenticated
  if (isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
        <Header />
        <div className="dashboard">
      <div className="dashboard-content">
        <p>
          Take control of your finances with our powerful finance app. Track your expenses, manage your budget,
          and save for your financial goals. Stay on top of your money and make informed financial decisions.
        </p>
        <button className="dashboard-button">Get Started</button>
      </div>
      <div className="dashboard-image">
        <img src={images.financeAppImage} alt="Finance App" />
      </div>
    </div>
    </div>
  )
}

export default Dashboard