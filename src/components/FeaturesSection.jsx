import { Card } from "antd";
import {
  DollarOutlined,
  LineChartOutlined,
  BellOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import "../styles/features.css";

const FeaturesSection = () => {
  return (
    <section className="features-section">
      <h2>Features</h2>
      <div className="features-grid">
        <Card className="features-card">
          <div className="feature-icon">
            <DollarOutlined />
          </div>
          <h3>Expense Tracking</h3>
          <p>
            Effortlessly track your expenses and monitor your spending habits.
          </p>
        </Card>

        <Card>
          <div className="feature-icon">
            <LineChartOutlined />
          </div>
          <h3>Budgeting</h3>
          <p>
            Create personalized budgets and stay on top of your financial goals.
          </p>
        </Card>
        <Card>
          <div className="feature-icon">
            <BellOutlined />
          </div>
          <h3>Bill Reminders</h3>
          <p>
            Never miss a bill payment with timely reminders and notifications.
          </p>
        </Card>
        <Card>
          <div className="feature-icon">
            <BarChartOutlined />
          </div>
          <h3>Financial Insights</h3>
          <p>
            Gain valuable insights into your spending patterns and make informed
            financial decisions.
          </p>
        </Card>
      </div>
    </section>
  );
};

export default FeaturesSection;
