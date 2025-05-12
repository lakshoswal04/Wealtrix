import React, { useState } from 'react';
import styled from 'styled-components';
import { FaTrophy, FaChartLine, FaRupeeSign, FaUsers, FaCalendarAlt, FaCheck } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const CompetitionContainer = styled.div`
  padding: 5rem 0;
`;

const CompetitionHeader = styled.div`
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  overflow: hidden;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: var(--border-radius-lg);
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/competition-bg.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CompetitionTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const CompetitionSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const HeaderButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: var(--primary);
  padding: 1rem 2.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CompetitionStats = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-top: -3rem;
  margin-bottom: 5rem;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const StatCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
`;

const StatIcon = styled.div`
  width: 70px;
  height: 70px;
  background-color: rgba(var(--primary-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  
  svg {
    font-size: 2rem;
    color: var(--primary);
  }
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: var(--text-secondary);
  font-size: 1.1rem;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: var(--text-primary);
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: var(--text-secondary);
  max-width: 800px;
  margin: 0 auto 3rem;
`;

const CompetitionTabs = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const CompetitionTab = styled.button`
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

const CompetitionGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
  margin-bottom: 5rem;
`;

const CompetitionCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
`;

const CardHeader = styled.div`
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  padding: 2rem;
  color: white;
  text-align: center;
`;

const CardTitle = styled.h3`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
`;

const CardSubtitle = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const CardBody = styled.div`
  padding: 2rem;
`;

const PrizeItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const PrizeIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(var(--primary-rgb), 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
  
  svg {
    color: var(--primary);
  }
`;

const PrizeContent = styled.div``;

const PrizeTitle = styled.h4`
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
  color: var(--text-primary);
`;

const PrizeDescription = styled.p`
  font-size: 0.9rem;
  color: var(--text-secondary);
`;

const CardFooter = styled.div`
  padding: 1.5rem 2rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const CardButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const TimelineSection = styled.div`
  margin: 5rem 0;
`;

const Timeline = styled.div`
  position: relative;
  max-width: 1000px;
  margin: 0 auto;
  
  &::after {
    content: '';
    position: absolute;
    width: 6px;
    background-color: var(--background-light);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
    
    @media (max-width: 768px) {
      left: 31px;
    }
  }
`;

const TimelineItem = styled.div`
  padding: 10px 40px;
  position: relative;
  width: 50%;
  left: ${({ position }) => position === 'right' ? '50%' : '0'};
  
  @media (max-width: 768px) {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
    left: 0;
  }
`;

const TimelineContent = styled.div`
  padding: 2rem;
  background-color: white;
  position: relative;
  border-radius: var(--border-radius-lg);
  box-shadow: var(--shadow-md);
  
  &::after {
    content: '';
    position: absolute;
    width: 25px;
    height: 25px;
    right: ${({ position }) => position === 'left' ? '-17px' : 'auto'};
    left: ${({ position }) => position === 'right' ? '-17px' : 'auto'};
    background-color: white;
    border: 4px solid var(--primary);
    top: 22px;
    border-radius: 50%;
    z-index: 1;
    
    @media (max-width: 768px) {
      left: -45px;
      right: auto;
    }
  }
`;

const TimelineDate = styled.div`
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const TimelineTitle = styled.h3`
  margin-bottom: 1rem;
`;

const TimelineDescription = styled.p`
  color: var(--text-secondary);
`;

const FAQSection = styled.div`
  margin: 5rem 0;
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
`;

const FAQQuestion = styled.button`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  background-color: ${({ isOpen }) => isOpen ? 'var(--primary)' : 'var(--background-light)'};
  color: ${({ isOpen }) => isOpen ? 'white' : 'var(--text-primary)'};
  border: none;
  text-align: left;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ isOpen }) => isOpen ? 'var(--primary)' : 'rgba(var(--primary-rgb), 0.1)'};
  }
`;

const FAQAnswer = styled.div`
  padding: ${({ isOpen }) => isOpen ? '1.5rem' : '0 1.5rem'};
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: white;
  line-height: 1.6;
`;

const CTASection = styled.div`
  text-align: center;
  margin: 5rem 0;
  padding: 4rem 2rem;
  background: linear-gradient(135deg, var(--primary) 0%, var(--secondary) 100%);
  border-radius: var(--border-radius-lg);
  color: white;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('/cta-bg.jpg');
    background-size: cover;
    background-position: center;
    opacity: 0.1;
    z-index: 0;
  }
`;

const CTAContent = styled.div`
  position: relative;
  z-index: 1;
`;

const CTATitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

const CTADescription = styled.p`
  font-size: 1.2rem;
  max-width: 700px;
  margin: 0 auto 2rem;
  opacity: 0.9;
`;

const CTAButton = styled(Link)`
  display: inline-block;
  background-color: white;
  color: var(--primary);
  padding: 1rem 2.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }
`;

const CompetitionPage = () => {
  const [activeTab, setActiveTab] = useState('monthly');
  const [openFAQIndex, setOpenFAQIndex] = useState(0);
  
  const toggleQuestion = (index) => {
    setOpenFAQIndex(openFAQIndex === index ? null : index);
  };
  
  const monthlyCompetitions = [
    {
      title: "Rookie Trader",
      subtitle: "For beginners with less than 1 year experience",
      prizes: [
        {
          title: "First Prize",
          description: "₹5 Lakh funded account with 85% profit split"
        },
        {
          title: "Second Prize",
          description: "₹2 Lakh funded account with 80% profit split"
        },
        {
          title: "Third Prize",
          description: "50% discount on any challenge"
        },
        {
          title: "Entry Fee",
          description: "Free for all registered Wealtrix users"
        }
      ]
    },
    {
      title: "Pro Trader",
      subtitle: "For experienced traders with proven track record",
      prizes: [
        {
          title: "First Prize",
          description: "₹25 Lakh funded account with 90% profit split"
        },
        {
          title: "Second Prize",
          description: "₹10 Lakh funded account with 85% profit split"
        },
        {
          title: "Third Prize",
          description: "₹5 Lakh funded account with 80% profit split"
        },
        {
          title: "Entry Fee",
          description: "₹999 (refunded if you finish in top 10)"
        }
      ]
    },
    {
      title: "Elite Trader",
      subtitle: "By invitation only for top performers",
      prizes: [
        {
          title: "First Prize",
          description: "₹50 Lakh funded account with 90% profit split"
        },
        {
          title: "Second Prize",
          description: "₹25 Lakh funded account with 90% profit split"
        },
        {
          title: "Third Prize",
          description: "₹10 Lakh funded account with 85% profit split"
        },
        {
          title: "Entry Fee",
          description: "By invitation only (no fee)"
        }
      ]
    }
  ];
  
  const quarterlyCompetitions = [
    {
      title: "National Championship",
      subtitle: "Open to all Indian traders",
      prizes: [
        {
          title: "First Prize",
          description: "₹1 Crore funded account with 90% profit split"
        },
        {
          title: "Second Prize",
          description: "₹50 Lakh funded account with 90% profit split"
        },
        {
          title: "Third Prize",
          description: "₹25 Lakh funded account with 85% profit split"
        },
        {
          title: "Entry Fee",
          description: "₹1,999 (refunded if you finish in top 20)"
        }
      ]
    },
    {
      title: "Options Masters",
      subtitle: "Specialized for options traders",
      prizes: [
        {
          title: "First Prize",
          description: "₹50 Lakh funded account with 90% profit split"
        },
        {
          title: "Second Prize",
          description: "₹25 Lakh funded account with 85% profit split"
        },
        {
          title: "Third Prize",
          description: "₹10 Lakh funded account with 80% profit split"
        },
        {
          title: "Entry Fee",
          description: "₹1,499 (refunded if you finish in top 15)"
        }
      ]
    },
    {
      title: "Futures Challenge",
      subtitle: "Specialized for futures traders",
      prizes: [
        {
          title: "First Prize",
          description: "₹50 Lakh funded account with 90% profit split"
        },
        {
          title: "Second Prize",
          description: "₹25 Lakh funded account with 85% profit split"
        },
        {
          title: "Third Prize",
          description: "₹10 Lakh funded account with 80% profit split"
        },
        {
          title: "Entry Fee",
          description: "₹1,499 (refunded if you finish in top 15)"
        }
      ]
    }
  ];
  
  const competitions = activeTab === 'monthly' ? monthlyCompetitions : quarterlyCompetitions;
  
  const timelineItems = [
    {
      position: "left",
      date: "Day 1",
      title: "Registration Opens",
      description: "Competition registration begins. Secure your spot early as some competitions have limited entries."
    },
    {
      position: "right",
      date: "Day 7",
      title: "Registration Closes",
      description: "Last day to register for the competition. Make sure you've completed all requirements."
    },
    {
      position: "left",
      date: "Day 10",
      title: "Competition Begins",
      description: "Trading period starts. All participants receive access to their simulation accounts."
    },
    {
      position: "right",
      date: "Day 10-20",
      title: "Trading Period",
      description: "Execute your trading strategy and compete against other traders for the highest returns."
    },
    {
      position: "left",
      date: "Day 21",
      title: "Competition Ends",
      description: "Trading period closes. Final account values are recorded for judging."
    },
    {
      position: "right",
      date: "Day 25",
      title: "Winners Announced",
      description: "Winners are announced and prizes are distributed. Top performers receive their funded accounts."
    }
  ];
  
  const faqs = [
    {
      question: "How do I register for a competition?",
      answer: "Registration is simple. Navigate to the competition you're interested in, click the 'Register Now' button, and follow the instructions. You'll need a Wealtrix account to participate."
    },
    {
      question: "What trading platforms can I use during competitions?",
      answer: "All competitions are conducted through our proprietary simulation platform that mirrors real market conditions. You'll receive access credentials after registration is confirmed."
    },
    {
      question: "How are winners determined?",
      answer: "Winners are primarily determined by the highest percentage return on investment. However, we also consider risk management metrics such as maximum drawdown and Sharpe ratio to ensure responsible trading."
    },
    {
      question: "Can I participate in multiple competitions simultaneously?",
      answer: "Yes, you can register for multiple competitions as long as they don't have conflicting trading periods. Each competition requires separate registration and may have different entry fees."
    },
    {
      question: "What happens if I win a funded account?",
      answer: "If you win a funded account, you'll go through a brief onboarding process to set up your funded trader account. You'll then be able to trade with our capital according to our standard rules, with profits split as specified in the prize description."
    }
  ];
  
  return (
    <CompetitionContainer className="container">
      <CompetitionHeader>
        <HeaderContent>
          <CompetitionTitle>Wealtrix Trading Competitions</CompetitionTitle>
          <CompetitionSubtitle>
            Showcase your trading skills, compete with the best traders across India, and win funded accounts worth up to ₹1 Crore
          </CompetitionSubtitle>
          <HeaderButton to="/signup">Register Now</HeaderButton>
        </HeaderContent>
      </CompetitionHeader>
      
      <CompetitionStats>
        <StatCard>
          <StatIcon>
            <FaTrophy />
          </StatIcon>
          <StatValue>₹1 Cr+</StatValue>
          <StatLabel>In Prizes Every Quarter</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon>
            <FaChartLine />
          </StatIcon>
          <StatValue>6+</StatValue>
          <StatLabel>Different Competitions</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon>
            <FaRupeeSign />
          </StatIcon>
          <StatValue>90%</StatValue>
          <StatLabel>Profit Split for Winners</StatLabel>
        </StatCard>
        
        <StatCard>
          <StatIcon>
            <FaUsers />
          </StatIcon>
          <StatValue>5000+</StatValue>
          <StatLabel>Active Participants</StatLabel>
        </StatCard>
      </CompetitionStats>
      
      <div>
        <SectionTitle>Upcoming Competitions</SectionTitle>
        <SectionSubtitle>
          Choose from our monthly or quarterly competitions and find the perfect match for your trading style and experience level
        </SectionSubtitle>
        
        <CompetitionTabs>
          <CompetitionTab 
            active={activeTab === 'monthly'} 
            onClick={() => setActiveTab('monthly')}
            position="left"
          >
            Monthly Competitions
          </CompetitionTab>
          <CompetitionTab 
            active={activeTab === 'quarterly'} 
            onClick={() => setActiveTab('quarterly')}
            position="right"
          >
            Quarterly Championships
          </CompetitionTab>
        </CompetitionTabs>
        
        <CompetitionGrid>
          {competitions.map((competition, index) => (
            <CompetitionCard key={index}>
              <CardHeader>
                <CardTitle>{competition.title}</CardTitle>
                <CardSubtitle>{competition.subtitle}</CardSubtitle>
              </CardHeader>
              <CardBody>
                {competition.prizes.map((prize, idx) => (
                  <PrizeItem key={idx}>
                    <PrizeIcon>
                      <FaCheck />
                    </PrizeIcon>
                    <PrizeContent>
                      <PrizeTitle>{prize.title}</PrizeTitle>
                      <PrizeDescription>{prize.description}</PrizeDescription>
                    </PrizeContent>
                  </PrizeItem>
                ))}
              </CardBody>
              <CardFooter>
                <CardButton to="/signup">Register Now</CardButton>
              </CardFooter>
            </CompetitionCard>
          ))}
        </CompetitionGrid>
      </div>
      
      <TimelineSection>
        <SectionTitle>Competition Timeline</SectionTitle>
        <SectionSubtitle>
          Follow the journey from registration to winning a funded account
        </SectionSubtitle>
        
        <Timeline>
          {timelineItems.map((item, index) => (
            <TimelineItem key={index} position={item.position}>
              <TimelineContent position={item.position}>
                <TimelineDate>{item.date}</TimelineDate>
                <TimelineTitle>{item.title}</TimelineTitle>
                <TimelineDescription>{item.description}</TimelineDescription>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineSection>
      
      <FAQSection>
        <SectionTitle>Frequently Asked Questions</SectionTitle>
        <SectionSubtitle>
          Find answers to common questions about our trading competitions
        </SectionSubtitle>
        
        <FAQContainer>
          {faqs.map((faq, index) => (
            <FAQItem key={index}>
              <FAQQuestion 
                isOpen={openFAQIndex === index}
                onClick={() => toggleQuestion(index)}
              >
                {faq.question}
              </FAQQuestion>
              <FAQAnswer isOpen={openFAQIndex === index}>
                {faq.answer}
              </FAQAnswer>
            </FAQItem>
          ))}
        </FAQContainer>
      </FAQSection>
      
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Prove Your Trading Skills?</CTATitle>
          <CTADescription>
            Join thousands of traders competing for funded accounts and showcase your trading expertise in the Indian F&O market
          </CTADescription>
          <CTAButton to="/signup">Register Now</CTAButton>
        </CTAContent>
      </CTASection>
    </CompetitionContainer>
  );
};

export default CompetitionPage;
