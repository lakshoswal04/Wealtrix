import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaGoogle, FaFacebook, FaExclamationCircle } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const LoginContainer = styled.div`
  display: flex;
  min-height: calc(100vh - 80px);
  padding: 2rem 0;
`;

const LoginFormContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const LoginImageContainer = styled.div`
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

const LoginImage = styled.div`
  width: 80%;
  height: 80%;
  background-image: url('/login-image.jpg');
  background-size: cover;
  background-position: center;
  border-radius: var(--border-radius-lg);
`;

const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
`;

const LoginHeader = styled.div`
  text-align: center;
  margin-bottom: 2rem;
`;

const LoginTitle = styled.h1`
  font-size: 2rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const LoginSubtitle = styled.p`
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

const RememberForgot = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
`;

const RememberMe = styled.div`
  display: flex;
  align-items: center;
  
  input {
    margin-right: 0.5rem;
  }
  
  label {
    color: var(--text-secondary);
    font-size: 0.9rem;
  }
`;

const ForgotPassword = styled(Link)`
  color: var(--primary);
  font-size: 0.9rem;
  
  &:hover {
    text-decoration: underline;
  }
`;

const LoginButton = styled.button`
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

const SocialLogin = styled.div`
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

const SignupPrompt = styled.div`
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

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  
  const { login, socialLogin, currentUser, error } = useAuth();
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
      setLoginError(error);
    }
  }, [error]);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    // Clear error when user types
    if (loginError) setLoginError('');
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setLoginError('');
    
    // Validate form
    if (!formData.email || !formData.password) {
      setLoginError('Please fill in all fields');
      setIsSubmitting(false);
      return;
    }
    
    // Attempt login
    const success = login(formData.email, formData.password);
    
    if (success) {
      setLoginSuccess(true);
      // Redirect will happen automatically due to the useEffect
    }
    
    setIsSubmitting(false);
  };
  
  const handleSocialLogin = (provider) => {
    socialLogin(provider);
  };
  
  return (
    <LoginContainer className="container">
      <LoginFormContainer>
        <LoginForm onSubmit={handleSubmit}>
          <LoginHeader>
            <LoginTitle>Welcome Back</LoginTitle>
            <LoginSubtitle>Log in to access your Wealtrix account</LoginSubtitle>
          </LoginHeader>
          
          {loginError && (
            <ErrorMessage>
              <FaExclamationCircle />
              {loginError}
            </ErrorMessage>
          )}
          
          {loginSuccess && (
            <SuccessMessage>
              Login successful! Redirecting...
            </SuccessMessage>
          )}
          
          <FormGroup>
            <FormLabel htmlFor="email">Email Address</FormLabel>
            <InputIcon>
              <FaUser />
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
              placeholder="Enter your password"
              disabled={isSubmitting}
              required
            />
          </FormGroup>
          
          <RememberForgot>
            <RememberMe>
              <input
                type="checkbox"
                id="rememberMe"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                disabled={isSubmitting}
              />
              <label htmlFor="rememberMe">Remember me</label>
            </RememberMe>
            <ForgotPassword to="/forgot-password">Forgot Password?</ForgotPassword>
          </RememberForgot>
          
          <LoginButton 
            type="submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Logging in...' : 'Log In'}
          </LoginButton>
          
          <OrDivider>
            <span>or continue with</span>
          </OrDivider>
          
          <SocialLogin>
            <SocialButton 
              type="button"
              bg="#4267B2" 
              color="white"
              onClick={() => handleSocialLogin('facebook')}
              disabled={isSubmitting}
            >
              <FaFacebook />
              Facebook
            </SocialButton>
            <SocialButton 
              type="button"
              bg="#DB4437" 
              color="white"
              onClick={() => handleSocialLogin('google')}
              disabled={isSubmitting}
            >
              <FaGoogle />
              Google
            </SocialButton>
          </SocialLogin>
          
          <SignupPrompt>
            Don't have an account? <Link to="/signup">Sign up</Link>
          </SignupPrompt>
        </LoginForm>
      </LoginFormContainer>
      
      <LoginImageContainer>
        <LoginImage />
      </LoginImageContainer>
    </LoginContainer>
  );
};

export default LoginPage;
