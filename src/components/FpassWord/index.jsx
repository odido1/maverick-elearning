import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import FormInput from '../../components/FormInput';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../Firebase';
import { useNavigate } from 'react-router-dom';
import './FpassWord.css';

const ForgotPasswordForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (success) {
      toast.success(success);
    }
  }, [success]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    if (!formData.email) {
      setError('Please enter your email address');
      setLoading(false);
      return;
    }

    try {
      await sendPasswordResetEmail(auth, formData.email);
      setSuccess('Password reset email sent! Please check your inbox.');
      
      // Reset form
      setFormData({ email: '' });
      
      // Optionally redirect to login page after a delay
      setTimeout(() => {
        navigate('/login');
      }, 5000);
    } catch (error) {
      console.error("Error sending password reset email:", error);
      
      if (error.code === 'auth/user-not-found') {
        // For security reasons, we should not reveal if an email exists or not
        // Instead, show a generic success message
        setSuccess('If an account exists with this email, a password reset link has been sent.');
      } else if (error.code === 'auth/invalid-email') {
        setError('Please enter a valid email address');
      } else {
        setError('Failed to send password reset email. Please try again later.');
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="forgot-password-form">
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
      
      <h1 className="form-heading">Forgot Password</h1>
      
      <p className="form-description">
        Please enter your email address below. We will send you a link to reset your password.
      </p>
      
      <form onSubmit={handleSubmit}>
        <FormInput 
          type="email"
          placeholder="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
        
        <div className="form-footer">
          <button
            type="submit"
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Reset Password'}
          </button>
        </div>
        
        <div className="back-to-login">
          <a href="/login">Back to Login</a>
        </div>
      </form>
    </div>
  );
};

export default ForgotPasswordForm;