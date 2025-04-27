import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../components/FormInput';
import './style.css';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '../Firebase';
import { setDoc, doc } from 'firebase/firestore';

const AccountRegistrationForm = () => {
  const [showMoreDetails, setShowMoreDetails] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    surname: '',
    email: '',
    nationality: ''
  });

  // Effect to show toast when success message changes
  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, [success]);

  // Effect to show toast when error message changes
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    // Clear error when user starts typing again
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);
    
    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      setLoading(false);
      return;
    }
    
    if (!formData.email) {
      setError('Email is required for registration');
      setLoading(false);
      return;
    }
    
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth, 
        formData.email, 
        formData.password
      );
      
      const user = userCredential.user;
      
      // Update user profile with display name
      if (formData.firstName || formData.surname) {
        const displayName = `${formData.firstName} ${formData.surname}`.trim();
        await updateProfile(user, {
          displayName: displayName || formData.username
        });
      }
      
      // Add user data to Firestore
      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        email: formData.email,
        username: formData.username,
        firstName: formData.firstName || "",
        surname: formData.surname || "",
        nationality: formData.nationality || "",
        createdAt: new Date().toISOString(),
      });
      
      console.log("User registered successfully and added to Firestore:", user);
      setSuccess('Registration successful! You can now log in.');
      
      // Reset form after successful registration
      setFormData({
        username: '',
        password: '',
        confirmPassword: '',
        firstName: '',
        surname: '',
        email: '',
        nationality: ''
      });
      
    } catch (error) {
      console.error("Registration error:", error);
      
  
      if (error.code === 'auth/email-already-in-use') {
        setError('This email is already registered');
      } else if (error.code === 'auth/weak-password') {
        setError('Password is too weak. Use at least 6 characters');
      } else if (error.code === 'auth/invalid-email') {
        setError('Invalid email address');
      } else {
        setError('Registration failed. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-form">
      <ToastContainer 
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      
      <h1 className="form-heading">New account</h1>
      
      <p className="form-description">
        Welcome, guest learner! Thanks for your interest in registering as a guest learner on our 
        eLearning portal. Please note, for subsequent access, please access the learning portal
        via the login page.
      </p>
      
      {/* {error && <div className="error-message">{error}</div>} */}
      {/* {success && <div className="success-message">{success}</div>} */}
      
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="text"
          placeholder="Username"
          name="username"
          value={formData.username}
          onChange={handleChange}
          required
        />
        
        <FormInput 
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        
        <FormInput 
          type="password"
          placeholder="Password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        
        <FormInput 
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={handleChange}
          required
        />
        
        <div>
          <button 
            type="button" 
            className="more-details-button"
            onClick={() => setShowMoreDetails(!showMoreDetails)}
          >
            {showMoreDetails ? 'Hide Details' : 'More Details'}
          </button>
        </div>
        
        {showMoreDetails && (
          <div>
            <FormInput 
              type="text"
              placeholder="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
            
            <FormInput 
              type="text"
              placeholder="Surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
            />
            
            <FormInput 
              type="text"
              placeholder="Nationality"
              name="nationality"
              value={formData.nationality}
              onChange={handleChange}
            />
          </div>
        )}
        
        <div className="form-actions">
          <button 
            type="submit" 
            className="login-button" 
            disabled={loading}
          >
            {loading ? 'CREATING ACCOUNT...' : 'CREATE MY ACCOUNT'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountRegistrationForm;