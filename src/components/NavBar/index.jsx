import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Button from '../../components/Button';
import { HiMenu, HiX } from 'react-icons/hi';
import AOS from 'aos';
import "./nav.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 700,
      easing: 'ease-out-cubic',
      once: false
    });
  }, []);

  // Function to handle smooth scrolling
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    // Close mobile menu after clicking
    setIsOpen(false);
  };

  return (
    <div className='px-5 bg-white sticky top-0 z-50'>
      <nav className="nav bg-white border-b border-gray-200 py-4 px-5">
      <div className="flex items-center justify-between">

        <div className="font-medium text-green-800">eLearning</div>
        
        <div className="hidden md:flex items-center gap-6">
          <a 
            href="#home" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('home');
            }}
            className="!text-[#1B5C12] font-medium border-b-2 border-green-800"
          >
            Home
          </a>
          <a 
            href="#education" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('education');
            }}
            className="text-gray-500 hover:text-[#1B5C12]"
          >
            About Us
          </a>
          <a 
            href="#courses" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('courses');
            }}
            className="text-gray-500 hover:text-[#1B5C12]"
          >
            Courses
          </a>
          <a 
            href="#testimonials" 
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('testimonials');
            }}
            className="text-gray-500 hover:text-[#1B5C12]"
          >
            Testimonials
          </a>
        </div>

        <div className="nav_btn hidden md:flex items-center space-x-4">
          <Link to="./login">
            <Button text="Login" />
          </Link>
          
          <Link to="./signup">
            <Button text="Sign up" />
          </Link>
        </div>

        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? 
            <HiX size={28} className="text-green-800" /> : 
            <HiMenu size={28} className="text-green-800" />
          }
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 md:hidden overflow-hidden">
          <div className="flex flex-col items-start space-y-4 pl-2">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="text-green-800 font-medium border-b-2 border-green-800 w-full"
              data-aos="fade-right" 
              data-aos-delay="100"
            >
              Home
            </a>
            <a 
              href="#education" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('education');
              }}
              className="text-gray-500 hover:text-gray-700 w-full"
              data-aos="fade-right" 
              data-aos-delay="150"
            >
              About Us
            </a>
            <a 
              href="#courses" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('courses');
              }}
              className="text-gray-500 hover:text-gray-700 w-full"
              data-aos="fade-right" 
              data-aos-delay="200"
            >
              Courses
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('testimonials');
              }}
              className="text-gray-500 hover:text-gray-700 w-full"
              data-aos="fade-right" 
              data-aos-delay="250"
            >
              Testimonials
            </a>

            <div className="flex flex-col space-y-2 w-full" data-aos="fade-right" data-aos-delay="300">
              <Button text="Login" className="justify-start px-0" />
              <Button text="Sign up" className="justify-start px-0" />
            </div>
          </div>
        </div>
      )}
    </nav>
    </div>
  );
};

export default Navbar;