import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaTwitter, FaLinkedin, FaFacebook } from 'react-icons/fa';
import Button from "../../components/Button"

const Footer = () => {
    useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        mirror: false
      });
    }, []);
  return (
    <footer className="bg-[#1B5C12] text-white">
 <div className="  text-center mb-8 mt-8  h-[259px] px-8 mx-auto" >
  <div className="flex flex-col items-center gap-8 ">
    <h2 className=" first_div text-2xl font-bold mb-3 mt-8 pt-8" data-aos="fade-down">Get all your health knowledge at the comfort of your home</h2>
    <p className="text-gray-300 font-extralight max-w-2xl mx-auto mb-6" data-aos="fade-up">
      Register with us and enjoy a holistic health checkup and easy access to 
      specialised providers and clinics.
    </p>
    {/* <button className="bg-white text-[#1B5C12] hover:bg-gray-100 font-medium py-2 px-6 rounded-md transition duration-300 mx-auto block" data-aos="fade-up">
      Get Started
    </button> */}
  </div>
</div>
      
      <div className=" divider border-t border-green-700 my-3"></div>
      
      <div className=" second_div flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0">
          <p className="text-gray-300 font-extralight mb-4" data-aos="fade-down">An online digital platform for all your health education</p>
          <div className="flex gap-6" data-aos="fade-up">
            <a href="/" className="font-bold hover:text-gray-300 transition duration-300">Home</a>
            <a href="/features" className="hover:text-gray-300 transition duration-300">Features</a>
            <a href="/contact" className="hover:text-gray-300 transition duration-300">Contact Us</a>
          </div>
        </div>
      </div>
      
      
      
      

      <div className=" third_div flex flex-col items-center text-center sm:flex-row justify-between items-center">
        <div className="text-sm text-gray-300 mb-4 sm:mb-0">
          © {new Date().getFullYear()} Maverick Team. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <FaTwitter className="text-xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <FaLinkedin className="text-xl" />
          </a>
          <a href="#" className="text-gray-300 hover:text-white transition duration-300">
            <FaFacebook className="text-xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};


export default Footer;