import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import { FaChartLine, FaRupeeSign } from 'react-icons/fa';

const HeroContainer = styled.div`
  background: linear-gradient(135deg, var(--secondary) 0%, #002c4f 100%);
  color: var(--text-light);
  padding: 6rem 0;
  position: relative;
  overflow: hidden;
  
  @media (max-width: 768px) {
    padding: 4rem 0;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const HeroText = styled.div`
  @media (max-width: 992px) {
    order: 2;
  }
`;

const HeroTitle = styled.h1`
  font-size: 3.5rem;
  line-height: 1.2;
  margin-bottom: 1.5rem;
  
  span {
    color: var(--primary);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.2rem;
  margin-bottom: 2rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 1rem;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const HeroImageContainer = styled.div`
  position: relative;
  
  @media (max-width: 992px) {
    order: 1;
    max-width: 500px;
    margin: 0 auto;
  }
`;

const HeroImage = styled.img`
  width: 100%;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-lg);
`;

const HeroStats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: var(--border-radius-md);
  backdrop-filter: blur(10px);
`;

const StatValue = styled.h3`
  font-size: 2.5rem;
  margin-bottom: 0.5rem;
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  
  svg {
    margin-right: 0.5rem;
  }
`;

const StatLabel = styled.p`
  font-size: 1rem;
  opacity: 0.9;
`;

const Hero = () => {
  return (
    <HeroContainer>
      <div className="container">
        <HeroContent>
          <HeroText>
            <HeroTitle>
              India's Premier <span>Prop Trading</span> Platform for F&O Traders
            </HeroTitle>
            <HeroSubtitle>
              Get funded up to ₹50 Lakhs to trade Indian Futures & Options markets. 
              No risk, keep up to 90% of the profits. Start your journey today!
            </HeroSubtitle>
            <HeroButtons>
              <Button to="/challenges" size="large">
                Get Funded Now
              </Button>
              <Button to="/about" variant="outline" size="large">
                Learn More
              </Button>
            </HeroButtons>
          </HeroText>
          
          <HeroImageContainer>
            <HeroImage 
              src="https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
              alt="Indian Trader analyzing markets" 
            />
          </HeroImageContainer>
        </HeroContent>
        
        <HeroStats>
          <StatItem>
            <StatValue>
              <FaRupeeSign />
              50L+
            </StatValue>
            <StatLabel>Maximum Funding Available</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>90%</StatValue>
            <StatLabel>Profit Split for Traders</StatLabel>
          </StatItem>
          <StatItem>
            <StatValue>
              <FaChartLine />
              5000+
            </StatValue>
            <StatLabel>Funded Traders</StatLabel>
          </StatItem>
        </HeroStats>
      </div>
    </HeroContainer>
  );
};

export default Hero;
