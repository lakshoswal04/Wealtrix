import React from 'react';
import styled from 'styled-components';
import Button from '../common/Button';

const CTAContainer = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, #e55a2a 100%);
  color: var(--text-light);
  padding: 5rem 0;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2.5rem;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTA = () => {
  return (
    <CTAContainer>
      <div className="container">
        <CTATitle>Ready to Trade with Our Capital?</CTATitle>
        <CTADescription>
          Join thousands of successful traders who have taken their trading career to the next level with Wealtrix funding. Start your journey today!
        </CTADescription>
        <CTAButtons>
          <Button to="/challenges" variant="secondary" size="large">
            View Challenges
          </Button>
          <Button to="/contact" variant="outline" size="large">
            Contact Us
          </Button>
        </CTAButtons>
      </div>
    </CTAContainer>
  );
};

export default CTA;
