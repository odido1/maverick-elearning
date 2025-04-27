// src/components/layout/CourseSidebarItem.jsx
import React from 'react';
import { ListItem, ListItemText, Collapse, List } from '@mui/material';
import { CheckCircle } from 'lucide-react';import { NavLink } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { courseModules, userProgress } from './courseData';

const CourseSidebarItem = ({ 
  course, 
  expandedCourse, 
  toggleCourseModules,
  completionPercent 
}) => {
  const activeStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.08)',
    borderRadius: '4px'
  };

  return (
    <React.Fragment>
      <ListItem 
        button 
        onClick={() => toggleCourseModules(course.path)}
        sx={{ pl: 4 }}
      >
        <ListItemText 
          primary={course.name} 
          secondary={`${completionPercent}% Complete`}
        />
        {expandedCourse === course.path ? 
          <ChevronDown size={16} /> : 
          <ChevronRight size={16} />
        }
      </ListItem>
      
      {/* Module list for each course */}
      <Collapse in={expandedCourse === course.path} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {courseModules[course.path].map((module) => (
            <ListItem 
              key={module.id}
              button 
              component={NavLink}
              to={`/dashboard/courses/${course.path}/${module.id}`}
              sx={({ isActive }) => ({
                pl: 6,
                ...(isActive ? activeStyle : {}),
                display: 'flex',
                justifyContent: 'space-between'
              })}
            >
              <ListItemText 
                primary={module.name} 
                primaryTypographyProps={{ 
                  variant: 'body2',
                  style: { 
                    fontSize: '0.875rem',
                    fontWeight: userProgress[course.path][module.id] ? 600 : 400
                  }
                }}
              />
              {userProgress[course.path][module.id] && (
                <CheckCircle size={16} color="green" />
              )}
            </ListItem>
          ))}
        </List>
      </Collapse>
    </React.Fragment>
  );
};

export default CourseSidebarItem;