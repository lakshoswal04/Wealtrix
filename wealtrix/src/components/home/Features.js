import React from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import { FaRupeeSign, FaChartLine, FaShieldAlt, FaGraduationCap, FaHandshake, FaRocket } from 'react-icons/fa';

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureItem = styled.div`
  background-color: var(--background);
  padding: 2rem;
  border-radius: var(--border-radius-md);
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
`;

const FeatureIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: var(--primary);
  color: var(--text-light);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const FeatureDescription = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const Features = () => {
  const features = [
    {
      icon: <FaRupeeSign />,
      title: 'High Capital Allocation',
      description: 'Get funded up to ₹50 Lakhs to trade Indian F&O markets without risking your own capital.'
    },
    {
      icon: <FaChartLine />,
      title: 'Profit Split up to 90%',
      description: 'Keep up to 90% of the profits you generate. We believe in rewarding skilled traders generously.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Risk-Free Trading',
      description: 'Trade with our capital. You never lose your own money, we absorb all the losses.'
    },
    {
      icon: <FaGraduationCap />,
      title: 'Educational Resources',
      description: 'Access premium educational content, webinars, and market analysis to improve your trading skills.'
    },
    {
      icon: <FaHandshake />,
      title: 'Supportive Community',
      description: 'Join a community of like-minded traders. Share strategies and learn from experienced professionals.'
    },
    {
      icon: <FaRocket />,
      title: 'Rapid Scaling',
      description: 'Consistently profitable? Scale up your account size quickly and increase your earning potential.'
    }
  ];

  return (
    <Section 
      title="Why Choose Wealtrix" 
      subtitle="We offer the best funding opportunities for Indian F&O traders with unmatched benefits and support"
      padding="5rem 0"
    >
      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureItem key={index}>
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureItem>
        ))}
      </FeaturesGrid>
    </Section>
  );
};

export default Features;
