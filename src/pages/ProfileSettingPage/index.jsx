import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import { auth } from '../Firebase';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const ProfilePage = () => {

// const getUser = () => new Promise((res) => {
//   onAuthStateChanged(auth, (user) => {
//     res(user)
//   }) 
//   const user = await getUser()
// })

const getUserDetails = async () => {
  const auth = getAuth();
 
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      console.log(user)
      if (user) {
        resolve({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          firstName: user.firstName,
          surname: user.surname,
          nationality: user.nationality,
          username: user.username
        });
      } else {
        resolve(null); 
      }
    }, reject);
  });
};
 
(async () => {
  const userDetails = await getUserDetails();
 
  if (userDetails) {
    console.log("User details:", userDetails);
  } else {
    console.log("No user is signed in.");
  }
})();

// const auth= getAuth()
// const user= auth.currentUser

// console.log(user)


//   const user = auth().currentUser;
// if (user) {
//   const userId = user.uid;
//   console.log("User ID:", userId);
// } else {
//   console.log("No user is currently logged in.");
// }

//   getAuth()
//   .getUser(user)
//   .then((userRecord) => {
//     // See the UserRecord reference doc for the contents of userRecord.
//     console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
//   })
//   .catch((error) => {
//     console.log('Error fetching user data:', error);
//   });


  const [expanded, setExpanded] = useState(true);
  const [profileData, setProfileData] = useState({
    patient_id: '',
    first_name: '',
    middle_name: '',
    last_name: '',
    credentials: '',
    specialty: '',
    phone: '',
    email: '',
    sex: '',
    city: '',
    state: ' ',
    address: '',
    about: ''
  });

  const handleChange = (field) => (event) => {
    setProfileData({
      ...profileData,
      [field]: event.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving profile data:', profileData);
  };

  const handleCancel = () => {
    console.log('Canceling changes');
  };

  const handleAccordionChange = () => {
    setExpanded(!expanded);
  };

  const FormField = ({ label, value, field, readOnly = false }) => (
    <Box sx={{ mb: 3 }}>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 0.5 }}>
        {label}
      </Typography>
      <TextField
        fullWidth
        size="small"
        variant="outlined"
        value={value}
        onChange={handleChange(field)}
        InputProps={{ 
          readOnly,
          sx: { 
            bgcolor: '#f8f9fa',
            borderRadius: 1
          }
        }}
      />
    </Box>
  );

  return (
    <Container maxWidth="md">
      {/* Done button at top right */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 1 }}>
        <Button 
          variant="contained" 
          sx={{ 
            bgcolor: '#1b5e20',
            '&:hover': { bgcolor: '#2e7d32' }
          }}
        >
          Done
        </Button>
      </Box>
      
      {/* Accordion/Collapsible section */}
      <Accordion 
        expanded={expanded} 
        onChange={handleAccordionChange} 
        elevation={0}
        sx={{ 
          border: 'none',
          '&:before': { display: 'none' }
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ 
            py:0,
            px: 3,
            borderBottom: expanded ? '1px solid #e0e0e0' : 'none',
          }}
        >
          <Box sx={{ 
            display: 'flex', 
            width: '100%', 
            alignItems: 'center', 
            justifyContent: 'space-between' 
          }}>
            <Typography variant="h6" fontWeight="500" color="#0d47a1">
              Personal Information
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography variant="body2" color="text.secondary">
                Status: <span style={{ color: '#2e7d32', fontWeight: 500 }}>Completed</span>
              </Typography>
            </Box>
          </Box>
        </AccordionSummary>
        
        <AccordionDetails sx={{ px: 3, py: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 4 }}>
            {/* Profile Picture Section */}
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column', 
              alignItems: 'center',
              minWidth: '150px'
            }}>
              <Box 
                sx={{ 
                  border: '1px dashed #1976d2', 
                  borderRadius: '4px',
                  padding: 1,
                  width: 150, 
                  height: 150, 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center',
                  mb: 1,
                  position: 'relative'
                }}
              >
                <Box
                  component="img"
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                  sx={{
                    width: 120,
                    height: 120,
                    borderRadius: '50%',
                    bgcolor: '#e0f7fa'
                  }}
                />
              </Box>
              <Typography 
                variant="body2" 
                color="primary" 
                sx={{ 
                  cursor: 'pointer',
                  fontWeight: 500,
                  color: '#1976d2'
                }}
              >
                Change profile picture
              </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Box sx={{ 
                display: 'grid', 
                gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
                gap: { xs: 2}
              }}>
                <FormField 
                  label="Patient ID" 
                  value={profileData.patient_id} 
                  field="patient_id" 
                  readOnly={true}
                />
                <FormField 
                  label="First Name" 
                  value={profileData.first_name} 
                  field="first_name"
                />
                <FormField 
                  label="Middle Name" 
                  value={profileData.middle_name} 
                  field="middle_name"
                />
                <FormField 
                  label="Last Name" 
                  value={profileData.last_name} 
                  field="last_name"
                />
                <FormField 
                  label="Credential" 
                  value={profileData.credentials} 
                  field="credentials"
                />
                <FormField 
                  label="Specialty" 
                  value={profileData.specialty} 
                  field="specialty"
                />
                <FormField 
                  label="Phone Number" 
                  value={profileData.phone} 
                  field="phone"
                />
                <FormField 
                  label="Email" 
                  value={profileData.email} 
                  field="email"
                />
                <FormField 
                  label="Sex" 
                  value={profileData.sex} 
                  field="sex"
                />
                <FormField 
                  label="Address" 
                  value={profileData.address} 
                  field="address"
                />
                <FormField 
                  label="City" 
                  value={profileData.city} 
                  field="city"
                />
                <FormField 
                  label="State" 
                  value={profileData.state} 
                  field="state"
                />
              </Box>

              <Box sx={{ mt: 0, width: '100%' }}>
                <Typography variant="body1" sx={{ fontWeight: 500, mb: 1 }}>
                  About
                </Typography>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  variant="outlined"
                  value={profileData.about}
                  onChange={handleChange('about')}
                  InputProps={{ 
                    sx: { bgcolor: '#f8f9fa' }
                  }}
                />
              </Box>
            </Box>
          </Box>
          
          {/* Action Buttons */}
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'flex-end', 
            mt: 4, 
            gap: 2 
          }}>
            <Button 
              variant="outlined" 
              onClick={handleCancel}
              sx={{ 
                borderRadius: 28,
                px: 4,
                py: 1,
                color: '#000',
                borderColor: '#e0e0e0',
                '&:hover': {
                  borderColor: '#999',
                  bgcolor: '#f5f5f5'
                }
              }}
            >
              Cancel
            </Button>
            <Button 
              variant="contained" 
              onClick={handleSave}
              sx={{ 
                borderRadius: 28,
                px: 4,
                py: 1,
                bgcolor: '#1b5e20',
                '&:hover': {
                  bgcolor: '#2e7d32'
                }
              }}
            >
              Save
            </Button>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default ProfilePage;