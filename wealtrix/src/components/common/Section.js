import React from 'react';
import styled from 'styled-components';

const SectionContainer = styled.section`
  padding: ${({ padding }) => padding || 'var(--spacing-xl) 0'};
  background-color: ${({ bgColor }) => bgColor || 'transparent'};
  position: relative;
  overflow: hidden;
`;

const SectionInner = styled.div`
  position: relative;
  z-index: 2;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: ${({ align }) => align || 'center'};
  color: ${({ color }) => color || 'var(--text-primary)'};
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 3rem;
  text-align: ${({ align }) => align || 'center'};
  color: ${({ color }) => color || 'var(--text-secondary)'};
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  
  @media (max-width: 768px) {
    font-size: 1rem;
    margin-bottom: 2rem;
  }
`;

const Section = ({ 
  children, 
  title, 
  subtitle, 
  bgColor, 
  padding,
  titleColor,
  subtitleColor,
  align,
  className,
  ...rest 
}) => {
  return (
    <SectionContainer bgColor={bgColor} padding={padding} className={className} {...rest}>
      <div className="container">
        <SectionInner>
          {title && <SectionTitle align={align} color={titleColor}>{title}</SectionTitle>}
          {subtitle && <SectionSubtitle align={align} color={subtitleColor}>{subtitle}</SectionSubtitle>}
          {children}
        </SectionInner>
      </div>
    </SectionContainer>
  );
};

export default Section;
