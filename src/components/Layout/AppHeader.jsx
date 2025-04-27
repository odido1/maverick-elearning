// src/components/layout/AppHeader.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import { Bell, User, LogOut } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

const AppHeader = () => {
  const navigate = useNavigate();

  return (
    <AppBar position="fixed" sx={{ 
      zIndex: (theme) => theme.zIndex.drawer + 1,
      backgroundColor: '#166534', 
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Maverick-eLearning
        </Typography>


        {/* <Button 
          color="inherit" 
          sx={{ mx: 1 }}
          component={NavLink}
          to="/dashboard/courses"
        >
          Courses
        </Button>


        <Button 
          color="inherit" 
          sx={{ mx: 1 }}
        >
          Exercises
        </Button>


        <Button 
          color="inherit" 
          sx={{ mx: 1 }}
        >
          My Learning
        </Button>


        <Button 
          color="inherit" 
          sx={{ mx: 1 }}
          component={NavLink}
          to="/dashboard/certificates"
        >
          Certificates
        </Button> */}


        {/* <IconButton color="inherit" sx={{ position: 'relative' }}>
          <Bell size={20} />
          <Box sx={{ 
            position: 'absolute', 
            top: 6, 
            right: 6, 
            backgroundColor: 'red', 
            borderRadius: '50%', 
            width: 16, 
            height: 16, 
            display: 'flex', 
            justifyContent: 'center', 
            alignItems: 'center',
            fontSize: '10px'
          }}>
            2
          </Box>
        </IconButton> */}
        
        <Button 
          color="inherit" 
          startIcon={<User size={20} />}
          sx={{ mx: 1, '&:hover': { color: 'white' } }}
          component={NavLink}
          to="/dashboard/profile"
        >
          Profile
        </Button>
        
        <Button 
          color="inherit" 
          startIcon={<LogOut size={20} />}
          sx={{ ml: 1 }}
          onClick={() => navigate('/login')}
        >
          Logout
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;