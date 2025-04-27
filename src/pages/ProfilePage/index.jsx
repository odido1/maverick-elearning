import React, { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged, updateProfile } from "firebase/auth";
import { getFirestore, doc, getDoc, updateDoc, setDoc } from "firebase/firestore";
import './UserProfile.css';

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    displayName: '',
    email: '',
    phoneNumber: ''
  });
  const [updateMessage, setUpdateMessage] = useState('');

  const getUserDetails = async () => {
    const auth = getAuth();
    const db = getFirestore();

    return new Promise((resolve, reject) => {
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        unsubscribe();

        if (user) {
          const userBasic = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber
          };

          try {
            const userDoc = await getDoc(doc(db, "users", user.uid));

            if (userDoc.exists()) {
              const userData = userDoc.data();
              console.log("User data from Firestore:", userData);
              resolve({
                ...userBasic,
                phoneNumber: userData.phoneNumber || null
              });
            } else {

              resolve(userBasic);
            }
          } catch (error) {
            console.error("Error fetching user data:", error);
            resolve(userBasic);
          }
        } else {
          resolve(null);
        }
      }, reject);
    });
  };

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setLoading(true);
        const userDetails = await getUserDetails();
        setUser(userDetails);
        setFormData({
          displayName: userDetails?.displayName || '',
          email: userDetails?.email || '',
          phoneNumber: userDetails?.phoneNumber || ''
        });
        setLoading(false);
      } catch (err) {
        console.error("Error fetching user details:", err);
        setError("Failed to load user profile");
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) return;

    setLoading(true);
    setUpdateMessage('');

    try {
      const auth = getAuth();
      const db = getFirestore();
      const currentUser = auth.currentUser;

      if (currentUser.displayName !== formData.displayName) {
        await updateProfile(currentUser, {
          displayName: formData.displayName
        });
      }

      const userDocRef = doc(db, "users", user.uid);


      const docSnap = await getDoc(userDocRef);

      if (docSnap.exists()) {

        await updateDoc(userDocRef, {
          phoneNumber: formData.phoneNumber
        });
      } else {

        await setDoc(userDocRef, {
          phoneNumber: formData.phoneNumber,
          email: user.email,
          displayName: formData.displayName
        });
      }


      const updatedUser = await getUserDetails();
      setUser(updatedUser);

      setUpdateMessage('Profile updated successfully!');
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      setUpdateMessage(`Update failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  if (loading && !user) {
    return (
      <div className="profile-container">
        <div className="loading">Loading user profile...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="profile-container">
        <div className="error">{error}</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="profile-container">
        <div className="error">Unable to load profile data. Please refresh the page.</div>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-header">
        <div className="profile-avatar">
          {user.photoURL ? (
            <img src={user.photoURL} alt="Profile" />
          ) : (
            <div className="avatar-placeholder">
              {user.displayName?.charAt(0) || user.email?.charAt(0) || "U"}
            </div>
          )}
        </div>
        <div className="profile-title">
          <h1>{user.displayName || "My Profile"}</h1>
          <p className="profile-email">{user.email}</p>
        </div>
      </div>

      {updateMessage && (
        <div className={`update-message ${updateMessage.includes('failed') ? 'error' : 'success'}`}>
          {updateMessage}
        </div>
      )}

      <div className="profile-details">
        <div className="profile-section">
          <div className="section-header">
            <h2>Personal Information</h2>
            {!isEditing && (
              <button
                className="button edit-button small-button"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
            )}
          </div>

          {isEditing ? (
            <form onSubmit={handleSubmit}>
              <div className="profile-form">
                <div className="form-group">
                  <label htmlFor="displayName">Name</label>
                  <input
                    type="text"
                    id="displayName"
                    name="displayName"
                    value={formData.displayName}
                    onChange={handleInputChange}
                    placeholder="Your name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    readOnly
                    className="readonly"
                    title="Email cannot be changed directly"
                  />
                  <small className="input-note">Email changes require verification</small>
                </div>

                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber || ''}
                    onChange={handleInputChange}
                    placeholder="Your phone number"
                  />
                </div>

                <div className="form-actions">
                  <button
                    type="button"
                    className="button cancel-button"
                    onClick={() => {
                      setIsEditing(false);
                      setFormData({
                        displayName: user.displayName || '',
                        email: user.email || '',
                        phoneNumber: user.phoneNumber || ''
                      });
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="button save-button"
                    disabled={loading}
                  >
                    {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </div>
            </form>
          ) : (
            <div className="profile-info-grid">
              <div className="profile-info-item">
                <span className="info-label">Name</span>
                <span className="info-value">{user.displayName || "Not provided"}</span>
              </div>
              <div className="profile-info-item">
                <span className="info-label">Email</span>
                <span className="info-value">{user.email}</span>
              </div>
              <div className="profile-info-item">
                <span className="info-label">Phone Number</span>
                <span className="info-value">{user.phoneNumber || "Not provided"}</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;