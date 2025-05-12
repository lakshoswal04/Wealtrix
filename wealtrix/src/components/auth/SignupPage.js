import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaPhone, FaGoogle, FaFacebook, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const SignupContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
`;

const SignupFormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const SignupImageContainer = styled.div`
  flex: 1;
  background-color: var(--background-light);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SignupImage = styled.div`
  width: 80%;
  height: 80%;
  background-image: url('/signup-image.jpg');
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-lg);
`;

const SignupForm = styled.form`
  width: 100%;
  max-width: 500px;
  padding: 2rem;
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
`;

const SignupHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const SignupTitle = styled.h1`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const SignupSubtitle = styled.p`
  color: var(--text-secondary);
`;

const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.1);
  padding: 0.8rem;
  border-radius: var(--border-radius-md);
  margin-bottom: 1.5rem;
  
  svg {
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  color: #2ecc71;
  background-color: rgba(46, 204, 113, 0.1);
  padding: 0.8rem;
  border-radius: var(--border-radius-md);
  margin-bottom: 1.5rem;
  
  svg {
    margin-right: 0.5rem;
    flex-shrink: 0;
  }
`;

const FormRow = styled.div`
  display: grid;
  grid-template-columns: ${({ columns }) => columns || '1fr'};
  gap: 1rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  position: relative;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem 0.8rem 2.5rem;
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const InputIcon = styled.div`
  position: absolute;
  left: 0.8rem;
  top: 2.4rem;
  color: var(--text-secondary);
`;

const TermsAgreement = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1.5rem;
  
  input {
    margin-right: 0.5rem;
    margin-top: 0.3rem;
  }
  
  label {
    color: var(--text-secondary);
    font-size: 0.9rem;
    
    a {
      color: var(--primary);
      
      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

const SignupButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-2px);
  }
`;

const OrDivider = styled.div`
  display: flex;
  align-items: center;
  margin: 1.5rem 0;
  
  &:before, &:after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: var(--border-color);
  }
  
  span {
    padding: 0 1rem;
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const SocialSignup = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const SocialButton = styled.button`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.8rem;
  background-color: ${({ bg }) => bg || 'white'};
  color: ${({ color }) => color || 'var(--text-primary)'};
  border: 1px solid var(--border-color);
  border-radius: var(--border-radius-md);
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-sm);
  }
`;

const LoginPrompt = styled.div`
  text-align: center;
  margin-top: 1.5rem;
  color: var(--text-secondary);
  
  a {
    color: var(--primary);
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;

const SignupPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    agreeTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [signupError, setSignupError] = useState('');
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    hasNumber: false,
    hasSpecial: false
  });
  
  const { signup, socialLogin, currentUser, error } = useAuth();
  const navigate = useNavigate();
  
  // Redirect if already logged in
  useEffect(() => {
    if (currentUser) {
      navigate('/');
    }
  }, [currentUser, navigate]);
  
  // Set error from auth context
  useEffect(() => {
    if (error) {
      setSignupError(error);
      setIsSubmitting(false);
    }
  }, [error]);
  
  // Check password strength
  useEffect(() => {
    if (formData.password) {
      setPasswordStrength({
        length: formData.password.length >= 8,
        hasNumber: /\d/.test(formData.password),
        hasSpecial: /[!@#$%^&*(),.?":{}|<>]/.test(formData.password)
      });
    }
  }, [formData.password]);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (signupError) setSignupError('');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSignupError('');
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.phone || !formData.password || !formData.confirmPassword) {
      setSignupError('Please fill in all required fields');
      setIsSubmitting(false);
      return;
    }
    
    if (!formData.agreeTerms) {
      setSignupError('You must agree to the Terms of Service and Privacy Policy');
      setIsSubmitting(false);
      return;
    }
    
    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setSignupError('Please enter a valid email address');
      setIsSubmitting(false);
      return;
    }
    
    // Validate password
    if (formData.password.length < 8) {
      setSignupError('Password must be at least 8 characters long');
      setIsSubmitting(false);
      return;
    }
    
    if (formData.password !== formData.confirmPassword) {
      setSignupError('Passwords do not match');
      setIsSubmitting(false);
      return;
    }
    
    // Attempt signup
    const success = signup(formData);
    
    if (success) {
      setSignupSuccess(true);
      // Redirect will happen automatically due to the useEffect
      setTimeout(() => {
        navigate('/');
      }, 2000);
    }
    
    setIsSubmitting(false);
  };
  
  const handleSocialSignup = (provider) => {
    socialLogin(provider);
  };
  
  return (
    <SignupContainer className="container">
      <SignupFormContainer>
        <SignupForm onSubmit={handleSubmit}>
          <SignupHeader>
            <SignupTitle>Create an Account</SignupTitle>
            <SignupSubtitle>Join Wealtrix and start your trading journey</SignupSubtitle>
          </SignupHeader>
          
          {signupError && (
            <ErrorMessage>
              <FaExclamationCircle />
              {signupError}
            </ErrorMessage>
          )}
          
          {signupSuccess && (
            <SuccessMessage>
              <FaCheckCircle />
              Account created successfully! Redirecting...
            </SuccessMessage>
          )}
          
          <FormRow columns="1fr 1fr">
            <FormGroup>
              <FormLabel htmlFor="firstName">First Name</FormLabel>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <FormInput
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
                disabled={isSubmitting}
                required
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="lastName">Last Name</FormLabel>
              <InputIcon>
                <FaUser />
              </InputIcon>
              <FormInput
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
                disabled={isSubmitting}
                required
              />
            </FormGroup>
          </FormRow>
          
          <FormGroup>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <InputIcon>
              <FaEnvelope />
            </InputIcon>
            <FormInput
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              disabled={isSubmitting}
              required
            />
          </FormGroup>
          
          <FormGroup>
            <FormLabel htmlFor="phone">Phone Number</FormLabel>
            <InputIcon>
              <FaPhone />
            </InputIcon>
            <FormInput
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              disabled={isSubmitting}
              required
            />
          </FormGroup>
          
          <FormRow columns="1fr 1fr">
            <FormGroup>
              <FormLabel htmlFor="password">Password</FormLabel>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <FormInput
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create password"
                disabled={isSubmitting}
                required
              />
              {formData.password && (
                <div style={{ marginTop: '0.5rem', fontSize: '0.8rem' }}>
                  <div style={{ color: passwordStrength.length ? '#2ecc71' : '#e74c3c' }}>
                    {passwordStrength.length ? '✓' : '✗'} At least 8 characters
                  </div>
                  <div style={{ color: passwordStrength.hasNumber ? '#2ecc71' : '#e74c3c' }}>
                    {passwordStrength.hasNumber ? '✓' : '✗'} Contains a number
                  </div>
                  <div style={{ color: passwordStrength.hasSpecial ? '#2ecc71' : '#e74c3c' }}>
                    {passwordStrength.hasSpecial ? '✓' : '✗'} Contains a special character
                  </div>
                </div>
              )}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="confirmPassword">Confirm Password</FormLabel>
              <InputIcon>
                <FaLock />
              </InputIcon>
              <FormInput
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm password"
                disabled={isSubmitting}
                required
              />
              {formData.password && formData.confirmPassword && (
                <div style={{ 
                  marginTop: '0.5rem', 
                  fontSize: '0.8rem',
                  color: formData.password === formData.confirmPassword ? '#2ecc71' : '#e74c3c'
                }}>
                  {formData.password === formData.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
                </div>
              )}
            </FormGroup>
          </FormRow>
          
          <TermsAgreement>
            <input
              type="checkbox"
              id="agreeTerms"
              name="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              disabled={isSubmitting}
              required
            />
            <label htmlFor="agreeTerms">
              I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
            </label>
          </TermsAgreement>
          
          <SignupButton 
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating Account...' : 'Create Account'}
          </SignupButton>
          
          <OrDivider>
            <span>or sign up with</span>
          </OrDivider>
          
          <SocialSignup>
            <SocialButton 
              type="button"
              bg="#4267B2" 
              color="white"
              onClick={() => handleSocialSignup('facebook')}
              disabled={isSubmitting}
            >
              <FaFacebook />
              Facebook
            </SocialButton>
            <SocialButton 
              type="button"
              bg="#DB4437" 
              color="white"
              onClick={() => handleSocialSignup('google')}
              disabled={isSubmitting}
            >
              <FaGoogle />
              Google
            </SocialButton>
          </SocialSignup>
          
          <LoginPrompt>
            Already have an account? <Link to="/login">Log in</Link>
          </LoginPrompt>
        </SignupForm>
      </SignupFormContainer>
      
      <SignupImageContainer>
        <SignupImage />
      </SignupImageContainer>
    </SignupContainer>
  );
};

export default SignupPage;
