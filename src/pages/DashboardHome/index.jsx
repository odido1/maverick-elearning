import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Typography, Paper, Container, Button, Box, Table, TableBody, TableCell, TableHead, TableRow, Card, CardMedia, CardContent, CardActions, Chip, CircularProgress } from '@mui/material';
import { auth, db } from '../../components/Firebase'; 
import { doc, getDoc } from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import SA from "../../assets/images/SA.jpeg";
import tb from "../../assets/images/tb.jpeg";
import malaria from "../../assets/images/malaria.jpeg";
// import { Link } from 'lucide-react';

const DashboardHome = () => {
  const [user, setUser] = useState(null);
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch current user and their data from Firestore
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setLoading(true);
      if (currentUser) {
        setUser(currentUser);
        
        try {
          // Get user data from Firestore
          const userDocRef = doc(db, "users", currentUser.uid);
          const userDocSnap = await getDoc(userDocRef);
          
          if (userDocSnap.exists()) {
            setUserData(userDocSnap.data());
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Determine username to display
  const getUserDisplayName = () => {
    if (userData) {
      // First try to use the full name if available
      if (userData.firstName && userData.surname) {
        return `${userData.firstName} ${userData.surname}`;
      }
      // Then try username
      if (userData.username) {
        return userData.username;
      }
    }
    
    // Fall back to display name from auth or email
    if (user) {
      return user.displayName || user.email.split('@')[0];
    }
    
    return "Guest";
  };

  const username = getUserDisplayName();

  if (loading) {
    return (
      <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>
        <CircularProgress color="success" />
      </Container>
    );
  }

  return (
    <Container maxWidth="xl" sx={{ py: 2 }}>
      <Paper sx={{ p: 3, mb: 3 }}>
        <Typography variant="h6" gutterBottom>
          Welcome <span style={{ color: '#2e7d32', fontWeight: 'bold' }}>{username}</span>!
        </Typography>
        <Typography variant="subtitle1" gutterBottom fontWeight="bold"
        //  sx={{ color: '#2e7d32' }}
         >
          Empower Yourself with Knowledge!
        </Typography>
        <Typography paragraph sx={{ mb: 2 }}>
          Understanding diseases like HIV, Polio, and Malaria can save lives—including yours.
          Dive into our engaging courses, expand your knowledge, and take control of your health.
          every lesson brings you closer to making informed decisions. Click below to continue learning today!
        </Typography>
        {/* <Button 
          variant="contained" 
          sx={{ 
            backgroundColor: '#2e7d32', 
            '&:hover': { backgroundColor: '#1b5e20' } 
          }}
        >
          Start Learning
        </Button> */}
      </Paper>

      {/* Last Viewed and Certificates Section - Side by Side */}
      <Box sx={{ display: 'flex', gap: 3, mb: 3, flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Last Viewed Course */}
        <Paper sx={{ p: 3, flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Last viewed course
          </Typography>
          <Box sx={{ overflowX: 'auto' }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Date</TableCell>
                  <TableCell>Lesson</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>3/22/2025</TableCell>
                  <TableCell>Malaria and Humans</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Box>
          <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
            {/* <Button variant="outlined" size="small">Go to My Learning</Button> */}
            {/* <Button 
              variant="contained" 
              size="small"
              sx={{ 
                backgroundColor: '#2e7d32', 
                '&:hover': { backgroundColor: '#1b5e20' } 
              }}
            >
              Resume Learning
            </Button> */}
          </Box>
        </Paper>

        {/* Certificates */}
        <Paper sx={{ p: 3, flex: 1 }}>
          <Typography variant="h6" gutterBottom>
            Certificates
          </Typography>
          <Typography paragraph sx={{ mt: 2 }}>
            You have no certificates yet. Once you earn them, they will appear here.
          </Typography>

          <Link to="/dashboard/certificates">
          <Button variant="outlined" size="small">View Certificate</Button>
          </Link>
        </Paper>
      </Box>

      <Paper sx={{ p: 3 }}>
        <Typography variant="h6" gutterBottom>
          Enrolled courses
        </Typography>
        
        <Box sx={{ display: 'flex', gap: 3, flexDirection: { xs: 'column', sm: 'row' }, flexWrap: 'wrap' }}>
          <Card sx={{ flex: { sm: '1 1 calc(33.33% - 16px)' }, maxWidth: { sm: 'calc(33.33% - 16px)' } }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="140"
                image={tb}
                alt="No malaria"
                sx={{ objectFit: 'cover' }}
              />
              <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <Chip label="Free" size="small" sx={{ backgroundColor: 'white' }} />
              </Box>
            </Box>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    bgcolor: '#2e7d32', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: 1,
                    mr: 1
                  }}
                >
                  25%
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Malaria and Us
                </Typography>
              </Box>
              <Typography variant="body2" color="text.primary" fontWeight="bold">
                Learn about Malaria, it's causes and management
              </Typography>
            </CardContent>
            <CardActions>


              {/* <Button 
                size="small" 
                variant="contained"
                sx={{ 
                  backgroundColor: '#2e7d32', 
                  '&:hover': { backgroundColor: '#1b5e20' },
                  mx: 'auto'
                }}
              >
                Continue
              </Button> */}

            </CardActions>
          </Card>

          <Card sx={{ flex: { sm: '1 1 calc(33.33% - 16px)' }, maxWidth: { sm: 'calc(33.33% - 16px)' } }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="140"
                image={malaria}
                alt="HIV/AIDS awareness"
                sx={{ objectFit: 'cover' }}
              />
              <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <Chip label="Free" size="small" sx={{ backgroundColor: 'white' }} />
              </Box>
            </Box>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    bgcolor: '#2e7d32', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    borderRadius: 1,
                    mr: 1
                  }}
                >
                  10%
                </Box>
                <Typography variant="body2" color="text.secondary">
                  HIV/AIDS and us
                </Typography>
              </Box>
              <Typography variant="body2" color="text.primary" fontWeight="bold">
                Learn about HIV/AIDS, it's causes and prevention
              </Typography>
            </CardContent>
            <CardActions>


              {/* <Button 
                size="small" 
                variant="contained"
                sx={{ 
                  backgroundColor: '#2e7d32', 
                  '&:hover': { backgroundColor: '#1b5e20' },
                  mx: 'auto'
                }}
              >
                Continue
              </Button> */}


            </CardActions>
          </Card>
          <Card sx={{ flex: { sm: '1 1 calc(33.33% - 16px)' }, maxWidth: { sm: 'calc(33.33% - 16px)' } }}>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="140"
                image={SA}
                alt="Polio information"
                sx={{ objectFit: 'cover' }}
              />
              <Box sx={{ position: 'absolute', top: 8, right: 8 }}>
                <Chip label="Free" size="small" sx={{ backgroundColor: 'white' }} />
              </Box>
            </Box>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Box 
                  sx={{ 
                    width: 32, 
                    height: 32, 
                    bgcolor: '#2e7d32', 
                    color: 'white', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    boxShadow: 'none !important',
                    borderRadius: 1,
                    mr: 1
                  }}
                >
                  0%
                </Box>
                <Typography variant="body2" color="text.secondary">
                  Polio and Us
                </Typography>
              </Box>
              <Typography variant="body2" color="text.primary" fontWeight="bold">
                Learn about Polio, and everything surrounding it
              </Typography>
            </CardContent>
            <CardActions>


              {/* <Button 
                size="small" 
                variant="contained"
                sx={{ 
                  backgroundColor: '#2e7d32', 
                  '&:hover': { backgroundColor: '#1b5e20' },
                  mx: 'auto'
                }}
              >
                Continue
              </Button> */}


            </CardActions>
          </Card>
        </Box>
      </Paper>
    </Container>
  );
};

export default DashboardHome;