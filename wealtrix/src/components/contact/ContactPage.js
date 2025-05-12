import React, { useState } from 'react';
import styled from 'styled-components';
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaWhatsapp, FaTelegram, FaInstagram, FaTwitter } from 'react-icons/fa';

const ContactContainer = styled.div`
  padding: 5rem 0;
`;

const ContactHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: var(--border-radius-lg);
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/contact-bg.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
`;

const ContactTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContactSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const ContactContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`;

const ContactFormContainer = styled.div`
  background-color: white;
  border-radius: var(--border-radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
`;

const ContactFormTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FormLabel = styled.label`
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const FormInput = styled.input`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const FormTextarea = styled.textarea`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const FormSelect = styled.select`
  padding: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  background-color: white;
  
  &:focus {
    outline: none;
    border-color: var(--primary);
    box-shadow: 0 0 0 2px rgba(var(--primary-rgb), 0.2);
  }
`;

const FormButton = styled.button`
  background-color: var(--primary);
  color: white;
  padding: 1rem;
  border: none;
  border-radius: var(--border-radius-md);
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const ContactInfoCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius-lg);
  padding: 2.5rem;
  box-shadow: var(--shadow-md);
`;

const ContactInfoTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: var(--text-primary);
`;

const ContactInfoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const ContactInfoItem = styled.div`
  display: flex;
  align-items: flex-start;
`;

const ContactInfoIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(var(--primary-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  
  svg {
    color: var(--primary);
    font-size: 1.2rem;
  }
`;

const ContactInfoContent = styled.div``;

const ContactInfoLabel = styled.h3`
  font-size: 1.1rem;
  margin-bottom: 0.5rem;
  color: var(--text-primary);
`;

const ContactInfoText = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const ContactSocialContainer = styled.div`
  margin-top: 2rem;
`;

const ContactSocialTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const ContactSocialList = styled.div`
  display: flex;
  gap: 1rem;
`;

const ContactSocialLink = styled.a`
  width: 40px;
  height: 40px;
  background-color: ${({ bgColor }) => bgColor || 'var(--primary)'};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

const MapContainer = styled.div`
  margin-top: 3rem;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  height: 400px;
  
  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

const SuccessMessage = styled.div`
  background-color: #d4edda;
  color: #155724;
  padding: 1rem;
  border-radius: var(--border-radius-md);
  margin-bottom: 1.5rem;
  text-align: center;
`;

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const errors = {};
    
    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject) {
      errors.subject = 'Please select a subject';
    }
    
    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }
    
    return errors;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const errors = validateForm();
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };
  
  return (
    <ContactContainer className="container">
      <ContactHeader>
        <HeaderContent>
          <ContactTitle>Get in Touch</ContactTitle>
          <ContactSubtitle>
            Have questions about our trading challenges or need assistance? We're here to help you succeed.
          </ContactSubtitle>
        </HeaderContent>
      </ContactHeader>
      
      <ContactContent>
        <ContactFormContainer>
          <ContactFormTitle>Send us a Message</ContactFormTitle>
          
          {isSubmitted && (
            <SuccessMessage>
              Thank you for your message! We'll get back to you as soon as possible.
            </SuccessMessage>
          )}
          
          <ContactForm onSubmit={handleSubmit}>
            <FormGroup>
              <FormLabel htmlFor="name">Full Name*</FormLabel>
              <FormInput 
                type="text" 
                id="name" 
                name="name" 
                value={formData.name}
                onChange={handleChange}
                style={{ borderColor: formErrors.name ? 'red' : '' }}
              />
              {formErrors.name && (
                <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                  {formErrors.name}
                </span>
              )}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="email">Email Address*</FormLabel>
              <FormInput 
                type="email" 
                id="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange}
                style={{ borderColor: formErrors.email ? 'red' : '' }}
              />
              {formErrors.email && (
                <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                  {formErrors.email}
                </span>
              )}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="phone">Phone Number (Optional)</FormLabel>
              <FormInput 
                type="tel" 
                id="phone" 
                name="phone" 
                value={formData.phone}
                onChange={handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="subject">Subject*</FormLabel>
              <FormSelect 
                id="subject" 
                name="subject" 
                value={formData.subject}
                onChange={handleChange}
                style={{ borderColor: formErrors.subject ? 'red' : '' }}
              >
                <option value="">Select a subject</option>
                <option value="general">General Inquiry</option>
                <option value="challenge">Trading Challenge</option>
                <option value="account">Account Issues</option>
                <option value="payout">Payout Questions</option>
                <option value="technical">Technical Support</option>
                <option value="other">Other</option>
              </FormSelect>
              {formErrors.subject && (
                <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                  {formErrors.subject}
                </span>
              )}
            </FormGroup>
            
            <FormGroup>
              <FormLabel htmlFor="message">Message*</FormLabel>
              <FormTextarea 
                id="message" 
                name="message" 
                value={formData.message}
                onChange={handleChange}
                style={{ borderColor: formErrors.message ? 'red' : '' }}
              />
              {formErrors.message && (
                <span style={{ color: 'red', fontSize: '0.9rem', marginTop: '0.3rem' }}>
                  {formErrors.message}
                </span>
              )}
            </FormGroup>
            
            <FormButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </FormButton>
          </ContactForm>
        </ContactFormContainer>
        
        <ContactInfoContainer>
          <ContactInfoCard>
            <ContactInfoTitle>Contact Information</ContactInfoTitle>
            <ContactInfoList>
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaMapMarkerAlt />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <ContactInfoLabel>Our Location</ContactInfoLabel>
                  <ContactInfoText>
                    Level 12, Cyber Towers, HITEC City<br />
                    Hyderabad, Telangana 500081<br />
                    India
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaPhone />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <ContactInfoLabel>Phone Number</ContactInfoLabel>
                  <ContactInfoText>
                    +91 40 6678 9000<br />
                    +91 98765 43210 (Support)
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaEnvelope />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <ContactInfoLabel>Email Address</ContactInfoLabel>
                  <ContactInfoText>
                    support@wealtrix.com<br />
                    info@wealtrix.com
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
              
              <ContactInfoItem>
                <ContactInfoIcon>
                  <FaClock />
                </ContactInfoIcon>
                <ContactInfoContent>
                  <ContactInfoLabel>Working Hours</ContactInfoLabel>
                  <ContactInfoText>
                    Monday - Friday: 9:00 AM - 6:00 PM IST<br />
                    Saturday: 10:00 AM - 2:00 PM IST<br />
                    Sunday: Closed
                  </ContactInfoText>
                </ContactInfoContent>
              </ContactInfoItem>
            </ContactInfoList>
            
            <ContactSocialContainer>
              <ContactSocialTitle>Connect With Us</ContactSocialTitle>
              <ContactSocialList>
                <ContactSocialLink href="#" bgColor="#25D366">
                  <FaWhatsapp />
                </ContactSocialLink>
                <ContactSocialLink href="#" bgColor="#0088cc">
                  <FaTelegram />
                </ContactSocialLink>
                <ContactSocialLink href="#" bgColor="#E1306C">
                  <FaInstagram />
                </ContactSocialLink>
                <ContactSocialLink href="#" bgColor="#1DA1F2">
                  <FaTwitter />
                </ContactSocialLink>
              </ContactSocialList>
            </ContactSocialContainer>
          </ContactInfoCard>
          
          <ContactInfoCard>
            <ContactInfoTitle>Frequently Asked Questions</ContactInfoTitle>
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                How can I start a trading challenge?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                You can start by registering on our platform and selecting a challenge that suits your trading style and goals.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                What payment methods do you accept?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                We accept all major credit/debit cards, UPI, net banking, and popular digital wallets.
              </p>
            </div>
            
            <div style={{ marginBottom: '1.5rem' }}>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                How long does it take to process payouts?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Payouts are processed within 24-48 hours after request approval, and funds typically reach your account within 3-5 business days.
              </p>
            </div>
            
            <div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: 'var(--text-primary)' }}>
                Do you offer any educational resources?
              </h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Yes, we provide comprehensive educational resources including webinars, articles, and trading guides to help you succeed.
              </p>
            </div>
          </ContactInfoCard>
        </ContactInfoContainer>
      </ContactContent>
      
      <MapContainer>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.2954088332703!2d78.37620561487756!3d17.445146488040376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93dc8c5d69df%3A0x71133e6e80c11ee6!2sHITEC%20City%2C%20Hyderabad%2C%20Telangana%2C%20India!5e0!3m2!1sen!2sin!4v1620123456789!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy"
          title="Wealtrix Office Location"
        ></iframe>
      </MapContainer>
    </ContactContainer>
  );
};

export default ContactPage;
