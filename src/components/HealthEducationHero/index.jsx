import React from "react";
import pro from "../../assets/images/health6.png";
import group1 from "../../assets/images/Group.png";
import group2 from "../../assets/images/group2.png";
import rectangle from "../../assets/images/rectangle.svg";
import AOS from 'aos';
import 'aos/dist/aos.css';


// import "./style.css"
import "./index.css"

const HealthEducationHero = () => {
  return (
    <div className="w-full mx-auto bg-gradient-to-br from-white to-green-50 p-6 relative overflow-hidden py-15 sm:py-5">
      {/* <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute bottom-0 left-0 w-32 h-full border-l-4 border-b-4 border-blue-500 opacity-70"></div>
      </div> */}
      <div className="absolute left-8 bottom-8">
        <img src={group1} alt="" />
      </div>
      <div className="absolute right-12 top-12 ">
        <img src={group2} alt="" />
      </div>
      <div className="absolute left-0 bottom-0 w-100">
        <img src={rectangle} alt="" />
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-top gap-8 px-20">
        <div className="md:w-1/2 lg:w-2/5">
          <img
            src={pro}
            alt="Healthcare professional in blue scrubs with stethoscope"
            className="rounded-lg shadow-md w-full max-w-md mx-auto"
          />
        </div>

        <div className="md:w-1/2 lg:w-3/5 max-w-2xl">
          <h2 className="text-3xl font-bold text-black" data-aos="fade-down"
        data-aos-delay="200">
            Everything <span className="text-green-600">HEALTH</span> Education
          </h2>

          <div className="text-gray-700 pt-30" data-aos="fade-up"
        data-aos-delay="200">
            This Platform is aimed at doing the following:
          </div>
            <br />
         <div className="">
         <ul className="list-disc list-inside space-y-2 text-gray-700 leading-7 pt-8">
            <li data-aos="fade-up"
        data-aos-delay="200">
              To assess the effectiveness of a learning management platform in
              educating Nigerians on basic health issues, including HIV,
              Tuberculosis (TB), substance abuse, Polio, and Malaria.
            </li>
            <br />
            <li data-aos="fade-up"
        data-aos-delay="200"> 
              To evaluate the engagement and usability of the platform for the
              target audience.
            </li>
          <br />
            <li data-aos="fade-up"
        data-aos-delay="200">
              To provide actionable insights for improving the platform's
              content, design, and delivery to maximize learning outcomes. To
              provide updated & right information on the above mentioned health
              challenges.
            </li>
          </ul>
         </div>
        </div>
      </div>
    </div>
  );
};

export default HealthEducationHero;
