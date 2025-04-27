import React, { useState, useEffect } from 'react';
// import ./style.css
import "./style.css";
import pro from "../../assets/images/pro.jpg";
// import webdev2 from "../../assets/images/web-dev2.jpg";

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Default active is middle testimonial
  const [isMobile, setIsMobile] = useState(false);

  // Testimonials data
  const testimonials = [
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam et id dolore dolor, quisquam excepturi nostrum iusto dolorem, quae distinctio, nulla aut libero. Animi, temporibus saepe voluptatibus ratione dolorem.",
      image: pro, 
      name: "Melisa L. Hack",
      position: "Family child care provider"
    },
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam et id dolore dolor, quisquam excepturi nostrum iusto dolorem, quae distinctio, nulla aut libero. Animi, temporibus saepe voluptatibus ratione dolorem.",
      image: pro,
      name: "Viola C. Phillips",
      position: "Medical secretary"
    },
    {
      message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam laboriosam et id dolore dolor, quisquam excepturi nostrum iusto dolorem, quae distinctio, nulla aut libero. Animi, temporibus saepe voluptatibus ratione dolorem.",
      image: pro,
      name: "Arthur L. Perry",
      position: "Industrial Production Manager"
    }
  ];

  // Check if mobile on mount and when window resizes
  useEffect(() => {
    const checkIfMobile = () => {
      const mq = window.matchMedia("(min-width: 48em)");
      setIsMobile(!mq.matches);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <section className="testimonials__section ">
      {testimonials.map((testimonial, index) => (
        <div 
          key={index}
          className={`testimonials__block ${(isMobile || index === activeIndex) ? 'testimonials__block--active' : ''}`}
          onClick={() => setActiveIndex(index)}
        >
          <p className="testimonials__message">
            <span className="testimonials__message--dotter">
              {testimonial.message.substring(0, 60)}
            </span>
            <span className="testimonials__message--hider">
              {testimonial.message.substring(60)}
            </span>
          </p>
          <img 
            className="testimonials__picture" 
            src={testimonial.image} 
            alt={`${testimonial.name} profile picture`} 
          />
          <p className="testimonials__name">{testimonial.name}</p>
          <p className="testimonials__position">{testimonial.position}</p>
        </div>
      ))}
    </section>
  );
};

export default TestimonialsSection;