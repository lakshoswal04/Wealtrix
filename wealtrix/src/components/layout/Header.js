import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaBars, FaTimes, FaChevronDown, FaUser } from 'react-icons/fa';
import { useAuth } from '../../context/AuthContext';

const HeaderContainer = styled.header`
  background-color: var(--background);
  box-shadow: var(--shadow-sm);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease;
  
  &.scrolled {
    box-shadow: var(--shadow-md);
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
`;

const Logo = styled(Link)`
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--primary);
  display: flex;
  align-items: center;
  
  span {
    color: var(--secondary);
  }
`;

const NavLinks = styled.nav`
  display: flex;
  align-items: center;
  
  @media (max-width: 768px) {
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-100%')};
    width: 70%;
    height: 100vh;
    background-color: var(--background);
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 5rem;
    transition: right 0.3s ease-in-out;
    box-shadow: var(--shadow-lg);
  }
`;

const NavLink = styled(Link)`
  margin: 0 1rem;
  color: var(--text-primary);
  font-weight: 500;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
    font-size: 1.2rem;
  }
`;

const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 1rem;
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const DropdownButton = styled.button`
  background: none;
  border: none;
  color: var(--text-primary);
  font-weight: 500;
  font-size: 1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  padding: 0;
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary);
    transition: width 0.3s ease;
  }
  
  &:hover:after, &.active:after {
    width: 100%;
  }
  
  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: var(--background);
  min-width: 200px;
  box-shadow: var(--shadow-md);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 0;
  z-index: 10;
  opacity: ${({ isOpen }) => (isOpen ? '1' : '0')};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transform: ${({ isOpen }) => (isOpen ? 'translateY(10px)' : 'translateY(0)')};
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    position: static;
    box-shadow: none;
    padding: 0;
    margin-top: 1rem;
    margin-bottom: 1rem;
    background-color: transparent;
  }
`;

const DropdownLink = styled(Link)`
  display: block;
  padding: 0.7rem 1.5rem;
  color: var(--text-primary);
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.1);
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    padding: 0.7rem 0;
    margin-left: 1.5rem;
  }
`;

const CTAButton = styled(Link)`
  background-color: var(--primary);
  color: var(--text-light);
  padding: 0.5rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  margin-left: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    color: var(--text-light);
    transform: translateY(-2px);
  }
  
  @media (max-width: 768px) {
    margin: 1.5rem 0;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: var(--primary);
  cursor: pointer;
  z-index: 101;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  
  const { currentUser } = useAuth();
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);
  
  return (
    <HeaderContainer className={scrolled ? 'scrolled' : ''}>
      <div className="container">
        <NavContainer>
          <Logo to="/">
            Weal<span>trix</span>
          </Logo>
          
          <MobileMenuButton onClick={toggleMenu}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuButton>
          
          <NavLinks isOpen={isOpen}>
            <NavLink to="/" onClick={() => setIsOpen(false)}>Home</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>About</NavLink>
            <NavLink to="/challenges" onClick={() => setIsOpen(false)}>Challenges</NavLink>
            <NavLink to="/pricing" onClick={() => setIsOpen(false)}>Pricing</NavLink>
            <NavLink to="/faq" onClick={() => setIsOpen(false)}>FAQ</NavLink>
            
            <DropdownContainer ref={dropdownRef}>
              <DropdownButton 
                onClick={(e) => {
                  e.preventDefault();
                  toggleDropdown();
                }}
              >
                More <FaChevronDown size={12} />
              </DropdownButton>
              <DropdownContent isOpen={dropdownOpen}>
                <DropdownLink to="/calendar" onClick={() => {
                  setDropdownOpen(false);
                  setIsOpen(false);
                }}>
                  Economic Calendar
                </DropdownLink>
                <DropdownLink to="/competition" onClick={() => {
                  setDropdownOpen(false);
                  setIsOpen(false);
                }}>
                  Competition
                </DropdownLink>
                <DropdownLink to="/resources" onClick={() => {
                  setDropdownOpen(false);
                  setIsOpen(false);
                }}>
                  Trading Resources
                </DropdownLink>
                <DropdownLink to="/contact" onClick={() => {
                  setDropdownOpen(false);
                  setIsOpen(false);
                }}>
                  Contact Us
                </DropdownLink>
              </DropdownContent>
            </DropdownContainer>
            
            {currentUser ? (
              <CTAButton to="/profile" onClick={() => setIsOpen(false)}>
                <FaUser style={{ marginRight: '0.5rem' }} />
                {currentUser.firstName}
              </CTAButton>
            ) : (
              <CTAButton to="/login" onClick={() => setIsOpen(false)}>Login</CTAButton>
            )}
          </NavLinks>
        </NavContainer>
      </div>
    </HeaderContainer>
  );
};

export default Header;
