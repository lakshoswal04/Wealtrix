import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaEnvelope, FaPhone, FaSignOutAlt, FaEdit, FaCheck } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const ProfileContainer = styled.div`
  min-height: calc(100vh - 80px);
  padding: 3rem 0;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  overflow: hidden;
`;

const ProfileHeader = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  color: white;
  padding: 2rem;
  text-align: center;
`;

const ProfileAvatar = styled.div`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 3rem;
  color: var(--primary);
`;

const ProfileTitle = styled.h1`
  font-size: 2rem;
  margin-bottom: 0.5rem;
`;

const ProfileSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const ProfileContent = styled.div`
  padding: 2rem;
`;

const ProfileSection = styled.div`
  margin-bottom: 2rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  color: var(--text-primary);
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid var(--border-color);
`;

const ProfileInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const InfoItem = styled.div`
  margin-bottom: 1rem;
`;

const InfoLabel = styled.div`
  font-size: 0.9rem;
  color: var(--text-secondary);
  margin-bottom: 0.3rem;
`;

const InfoValue = styled.div`
  font-size: 1.1rem;
  color: var(--text-primary);
  font-weight: 500;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
    color: var(--primary);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 0.5rem;
  }
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const PrimaryButton = styled(Button)`
  background-color: var(--primary);
  color: white;
  border: none;
  
  &:hover {
    background-color: var(--secondary);
  }
`;

const SecondaryButton = styled(Button)`
  background-color: transparent;
  color: var(--text-primary);
  border: 1px solid var(--border-color);
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.1);
  }
`;

const DangerButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
  border: none;
  
  &:hover {
    background-color: #c0392b;
  }
`;

const EditForm = styled.form`
  margin-top: 1.5rem;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const FormLabel = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
  font-weight: 500;
`;

const FormInput = styled.input`
  width: 100%;
  padding: 0.8rem 1rem;
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

const ProfilePage = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: currentUser?.firstName || '',
    lastName: currentUser?.lastName || '',
    email: currentUser?.email || '',
    phone: currentUser?.phone || ''
  });
  
  const handleLogout = () => {
    logout();
    navigate('/');
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would update the user profile here
    // For now, we'll just toggle the editing state
    setIsEditing(false);
  };
  
  const getInitials = () => {
    if (!currentUser) return '';
    return `${currentUser.firstName.charAt(0)}${currentUser.lastName.charAt(0)}`;
  };
  
  return (
    <ProfileContainer className="container">
      <ProfileWrapper>
        <ProfileHeader>
          <ProfileAvatar>
            {getInitials()}
          </ProfileAvatar>
          <ProfileTitle>{currentUser?.firstName} {currentUser?.lastName}</ProfileTitle>
          <ProfileSubtitle>Wealtrix Trader</ProfileSubtitle>
        </ProfileHeader>
        
        <ProfileContent>
          <ProfileSection>
            <SectionTitle>Personal Information</SectionTitle>
            
            {isEditing ? (
              <EditForm onSubmit={handleSubmit}>
                <FormGroup>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <FormInput
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <FormInput
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="email">Email Address</FormLabel>
                  <FormInput
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <FormGroup>
                  <FormLabel htmlFor="phone">Phone Number</FormLabel>
                  <FormInput
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </FormGroup>
                
                <ButtonGroup>
                  <PrimaryButton type="submit">
                    <FaCheck />
                    Save Changes
                  </PrimaryButton>
                  <SecondaryButton type="button" onClick={() => setIsEditing(false)}>
                    Cancel
                  </SecondaryButton>
                </ButtonGroup>
              </EditForm>
            ) : (
              <>
                <ProfileInfo>
                  <InfoItem>
                    <InfoLabel>First Name</InfoLabel>
                    <InfoValue>
                      <FaUser />
                      {currentUser?.firstName}
                    </InfoValue>
                  </InfoItem>
                  
                  <InfoItem>
                    <InfoLabel>Last Name</InfoLabel>
                    <InfoValue>
                      <FaUser />
                      {currentUser?.lastName}
                    </InfoValue>
                  </InfoItem>
                  
                  <InfoItem>
                    <InfoLabel>Email Address</InfoLabel>
                    <InfoValue>
                      <FaEnvelope />
                      {currentUser?.email}
                    </InfoValue>
                  </InfoItem>
                  
                  <InfoItem>
                    <InfoLabel>Phone Number</InfoLabel>
                    <InfoValue>
                      <FaPhone />
                      {currentUser?.phone}
                    </InfoValue>
                  </InfoItem>
                </ProfileInfo>
                
                <ButtonGroup>
                  <PrimaryButton onClick={() => setIsEditing(true)}>
                    <FaEdit />
                    Edit Profile
                  </PrimaryButton>
                  <DangerButton onClick={handleLogout}>
                    <FaSignOutAlt />
                    Logout
                  </DangerButton>
                </ButtonGroup>
              </>
            )}
          </ProfileSection>
        </ProfileContent>
      </ProfileWrapper>
    </ProfileContainer>
  );
};

export default ProfilePage;
