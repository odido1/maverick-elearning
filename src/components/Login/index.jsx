import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../components/FormInput';
import { Eye, EyeOff } from 'lucide-react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase';
import './LoginForm.css';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [generalError, setGeneralError] = useState('');
  
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  const validatePassword = (password) => password.length >= 6;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setErrors(prevState => ({
      ...prevState,
      [name]: ''
    }));
    setGeneralError('');
  };
  
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Effect to show toast when generalError changes
  useEffect(() => {
    if (generalError) {
      toast.error(generalError);
    }
  }, [generalError]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    let valid = true;
    const newErrors = { email: '', password: '' };
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
      valid = false;
    } else if (!validatePassword(formData.password)) {
      newErrors.password = 'Password must be at least 6 characters';
      valid = false;
    }
    
    setErrors(newErrors);
    
    if (valid) {
      setLoading(true);
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          formData.email,
          formData.password
        );
        
        console.log("User logged in successfully:", userCredential.user);
        
        // Show success toast
        toast.success("Login successful! Redirecting to dashboard...");
        
        setTimeout(() => {
          navigate('/dashboard');
        }, 1500);
      } catch (error) {
        console.error("Login error:", error);
        
        if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
          setGeneralError('Invalid email or password');
        } else if (error.code === 'auth/too-many-requests') {
          setGeneralError('Too many failed login attempts. Please try again later.');
        } else {
          setGeneralError('Login failed. Please try again.');
        }
      } finally {
        setLoading(false);
      }
    } else {
      toast.error("Please fix the errors in the form");
    }
    
  };

  return (
    <div className="login-form">
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        // theme='light'
      />
      
      <div className="logo-container">
        <div className="logo">eLearning</div>
      </div>
      
      <h1 className="form-heading">Welcome Back</h1>
      
      <p className="form-description">
        Enter your credentials to access your account
      </p>
      
      
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <FormInput 
            type="text"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'input-error' : ''}
            disabled={loading}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
        </div>
        
        <div className="input-container">
          <div className="custom-input-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`custom-input ${errors.password ? 'input-error' : ''}`}
              disabled={loading}
            />
            <button 
              type="button"
              className="password-toggle"
              onClick={handleTogglePassword}
              aria-label={showPassword ? "Hide password" : "Show password"}
              disabled={loading}
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && <p className="error-message">{errors.password}</p>}
        </div>
        
        <div className="form-actions">
          <button type="submit" className="login-button" disabled={loading}>
            {loading ? 'LOGGING IN...' : 'LOGIN'}
          </button>
        </div>
        
        <div className="form-links">
          <Link to="/fpassword" className="forgot-password">
            Forgot your password?
          </Link>
          <div className="signup-link">
            No account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;