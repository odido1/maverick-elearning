import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import "./style.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layer = () => {
   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false
      });
    }, []);
    
  return (
    <>
      <div className="md:hidden">
        <div className="course bg-[#1B5C12] rounded-lg">
          <div className="p-6 rounded-md">
            <div className="text-white">
              <h3 className="healthtext text-2xl font-bold mb-2" data-aos="fade-down" data-aos-delay="200">
                Streamline your path to health.
              </h3>
              <p className="healthtext text-sm mb-4" data-aos="fade-up" data-aos-delay="200">
                We empower learners, educators, and healthcare professionals by providing high-quality
                courses and certifications to advance their skills and careers.
              </p>
            </div>
            
            <div className="mt-6 text-center" data-aos="fade-up" data-aos-delay="200">
              <Link to="/login">
                <button className="bg-white text-green-800 px-4 py-2 rounded-md font-medium text-sm">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          
          <div className="cards">
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="icons bg-green-100 p-2 w-10 h-10 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="cardtext font-bold text-base mb-2">Register / Sign Up</h2>
              <p className="cardtext text-xs text-gray-600">
                Get started on our platform by signing up on our web application. Gain access to a variety of health education courses and resources designed to help you grow.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="icons bg-green-100 p-2 w-10 h-10 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="cardtext font-bold text-base mb-2">Take Free Courses</h2>
              <p className="cardtext text-xs text-gray-600">
                Once registered, you can explore a range of free health education courses. Learn at your own pace and enhance your knowledge in various medical and health-related fields.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="icons bg-green-100 p-2 w-10 h-10 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="cardtext font-bold text-base mb-2">Get Certificate</h2>
              <p className="cardtext text-xs text-gray-600">
                Complete courses and earn recognized certifications to validate your expertise. Our platform offers both online and in-person learning options for a flexible learning experience.
              </p>
            </div>
          </div>
          <div className="mobile-spacer"></div>
        </div>
      </div>
      
      <div className="hidden md:block">
        <div className="course bg-[#1B5C12] rounded-lg">
          <div className="relative p-8 rounded-md">
            <div className="text-white max-w-md">
              <h3 className="healthtext text-2xl font-bold mb-2" data-aos="fade-down" data-aos-delay="200">
                Streamline your path to health.
              </h3>
              <p className="healthtext text-sm mb-4" data-aos="fade-up" data-aos-delay="200">
                We empower learners, educators, and healthcare professionals by providing high-quality
                courses and certifications to advance their skills and careers.
              </p>
            </div>
            
            <div className="absolute top-8 right-8" data-aos="fade-up" data-aos-delay="200">
              <Link to="/login">
                <button className="bg-white text-green-800 px-4 py-2 rounded-md font-medium text-sm">
                  Get Started
                </button>
              </Link>
            </div>
          </div>
          
          <div className="cards">
            <div className="bg-white p-6 rounded-md shadow-md ">
              <div className="icons bg-green-100 p-2 w-10 h-10 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="cardtext font-bold text-base mb-2">Register / Sign Up</h2>
              <p className="cardtext text-xs text-gray-600">
                Get started on our platform by signing up on our web application. Gain access to a variety of health education courses and resources designed to help you grow.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="icons bg-green-100 p-2 w-10 h-10 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="cardtext font-bold text-base mb-2">Take Free Courses</h2>
              <p className="cardtext text-xs text-gray-600">
                Once registered, you can explore a range of free health education courses. Learn at your own pace and enhance your knowledge in various medical and health-related fields.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-md shadow-md">
              <div className="icons bg-green-100 p-2 w-10 h-10 rounded-md flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h2 className="cardtext font-bold text-base mb-2">Get Certificate</h2>
              <p className="cardtext text-xs text-gray-600">
                Complete courses and earn recognized certifications to validate your expertise. Our platform offers both online and in-person learning options for a flexible learning experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layer;