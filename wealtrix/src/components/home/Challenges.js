import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaCheck, FaTimes } from 'react-icons/fa';

const ChallengesContainer = styled.div`
  position: relative;
`;

const ChallengesTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const ChallengeTab = styled.button`
  padding: 1rem 2rem;
  background-color: ${({ active }) => active ? 'var(--primary)' : 'transparent'};
  color: ${({ active }) => active ? 'var(--text-light)' : 'var(--text-primary)'};
  border: 2px solid var(--primary);
  border-radius: ${({ position }) => {
    if (position === 'left') return 'var(--border-radius-md) 0 0 var(--border-radius-md)';
    if (position === 'right') return '0 var(--border-radius-md) var(--border-radius-md) 0';
    return '0';
  }};
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => active ? 'var(--primary)' : 'rgba(255, 107, 53, 0.1)'};
  }
  
  @media (max-width: 576px) {
    border-radius: var(--border-radius-md);
  }
`;

const ChallengesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const PriceCard = styled(Card)`
  text-align: center;
  transform: ${({ featured }) => featured ? 'scale(1.05)' : 'none'};
  border: ${({ featured }) => featured ? '2px solid var(--primary)' : 'none'};
  z-index: ${({ featured }) => featured ? '2' : '1'};
  
  @media (max-width: 992px) {
    transform: none;
  }
`;

const PriceAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1.5rem 0;
  color: var(--primary);
  
  span {
    font-size: 1rem;
    color: var(--text-secondary);
  }
`;

const AccountSize = styled.div`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
  text-align: left;
`;

const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.5rem;
    color: ${({ included }) => included ? 'var(--success)' : 'var(--error)'};
  }
`;

const FeaturedTag = styled.span`
  position: absolute;
  top: 0;
  right: 2rem;
  background-color: var(--primary);
  color: var(--text-light);
  padding: 0.5rem 1.5rem;
  border-radius: 0 0 var(--border-radius-md) var(--border-radius-md);
  font-weight: 600;
  font-size: 0.875rem;
`;

const Challenges = () => {
  const [activeTab, setActiveTab] = useState('oneStep');
  
  const challengeTypes = {
    oneStep: {
      title: 'One-Step Challenge',
      description: 'Complete just one evaluation phase to get funded'
    },
    twoStep: {
      title: 'Two-Step Challenge',
      description: 'Lower entry fees with two evaluation phases'
    }
  };
  
  // Using the challengeTypes variable to get the current challenge type info
  const currentChallengeType = challengeTypes[activeTab];
  
  const oneStepChallenges = [
    {
      title: 'Starter',
      price: 12999,
      accountSize: '₹5 Lakhs',
      featured: false,
      features: [
        { text: 'Profit Target: 8%', included: true },
        { text: 'Max Daily Drawdown: 5%', included: true },
        { text: 'Max Overall Drawdown: 10%', included: true },
        { text: 'Profit Split: 80%', included: true },
        { text: 'Minimum Trading Days: 5', included: true },
        { text: 'Scaling Opportunities', included: true },
        { text: 'Express Evaluation (3 days)', included: false }
      ]
    },
    {
      title: 'Trader',
      price: 24999,
      accountSize: '₹10 Lakhs',
      featured: true,
      features: [
        { text: 'Profit Target: 8%', included: true },
        { text: 'Max Daily Drawdown: 5%', included: true },
        { text: 'Max Overall Drawdown: 10%', included: true },
        { text: 'Profit Split: 85%', included: true },
        { text: 'Minimum Trading Days: 5', included: true },
        { text: 'Scaling Opportunities', included: true },
        { text: 'Express Evaluation (3 days)', included: true }
      ]
    },
    {
      title: 'Professional',
      price: 49999,
      accountSize: '₹25 Lakhs',
      featured: false,
      features: [
        { text: 'Profit Target: 8%', included: true },
        { text: 'Max Daily Drawdown: 5%', included: true },
        { text: 'Max Overall Drawdown: 10%', included: true },
        { text: 'Profit Split: 90%', included: true },
        { text: 'Minimum Trading Days: 5', included: true },
        { text: 'Scaling Opportunities', included: true },
        { text: 'Express Evaluation (3 days)', included: true }
      ]
    }
  ];
  
  const twoStepChallenges = [
    {
      title: 'Starter',
      price: 7999,
      accountSize: '₹5 Lakhs',
      featured: false,
      features: [
        { text: 'Phase 1 & 2 Profit Target: 8% each', included: true },
        { text: 'Max Daily Drawdown: 5%', included: true },
        { text: 'Max Overall Drawdown: 10%', included: true },
        { text: 'Profit Split: 80%', included: true },
        { text: 'Minimum Trading Days: 10 (5 per phase)', included: true },
        { text: 'Scaling Opportunities', included: true },
        { text: 'Express Evaluation', included: false }
      ]
    },
    {
      title: 'Trader',
      price: 14999,
      accountSize: '₹10 Lakhs',
      featured: true,
      features: [
        { text: 'Phase 1 & 2 Profit Target: 8% each', included: true },
        { text: 'Max Daily Drawdown: 5%', included: true },
        { text: 'Max Overall Drawdown: 10%', included: true },
        { text: 'Profit Split: 85%', included: true },
        { text: 'Minimum Trading Days: 10 (5 per phase)', included: true },
        { text: 'Scaling Opportunities', included: true },
        { text: 'Express Evaluation (5 days)', included: true }
      ]
    },
    {
      title: 'Professional',
      price: 29999,
      accountSize: '₹25 Lakhs',
      featured: false,
      features: [
        { text: 'Phase 1 & 2 Profit Target: 8% each', included: true },
        { text: 'Max Daily Drawdown: 5%', included: true },
        { text: 'Max Overall Drawdown: 10%', included: true },
        { text: 'Profit Split: 90%', included: true },
        { text: 'Minimum Trading Days: 10 (5 per phase)', included: true },
        { text: 'Scaling Opportunities', included: true },
        { text: 'Express Evaluation (5 days)', included: true }
      ]
    }
  ];
  
  const challenges = activeTab === 'oneStep' ? oneStepChallenges : twoStepChallenges;
  
  return (
    <Section 
      title={`${currentChallengeType.title} Trading`} 
      subtitle={currentChallengeType.description}
      bgColor="#f9f9f9"
      padding="5rem 0"
    >
      <ChallengesContainer>
        <ChallengesTabs>
          <ChallengeTab 
            active={activeTab === 'oneStep'} 
            onClick={() => setActiveTab('oneStep')}
            position="left"
          >
            One-Step Challenge
          </ChallengeTab>
          <ChallengeTab 
            active={activeTab === 'twoStep'} 
            onClick={() => setActiveTab('twoStep')}
            position="right"
          >
            Two-Step Challenge
          </ChallengeTab>
        </ChallengesTabs>
        
        <ChallengesGrid>
          {challenges.map((challenge, index) => (
            <PriceCard 
              key={index} 
              title={challenge.title}
              elevated={true}
              hoverEffect={true}
              featured={challenge.featured}
              footer={
                <Button to="/challenges" fullWidth>
                  Start Challenge
                </Button>
              }
            >
              {challenge.featured && <FeaturedTag>Most Popular</FeaturedTag>}
              <PriceAmount>
                ₹{challenge.price.toLocaleString()}<span> one-time fee</span>
              </PriceAmount>
              <AccountSize>Account Size: {challenge.accountSize}</AccountSize>
              <FeatureList>
                {challenge.features.map((feature, idx) => (
                  <FeatureItem key={idx} included={feature.included}>
                    {feature.included ? <FaCheck /> : <FaTimes />}
                    {feature.text}
                  </FeatureItem>
                ))}
              </FeatureList>
            </PriceCard>
          ))}
        </ChallengesGrid>
      </ChallengesContainer>
    </Section>
  );
};

export default Challenges;
