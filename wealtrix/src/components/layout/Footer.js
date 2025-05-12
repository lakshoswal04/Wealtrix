import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background-color: var(--secondary);
  color: var(--text-light);
  padding: 4rem 0 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLogo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-light);
  margin-bottom: 1rem;
  
  span {
    color: var(--primary);
  }
`;

const FooterText = styled.p`
  margin-bottom: 1.5rem;
  font-size: 0.9rem;
  opacity: 0.8;
`;

const FooterHeading = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 50px;
    height: 2px;
    background-color: var(--primary);
  }
`;

const FooterLink = styled(Link)`
  color: var(--text-light);
  margin-bottom: 0.8rem;
  font-size: 0.9rem;
  opacity: 0.8;
  transition: all 0.3s ease;
  
  &:hover {
    opacity: 1;
    color: var(--primary);
    transform: translateX(5px);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const SocialIcon = styled.a`
  color: var(--text-light);
  font-size: 1.2rem;
  margin-right: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
    transform: translateY(-3px);
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.9rem;
  opacity: 0.7;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <div className="container">
        <FooterGrid>
          <FooterColumn>
            <FooterLogo to="/">
              Weal<span>trix</span>
            </FooterLogo>
            <FooterText>
              India's premier prop trading firm specializing in F&O markets. We provide funding to talented traders to help them achieve financial freedom.
            </FooterText>
            <SocialIcons>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaFacebook />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaTwitter />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </SocialIcon>
              <SocialIcon href="#" target="_blank" rel="noopener noreferrer">
                <FaYoutube />
              </SocialIcon>
            </SocialIcons>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Quick Links</FooterHeading>
            <FooterLink to="/">Home</FooterLink>
            <FooterLink to="/about">About Us</FooterLink>
            <FooterLink to="/challenges">Challenges</FooterLink>
            <FooterLink to="/pricing">Pricing</FooterLink>
            <FooterLink to="/faq">FAQ</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Resources</FooterHeading>
            <FooterLink to="/blog">Blog</FooterLink>
            <FooterLink to="/terms">Terms & Conditions</FooterLink>
            <FooterLink to="/privacy">Privacy Policy</FooterLink>
            <FooterLink to="/refund">Refund Policy</FooterLink>
            <FooterLink to="/contact">Contact Us</FooterLink>
          </FooterColumn>
          
          <FooterColumn>
            <FooterHeading>Contact Info</FooterHeading>
            <FooterText>
              <strong>Address:</strong> Mumbai, Maharashtra, India
            </FooterText>
            <FooterText>
              <strong>Email:</strong> support@wealtrix.in
            </FooterText>
            <FooterText>
              <strong>Phone:</strong> +91 9876543210
            </FooterText>
            <FooterText>
              <strong>Hours:</strong> Monday - Friday: 9 AM - 6 PM
            </FooterText>
          </FooterColumn>
        </FooterGrid>
        
        <Copyright>
          &copy; {new Date().getFullYear()} Wealtrix. All Rights Reserved.
        </Copyright>
      </div>
    </FooterContainer>
  );
};

export default Footer;
