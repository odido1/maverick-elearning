import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import DashboardLayout from '../pages/DashboardLayout';
import FpasswordPage from '../pages/FpasswordPage';
import LoginPage from '../pages/LoginPage';
import RegistrationPage from '../pages/RegistrationPage';
import CertificatePage from '../pages/CertificatePage';
import DashboardHome from '../pages/DashboardHome';
import Malaria from '../pages/Malaria';
import ProfilePage from '../pages/ProfilePage';
import ModuleContent from '../pages/ModuleContent';
import { courseModules, courses } from '../components/Layout/courseData';

const BaseRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="Fpassword" element={<FpasswordPage />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="signup" element={<RegistrationPage />} />
      
      {/* Nested routes inside the dashboard layout */}
      <Route path="dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        
        {/* Course routes with dynamically nested module routes */}
        <Route path="courses">
          <Route index element={<DashboardHome />} />
          
          {/* Dynamically generate routes for each course */}
          {courses.map((course) => (
            <Route key={course.path} path={course.path}>
              {/* Course index route */}
              <Route 
                index 
                element={course.path === 'malaria' ? <Malaria /> : <DashboardHome />} 
              />
              
              {/* Generate routes for each module of the course */}
              {courseModules[course.path].map((module) => (
                <Route 
                  key={module.id}
                  path={module.id} 
                  element={<ModuleContent />} 
                />
              ))}
            </Route>
          ))}
        </Route>
        
        <Route path="badges" element={<div>Badges Content</div>} />
        <Route path="learning-pathways" element={<div>Learning Pathways Content</div>} />
        {/* <Route path="certificates" element={<div>Certificates Content</div>} /> */}
        <Route path="certificates" element={<CertificatePage/>} />
        <Route path="profile" element={<ProfilePage />} />
      </Route>
    </Routes>
  );
};

export default BaseRouter;