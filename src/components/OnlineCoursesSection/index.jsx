import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "./style.css";
import SA from "../../assets/images/SA.jpeg";
import tb from "../../assets/images/tb.jpeg";
import malaria from "../../assets/images/malaria.jpeg";

const OnlineCoursesSection = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: false
    });
  }, []);


  const courses = [
    {
      id: 1,
      title: "Introduction to HIV/AIDS",
      description: "Explore the Fields of Health in HIV/AIDS to understand its complexities and how to combat this virus.",
      level: "Beginner",
      duration: "6 hours",
      type: "Self Paced, Instructor Led",
      image: SA, 
    },
    {
      id: 2,
      title: "Tuberculosis Awareness",
      description: "Understand the causes, symptoms, and treatment of tuberculosis to raise awareness and reduce its impact.",
      level: "Beginner",
      duration: "8 hours",
      type: "Self Paced, Instructor Led",
      image: tb, 
    },
    {
      id: 3,
      title: "Malaria Prevention and Control",
      description: "Learn about malaria transmission, prevention, and treatment to help combat the disease globally.",
      level: "Beginner",
      duration: "6 hours",
      type: "Self Paced, Instructor Led",
      image: malaria, 
    },
  ];

  return (
    <div className="onlinecourse mx-auto p-6 bg-white rounded-lg border-gray-200">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-[#1B5C12] mb-2" data-aos="fade-down"
        data-aos-delay="200">Popular Free Online Courses</h2>
        <p className="paragraph text-gray-600" data-aos="fade-up">
          Our digital platform presents you the following free courses to enable you to get the right education.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="onlinecards border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <div className="relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-48 object-cover"
              />
              <div className="absolute top-4 left-4">
                <span className="span bg-[#1B5C12] text-white px-3 py-1 text-sm font-medium rounded-md">
                  {course.level}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <div className="type text-xs text-gray-500 mb-1">Course | {course.type}</div>
              <h3 className="text-xl font-bold text-[#1B5C12] mb-2">{course.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{course.description}</p>
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-gray-700 font-medium">{course.duration}</span>
                <span className="span bg-white text-[#1B5C12] border-1 border-[#1B5C12] w-24 text-center inline-block px-3 py-1 rounded-md font-medium transition-all duration-300 hover:bg-[#1B5C12] hover:text-white">Free</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center mt-8">
        <Link to="/login">
        <button className="btn bg-[#1B5C12] hover:bg-[#246e44] text-white font-medium py-2 px-6 rounded-md transition-colors" data-aos="fade-up">
          View Other Free Courses
        </button>
        </Link>
      </div>
    </div>
  );
};

export default OnlineCoursesSection;
