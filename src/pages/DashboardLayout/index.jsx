// src/components/layout/DashboardLayout.jsx
import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Box, Toolbar } from '@mui/material';
import AppHeader from '../../components/Layout/AppHeader';
import Sidebar from '../../components/Layout/Sidebar';

const DashboardLayout = () => {
  const [darkMode, setDarkMode] = useState(false);
  
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <AppHeader />
      <Sidebar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content Area */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, backgroundColor: '#f5f5f5', height: '100%' }}>
        <Toolbar /> {/* This creates space below the AppBar */}
        <Outlet /> {/* This renders the nested route components */}
      </Box>
    </Box>
  );
};

export default DashboardLayout;