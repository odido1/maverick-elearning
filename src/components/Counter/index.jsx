import React, { useEffect, useState, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function StatsCounter() {
  const [countersStarted, setCountersStarted] = useState(false);
  const sectionRef = useRef(null);
  
  const stats = [
    { target: 85, label: "Courses", suffix: "+" },
    { target: 27, label: "Tutors", suffix: "+" },
    { target: 12, label: "Mentors", suffix: "+" },
    { target: 90, label: "Certifications", suffix: "+" },
    { target: 15, label: "Awards", suffix: "+" },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
    
    // Create intersection observer to detect when the section is visible
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (entry.isIntersecting && !countersStarted) {
        startCounters();
        setCountersStarted(true);
      }
    }, { threshold: 0.2 }); // Trigger when 20% of the element is visible
    
    // Observe the section
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [countersStarted]);
  
  
  const startCounters = () => {

    const duration = 2000;
    const frameRate = 1000 / 60; 
    const totalFrames = Math.round(duration / frameRate);
    
    let frame = 0;
    
    const counter = setInterval(() => {
      frame++;
      
     
      const progress = frame / totalFrames;
      const easedProgress = easeOutQuad(progress);
      
      setCounters(stats.map((stat) => {
        return Math.min(Math.round(easedProgress * stat.target), stat.target);
      }));
      
  
      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, frameRate);
  };
  
  const easeOutQuad = (x) => {
    return 1 - (1 - x) * (1 - x);
  };

  return (
    <section
      ref={sectionRef}
      className="w-full h-[480px] flex justify-center items-center bg-[#1B5C12] text-white"
      style={{ gap: "150px" }}
    >
      <div
        className="relative flex flex-col items-center bg-[#1B5C12] text-center text-white rounded-lg"
        style={{
          width: "90%",
          height: "366px",
          margin: '0 auto',
          top: "57px",
          marginBottom: "65px",
          gap: "32px",
        }}
      >
        <h2 className="text-2xl font-bold mt-6" data-aos="fade-down">Our Statistics</h2>
        <p className="text-gray-300 px-4" data-aos="fade-up">
          Free online courses. In-person learning. Certification-aligned pathways in topics like Health, Nutrition, Preventive Medicine.
        </p>
        {/* <button className="bg-white text-green-800 px-4 py-2 rounded-md font-medium hover:bg-gray-200 transition" data-aos="fade-up" data-aos-delay="200">
          Get Started
        </button> */}

        <div className="flex flex-wrap justify-center gap-[35px] mt-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[rgba(190,230,252,0.3)] flex flex-col justify-center items-center text-center shadow-md"

              data-aos="zoom-in"
              data-aos-delay={100 * index}
              style={{
                width: "17%",
                height: "148px",
                gap: "19px",
                borderRadius: "12px",
                paddingTop: "32px",
                paddingRight: "48px",
                paddingBottom: "32px",
                paddingLeft: "48px",
              }}
            >
              <p className="text-3xl font-bold">{counters[index]}{stat.suffix}</p>
              <p className="text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}