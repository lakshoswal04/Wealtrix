import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PricingContainer = styled.div`
  padding: 5rem 0;
`;

const PricingHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const PricingTitle = styled.h1`
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const PricingSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`;

const PricingToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem 0 3rem;
`;

const ToggleOption = styled.button`
  background: none;
  border: none;
  font-size: 1.1rem;
  font-weight: 600;
  color: ${({ active }) => (active ? 'var(--primary)' : 'var(--text-secondary)')};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    color: var(--primary);
  }
`;

const ToggleSwitch = styled.div`
  width: 60px;
  height: 30px;
  background-color: var(--primary);
  border-radius: 15px;
  margin: 0 1rem;
  position: relative;
  cursor: pointer;
  
  &:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    background-color: white;
    border-radius: 50%;
    top: 3px;
    left: ${({ isRight }) => (isRight ? '33px' : '3px')};
    transition: all 0.3s ease;
  }
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
`;

const PricingCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
  padding: 2.5rem 2rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  
  ${({ featured }) => featured && `
    border: 2px solid var(--primary);
    transform: scale(1.05);
    
    @media (max-width: 768px) {
      transform: scale(1);
    }
  `}
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-md);
  }
`;

const FeaturedBadge = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  font-size: 0.8rem;
  font-weight: 600;
  border-bottom-left-radius: var(--border-radius-md);
`;

const PricingTier = styled.h3`
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const PricingAmount = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--text-primary);
  margin: 1.5rem 0;
  
  span {
    font-size: 1rem;
    color: var(--text-secondary);
    font-weight: 400;
  }
`;

const PricingDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const PricingFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 2rem;
`;

const PricingFeature = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  color: var(--text-secondary);
  
  &:before {
    content: '✓';
    color: var(--primary);
    font-weight: bold;
    margin-right: 0.5rem;
  }
`;

const PricingButton = styled(Link)`
  display: block;
  background-color: ${({ featured }) => (featured ? 'var(--primary)' : 'transparent')};
  color: ${({ featured }) => (featured ? 'white' : 'var(--primary)')};
  border: 2px solid var(--primary);
  padding: 0.8rem 0;
  border-radius: var(--border-radius-md);
  text-align: center;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: white;
    transform: translateY(-3px);
  }
`;

const PricingPage = () => {
  const [isNormal, setIsNormal] = useState(true);
  
  const togglePricingType = () => {
    setIsNormal(!isNormal);
  };
  
  const normalPlans = [
    {
      tier: 'Starter',
      amount: '₹15,000',
      description: 'Perfect for beginners looking to prove their trading skills',
      features: [
        'Account Size: ₹2,00,000',
        'Profit Target: 10%',
        'Max Drawdown: 8%',
        'Profit Split: 80%',
        'Daily Drawdown: 4%',
        'Trading Period: 30 Days',
        'One-time Fee'
      ],
      featured: false
    },
    {
      tier: 'Standard',
      amount: '₹25,000',
      description: 'Our most popular plan for serious traders',
      features: [
        'Account Size: ₹5,00,000',
        'Profit Target: 10%',
        'Max Drawdown: 8%',
        'Profit Split: 85%',
        'Daily Drawdown: 4%',
        'Trading Period: 30 Days',
        'One-time Fee'
      ],
      featured: true
    },
    {
      tier: 'Professional',
      amount: '₹45,000',
      description: 'For experienced traders seeking significant capital',
      features: [
        'Account Size: ₹10,00,000',
        'Profit Target: 10%',
        'Max Drawdown: 8%',
        'Profit Split: 90%',
        'Daily Drawdown: 4%',
        'Trading Period: 30 Days',
        'One-time Fee'
      ],
      featured: false
    }
  ];
  
  const expressPlans = [
    {
      tier: 'Express Starter',
      amount: '₹20,000',
      description: 'Fast-track evaluation with a single phase',
      features: [
        'Account Size: ₹2,00,000',
        'Profit Target: 12%',
        'Max Drawdown: 6%',
        'Profit Split: 80%',
        'Daily Drawdown: 3%',
        'Trading Period: 15 Days',
        'One-time Fee'
      ],
      featured: false
    },
    {
      tier: 'Express Standard',
      amount: '₹35,000',
      description: 'Our most popular express plan',
      features: [
        'Account Size: ₹5,00,000',
        'Profit Target: 12%',
        'Max Drawdown: 6%',
        'Profit Split: 85%',
        'Daily Drawdown: 3%',
        'Trading Period: 15 Days',
        'One-time Fee'
      ],
      featured: true
    },
    {
      tier: 'Express Professional',
      amount: '₹60,000',
      description: 'Maximum capital with accelerated evaluation',
      features: [
        'Account Size: ₹10,00,000',
        'Profit Target: 12%',
        'Max Drawdown: 6%',
        'Profit Split: 90%',
        'Daily Drawdown: 3%',
        'Trading Period: 15 Days',
        'One-time Fee'
      ],
      featured: false
    }
  ];
  
  const plans = isNormal ? normalPlans : expressPlans;
  
  return (
    <PricingContainer className="container">
      <PricingHeader>
        <PricingTitle>Pricing Plans</PricingTitle>
        <PricingSubtitle>
          Choose the perfect plan to start your journey with Wealtrix and trade with our capital in the Indian F&O market
        </PricingSubtitle>
      </PricingHeader>
      
      <PricingToggle>
        <ToggleOption active={isNormal} onClick={() => setIsNormal(true)}>
          Normal Challenge
        </ToggleOption>
        <ToggleSwitch isRight={!isNormal} onClick={togglePricingType} />
        <ToggleOption active={!isNormal} onClick={() => setIsNormal(false)}>
          Express Challenge
        </ToggleOption>
      </PricingToggle>
      
      <PricingGrid>
        {plans.map((plan, index) => (
          <PricingCard key={index} featured={plan.featured}>
            {plan.featured && <FeaturedBadge>Most Popular</FeaturedBadge>}
            <PricingTier>{plan.tier}</PricingTier>
            <PricingAmount>
              {plan.amount} <span>one-time fee</span>
            </PricingAmount>
            <PricingDescription>{plan.description}</PricingDescription>
            <PricingFeatures>
              {plan.features.map((feature, idx) => (
                <PricingFeature key={idx}>{feature}</PricingFeature>
              ))}
            </PricingFeatures>
            <PricingButton to="/signup" featured={plan.featured}>
              Get Started
            </PricingButton>
          </PricingCard>
        ))}
      </PricingGrid>
      
      <div style={{ marginTop: '5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Additional Benefits</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
          <div style={{ background: 'var(--background-light)', padding: '2rem', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Scaling Program</h3>
            <p style={{ marginBottom: '1.5rem' }}>Successful traders can scale their accounts up to ₹1 Crore based on consistent performance.</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>25% increase after 2 consecutive profitable months</li>
              <li>50% increase after 4 consecutive profitable months</li>
              <li>100% increase after 6 consecutive profitable months</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--background-light)', padding: '2rem', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Trading Tools</h3>
            <p style={{ marginBottom: '1.5rem' }}>All funded traders receive access to our suite of professional trading tools.</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Advanced charting software</li>
              <li>Risk management calculator</li>
              <li>Market scanners for F&O opportunities</li>
              <li>Trading journal and performance analytics</li>
            </ul>
          </div>
          
          <div style={{ background: 'var(--background-light)', padding: '2rem', borderRadius: 'var(--border-radius-md)', boxShadow: 'var(--shadow-sm)' }}>
            <h3 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>Educational Resources</h3>
            <p style={{ marginBottom: '1.5rem' }}>Enhance your trading skills with our comprehensive educational resources.</p>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Weekly webinars with market experts</li>
              <li>Strategy development workshops</li>
              <li>Risk management masterclasses</li>
              <li>Access to recorded sessions library</li>
            </ul>
          </div>
        </div>
      </div>
      
      <div style={{ marginTop: '5rem' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Comparison with Competitors</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: '800px' }}>
            <thead>
              <tr style={{ background: 'var(--primary)', color: 'white' }}>
                <th style={{ padding: '1rem', textAlign: 'left', borderBottom: '1px solid var(--border-color)' }}>Feature</th>
                <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Wealtrix</th>
                <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Competitor A</th>
                <th style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Competitor B</th>
              </tr>
            </thead>
            <tbody>
              <tr style={{ background: 'var(--background-light)' }}>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Account Sizes</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>₹2L to ₹1Cr</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>₹2L to ₹50L</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>₹5L to ₹25L</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Profit Split</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)', fontWeight: 'bold', color: 'var(--primary)' }}>Up to 90%</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Up to 80%</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Up to 75%</td>
              </tr>
              <tr style={{ background: 'var(--background-light)' }}>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Challenge Fee</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)', fontWeight: 'bold', color: 'var(--primary)' }}>From ₹7,999</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>From ₹10,000</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>From ₹12,000</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Indian Market Focus</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>✓</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Partial</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>✗</td>
              </tr>
              <tr style={{ background: 'var(--background-light)' }}>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Scaling Program</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>✓</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>✓</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Limited</td>
              </tr>
              <tr>
                <td style={{ padding: '1rem', borderBottom: '1px solid var(--border-color)' }}>Educational Resources</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Comprehensive</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Basic</td>
                <td style={{ padding: '1rem', textAlign: 'center', borderBottom: '1px solid var(--border-color)' }}>Limited</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: '5rem', padding: '3rem', background: 'var(--background-light)', borderRadius: 'var(--border-radius-lg)' }}>
        <h3>Need a custom solution?</h3>
        <p>Contact our team for custom account sizes and special requirements</p>
        <PricingButton to="/contact" style={{ maxWidth: '200px', margin: '1rem auto' }}>
          Contact Us
        </PricingButton>
      </div>
    </PricingContainer>
  );
};

export default PricingPage;
