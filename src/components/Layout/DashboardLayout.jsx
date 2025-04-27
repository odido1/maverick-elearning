// src/components/layout/Sidebar.jsx
import React, { useState } from 'react';
import { 
  Drawer, 
  Box, 
  List, 
  ListItem, 
  ListItemIcon, 
  ListItemText, 
  Divider, 
  IconButton, 
  Collapse, 
  Toolbar
} from '@mui/material';
import { 
  Sun, 
  Award, 
  BookOpen, 
  LogOut, 
  User, 
  Moon,
  ChevronDown,
  ChevronRight
} from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';
import CourseSidebarItem from './CourseSidebarItem';
import { courses, getCourseCompletionPercent } from '../../data/courseData';

const Sidebar = ({ darkMode, toggleDarkMode }) => {
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [expandedCourse, setExpandedCourse] = useState(null);
  const navigate = useNavigate();
  
  const toggleCourses = () => {
    setCoursesOpen(!coursesOpen);
  };

  const toggleCourseModules = (coursePath) => {
    setExpandedCourse(expandedCourse === coursePath ? null : coursePath);
  };

  const drawerWidth = 250;

  const activeStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: '4px'
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { 
          width: drawerWidth, 
          boxSizing: 'border-box',
          backgroundColor: '#f0f0f0',
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto', p: 2 }}>
        <List>
          <ListItem 
            button 
            onClick={toggleCourses}
          >
            <ListItemIcon>
              <Sun size={24} />
            </ListItemIcon>
            <ListItemText primary="Courses" />
            {coursesOpen ? <ChevronDown size={20} /> : <ChevronRight size={20} />}
          </ListItem>
          

          <Collapse in={coursesOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {courses.map((course) => (
                <CourseSidebarItem
                  key={course.path}
                  course={course}
                  expandedCourse={expandedCourse}
                  toggleCourseModules={toggleCourseModules}
                  completionPercent={getCourseCompletionPercent(course.path)}
                />
              ))}
            </List>
          </Collapse>
          
          <ListItem
            button
            component={NavLink}
            to="/dashboard/badges"
            sx={({ isActive }) => isActive ? activeStyle : undefined}
          >
            <ListItemIcon>
              <Award size={24} />
            </ListItemIcon>
            <ListItemText primary="Badges" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/dashboard/learning-pathways"
            sx={({ isActive }) => isActive ? activeStyle : undefined}
          >
            <ListItemIcon>
              <BookOpen size={24} />
            </ListItemIcon>
            <ListItemText primary="Learning Pathways" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/dashboard/certificates"
            sx={({ isActive }) => isActive ? activeStyle : undefined}
          >
            <ListItemIcon>
              <Sun size={24} />
            </ListItemIcon>
            <ListItemText primary="Certificates" />
          </ListItem>
          <ListItem
            button
            component={NavLink}
            to="/dashboard/profile"
            sx={({ isActive }) => isActive ? activeStyle : undefined}
          >
            <ListItemIcon>
              <User size={24} />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem
            button
            onClick={() => navigate('/login')}
          >
            <ListItemIcon>
              <LogOut size={24} />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItem>
        </List>
        <Divider sx={{ my: 4 }} />
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
          <IconButton onClick={toggleDarkMode}>
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </IconButton>
        </Box>
      </Box>
    </Drawer>
  );
};

export default Sidebar;