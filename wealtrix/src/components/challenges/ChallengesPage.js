import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import Card from '../common/Card';
import Button from '../common/Button';
import { FaCheck, FaTimes, FaInfoCircle, FaPlus } from 'react-icons/fa';

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

const RulesSection = styled.div`
  margin-top: 5rem;
`;

const RulesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const RuleCard = styled(Card)`
  height: 100%;
`;

const RuleTitle = styled.h3`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  
  svg {
    margin-right: 0.75rem;
    color: var(--primary);
  }
`;

const FAQSection = styled.div`
  margin-top: 5rem;
`;

const FAQContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  background-color: var(--background);
`;

const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ isOpen }) => isOpen ? 'var(--primary)' : 'var(--background)'};
  color: ${({ isOpen }) => isOpen ? 'var(--text-light)' : 'var(--text-primary)'};
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ isOpen }) => isOpen ? 'var(--primary)' : 'rgba(255, 107, 53, 0.1)'};
  }
  
  svg {
    flex-shrink: 0;
    margin-left: 1rem;
  }
`;

const FAQAnswer = styled.div`
  padding: ${({ isOpen }) => isOpen ? '1.5rem' : '0 1.5rem'};
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  line-height: 1.6;
  opacity: ${({ isOpen }) => isOpen ? '1' : '0'};
`;

const ChallengesPage = () => {
  const [activeTab, setActiveTab] = useState('oneStep');
  const [openFAQIndex, setOpenFAQIndex] = useState(0);
  
  const toggleQuestion = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };
  
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
  
  const rules = [
    {
      title: 'Trading Instruments',
      content: 'You can trade Futures & Options (F&O) on Nifty, Bank Nifty, Fin Nifty, and other approved indices and stocks available for F&O trading on Indian exchanges. Trading is allowed only during regular market hours.'
    },
    {
      title: 'Profit Targets',
      content: 'For One-Step Challenge, achieve an 8% profit target to get funded. For Two-Step Challenge, achieve an 8% profit target in Phase 1, followed by another 8% in Phase 2.'
    },
    {
      title: 'Drawdown Limits',
      content: 'Maximum daily drawdown is 5% of your account balance at the start of the day. Maximum overall drawdown is 10% from the initial account balance. Exceeding these limits will result in challenge failure.'
    },
    {
      title: 'Minimum Trading Days',
      content: 'You must trade on at least 5 different days for One-Step Challenge, or 5 days per phase for Two-Step Challenge. This ensures consistent trading rather than taking excessive risks on a single day.'
    },
    {
      title: 'Position Holding',
      content: 'Overnight positions are allowed for Futures but not for Options. All Option positions must be closed before market close. This is to manage overnight risk effectively.'
    },
    {
      title: 'Account Scaling',
      content: 'After demonstrating consistent profitability with your funded account, you become eligible for our scaling program. This allows you to increase your account size and potential profits over time.'
    }
  ];
  
  const faqs = [
    {
      question: "What's the difference between One-Step and Two-Step Challenges?",
      answer: "The One-Step Challenge requires you to pass just one evaluation phase to get funded, but has a higher entry fee. The Two-Step Challenge has a lower entry fee but requires you to pass two consecutive evaluation phases before getting funded."
    },
    {
      question: "How long do I have to complete the challenge?",
      answer: "There is no time limit to complete the challenge. You can take as long as you need, as long as you meet the minimum trading days requirement and don't violate any of the trading rules."
    },
    {
      question: "What happens if I fail the challenge?",
      answer: "If you fail the challenge by exceeding the drawdown limits or violating other rules, you can purchase a new challenge to try again. We offer a 20% discount on your next attempt if you fail."
    },
    {
      question: "How do I receive my profits from the funded account?",
      answer: "Profits are distributed on a monthly basis. Once you request a payout, we'll process it within 5 business days and transfer the funds to your registered bank account."
    },
    {
      question: "Can I trade on multiple accounts simultaneously?",
      answer: "Yes, you can have multiple funded accounts with Wealtrix. However, you cannot use the same strategy on multiple accounts or trade the same instrument at the same time across different accounts."
    }
  ];
  
  return (
    <>
      <Section 
        title="Trading Challenges" 
        subtitle="Choose the challenge that fits your trading style and get funded to trade Indian F&O markets"
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
                  <Button variant="primary" fullWidth>
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
        
        <RulesSection>
          <Section 
            title="Challenge Rules" 
            subtitle="Understanding our trading rules is essential for successfully passing the challenge"
            padding="0"
          >
            <RulesGrid>
              {rules.map((rule, index) => (
                <RuleCard key={index}>
                  <RuleTitle>
                    <FaInfoCircle />
                    {rule.title}
                  </RuleTitle>
                  <p>{rule.content}</p>
                </RuleCard>
              ))}
            </RulesGrid>
          </Section>
        </RulesSection>
        
        <FAQSection>
          <Section 
            title="Frequently Asked Questions" 
            subtitle="Get answers to common questions about our trading challenges"
            padding="0"
          >
            <FAQContainer>
              {faqs.map((item, index) => (
                <FAQItem key={index}>
                  <FAQQuestion 
                    isOpen={openFAQIndex === index}
                    onClick={() => toggleQuestion(index)}
                  >
                    {item.question}
                    {openFAQIndex === index ? <FaTimes /> : <FaPlus />}
                  </FAQQuestion>
                  <FAQAnswer isOpen={openFAQIndex === index}>
                    {item.answer}
                  </FAQAnswer>
                </FAQItem>
              ))}
            </FAQContainer>
          </Section>
        </FAQSection>
      </Section>
    </>
  );
};

export default ChallengesPage;
