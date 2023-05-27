import React from 'react';
import './App.css';

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    designation: "CEO, Company ABC",
    quote: "MoneyView has transformed the way we manage our finances. It provides a comprehensive view of our expenses and helps us stay on track with our budget. Highly recommended!",
  },
  {
    id: 2,
    name: "Jane Smith",
    designation: "Freelancer",
    quote: "I have been using MoneyView for over a year, and it has been an absolute game-changer. It's intuitive, user-friendly, and has helped me take control of my finances like never before.",
  },
  {
    id: 3,
    name: "Michael Johnson",
    designation: "Investor",
    quote: "MoneyView simplifies financial management and makes it accessible to everyone. The insights and analytics it provides have been instrumental in making informed investment decisions.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="testimonial-section">
      <h2>Testimonials</h2>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <div className="testimonial-card" key={testimonial.id}>
            <p className="testimonial-quote">{testimonial.quote}</p>
            <p className="testimonial-name">{testimonial.name}</p>
            <p className="testimonial-designation">{testimonial.designation}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialSection;
