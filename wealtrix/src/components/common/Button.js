import React from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const ButtonStyles = css`
  display: inline-block;
  padding: ${({ size }) => 
    size === 'small' ? '0.5rem 1rem' : 
    size === 'large' ? '1rem 2.5rem' : 
    '0.75rem 1.5rem'};
  font-size: ${({ size }) => 
    size === 'small' ? '0.875rem' : 
    size === 'large' ? '1.125rem' : 
    '1rem'};
  font-weight: 600;
  text-align: center;
  border-radius: var(--border-radius-md);
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  
  ${({ variant }) => {
    switch (variant) {
      case 'outline':
        return css`
          background-color: transparent;
          border: 2px solid var(--primary);
          color: var(--primary);
          
          &:hover {
            background-color: var(--primary);
            color: var(--text-light);
          }
        `;
      case 'secondary':
        return css`
          background-color: var(--secondary);
          color: var(--text-light);
          
          &:hover {
            background-color: #003b66; /* Darker shade of secondary */
            transform: translateY(-2px);
          }
        `;
      case 'accent':
        return css`
          background-color: var(--accent);
          color: var(--text-light);
          
          &:hover {
            background-color: #008a7b; /* Darker shade of accent */
            transform: translateY(-2px);
          }
        `;
      default:
        return css`
          background-color: var(--primary);
          color: var(--text-light);
          
          &:hover {
            background-color: #e55a2a; /* Darker shade of primary */
            transform: translateY(-2px);
          }
        `;
    }
  }}
  
  ${({ fullWidth }) => fullWidth && css`
    width: 100%;
  `}
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none !important;
  }
`;

const StyledButton = styled.button`
  ${ButtonStyles}
`;

const StyledLink = styled(Link)`
  ${ButtonStyles}
`;

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'medium', 
  to, 
  onClick, 
  fullWidth = false,
  disabled = false,
  type = 'button',
  ...rest 
}) => {
  if (to) {
    return (
      <StyledLink 
        to={to} 
        variant={variant} 
        size={size} 
        fullWidth={fullWidth}
        {...rest}
      >
        {children}
      </StyledLink>
    );
  }
  
  return (
    <StyledButton 
      variant={variant} 
      size={size} 
      onClick={onClick} 
      fullWidth={fullWidth}
      disabled={disabled}
      type={type}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
