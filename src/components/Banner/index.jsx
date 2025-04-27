import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css";
import { Link } from 'react-router-dom';

const HealthEducationBanner = () => {
  const [showModal, setShowModal] = useState(false);
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);

  const openVideoModal = () => {
    setShowModal(true);
  };

  const closeVideoModal = () => {
    setShowModal(false);
  };

  return (
    <div className="banner w-full bg-blue-50 p-8 flex flex-col items-center justify-center text-center">
      <h1 
        className="text-5xl font-bold mb-2 text-black"
        data-aos="fade-up"
      >
        Get Health <span className="text-[#1B5C12]">Education</span> And Stay <br />  Proficient!
      </h1>
      <p 
        className="text-gray-700 mb-6 text-xl"
        data-aos="fade-down"
        data-aos-delay="200"
      >
        Maverick Online learning platform for all your health needs
      </p>
      <div className="button-container" data-aos="fade-up" data-aos-delay="400">
        <button
          className="button secondary-button border-2 flex items-center gap-2 px-4 py-2 rounded-md"
          style={{ borderColor: '#1B5C12', color: '#1B5C12' }}
          onClick={openVideoModal}
        >
          <svg className="play-icon w-6 h-6 " viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#1B5C12" />
            <polygon points="10 8 16 12 10 16 10 8" fill="white" />
          </svg>
          Watch Video
        </button>

        <Link to="/login">
          <button className="button primary-button">
            Get Started
          </button>
        </Link>
      </div>

      {/* Video Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 max-w-4xl w-11/12 relative">
            <button 
              onClick={closeVideoModal}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
            <h3 className="text-xl font-semibold mb-4 text-[#1B5C12]">Health Education Video</h3>
            <div className="relative pt-[56.25%] w-full">
              {/* <iframe width="100%" height="360" src="https://www.youtube.com/embed/EymMLXah2CA" title="Health Promotion" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}

              <iframe width="100%" height="360" src="https://www.youtube.com/embed/G2quVLcJVBk" title="Health Promotion and the Ottawa Charter - Creating Healthier Populations:" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <div className="mt-4 text-right">
              <button 
                className="px-4 py-2 bg-[#1B5C12] text-white rounded-md hover:bg-[#143f0d]"
                onClick={closeVideoModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthEducationBanner;