import React, { useState } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQContainer = styled.div`
  padding: 5rem 0;
`;

const FAQHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const FAQTitle = styled.h1`
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const FAQSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`;

const FAQCategories = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const CategoryButton = styled.button`
  background-color: ${({ active }) => (active ? 'var(--primary)' : 'var(--background-light)')};
  color: ${({ active }) => (active ? 'white' : 'var(--text-primary)')};
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => (active ? 'var(--primary)' : 'var(--background-hover)')};
  }
`;

const FAQList = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const FAQItem = styled.div`
  margin-bottom: 1rem;
  border-radius: var(--border-radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

const FAQQuestion = styled.div`
  background-color: var(--background-light);
  padding: 1.2rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--background-hover);
  }
  
  h3 {
    font-size: 1.1rem;
    margin: 0;
    color: var(--text-primary);
  }
`;

const FAQAnswer = styled.div`
  background-color: white;
  padding: ${({ isOpen }) => (isOpen ? '1.5rem' : '0 1.5rem')};
  max-height: ${({ isOpen }) => (isOpen ? '500px' : '0')};
  overflow: hidden;
  transition: all 0.3s ease;
  
  p {
    margin: 0;
    color: var(--text-secondary);
    line-height: 1.6;
  }
`;

const ContactSection = styled.div`
  text-align: center;
  margin-top: 4rem;
  padding: 2rem;
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
`;

const ContactButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: white;
  padding: 0.8rem 2rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  margin-top: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const FAQPage = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openItems, setOpenItems] = useState({});
  
  const toggleItem = (id) => {
    setOpenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };
  
  const categories = [
    { id: 'general', name: 'General' },
    { id: 'challenge', name: 'Challenge Rules' },
    { id: 'account', name: 'Funded Account' },
    { id: 'payment', name: 'Payments' },
    { id: 'technical', name: 'Technical' }
  ];
  
  const faqData = {
    general: [
      {
        id: 'general-1',
        question: 'What is Wealtrix?',
        answer: 'Wealtrix is a proprietary trading firm that provides capital to skilled traders in the Indian F&O market. We identify talented traders through our evaluation process and fund successful candidates with our capital, allowing them to earn up to 90% of the profits they generate.'
      },
      {
        id: 'general-2',
        question: 'How does the Wealtrix model work?',
        answer: 'Our model consists of a two-phase evaluation process. Traders must demonstrate consistent profitability while adhering to our risk management rules. Upon successful completion, traders receive a funded account with our capital to trade the Indian F&O market.'
      },
      {
        id: 'general-3',
        question: 'Who can apply for a Wealtrix challenge?',
        answer: 'Any trader with experience in the Indian F&O market can apply. We welcome traders of all experience levels, from beginners to professionals. You must be at least 18 years old and comply with all applicable laws and regulations.'
      },
      {
        id: 'general-4',
        question: 'What markets can I trade with Wealtrix?',
        answer: 'With Wealtrix, you can trade futures and options on the National Stock Exchange (NSE) and Bombay Stock Exchange (BSE). This includes equity derivatives, index derivatives, and currency derivatives available on these exchanges.'
      }
    ],
    challenge: [
      {
        id: 'challenge-1',
        question: 'What are the rules of the Wealtrix challenge?',
        answer: 'The Wealtrix challenge has specific rules including profit targets, maximum drawdown limits, and daily loss limits. For the standard challenge, you need to achieve a 10% profit target while maintaining a maximum drawdown of 8% and a daily drawdown limit of 4%. The exact rules vary by account size and challenge type.'
      },
      {
        id: 'challenge-2',
        question: 'How long do I have to complete each phase of the challenge?',
        answer: 'For the standard challenge, you have 30 days to complete each phase. For the express challenge, you have 15 days to complete the single phase. There is no minimum trading day requirement, so you can complete the challenge as quickly as your trading performance allows.'
      },
      {
        id: 'challenge-3',
        question: 'What happens if I break a rule during the challenge?',
        answer: 'If you violate any of the trading rules (such as exceeding the maximum drawdown or daily loss limit), your challenge will be automatically terminated. You would need to purchase a new challenge to try again.'
      },
      {
        id: 'challenge-4',
        question: 'Can I trade during market holidays?',
        answer: 'No, trading is only available during the official market hours of the NSE and BSE. The challenge calendar follows the official exchange holiday schedule.'
      }
    ],
    account: [
      {
        id: 'account-1',
        question: 'How quickly will I receive my funded account after passing the challenge?',
        answer: 'Once you successfully complete all phases of the challenge, we will review your trading performance within 1-3 business days. After approval, your funded account will be set up within 24-48 hours.'
      },
      {
        id: 'account-2',
        question: 'What is the profit split on funded accounts?',
        answer: 'We offer competitive profit splits ranging from 80% to 90%, depending on your account size and plan. The profit split is clearly indicated in each plan before you purchase.'
      },
      {
        id: 'account-3',
        question: 'How often can I withdraw profits from my funded account?',
        answer: 'Profit withdrawals are processed on a monthly basis. You can request a withdrawal of your profit share at the end of each month, provided you have generated profits and maintained compliance with all trading rules.'
      },
      {
        id: 'account-4',
        question: 'Can my funded account size be increased over time?',
        answer: 'Yes, we offer a scaling plan for successful traders. After demonstrating consistent profitability, you may qualify for account size increases, potentially scaling up to ₹1 Crore based on performance.'
      }
    ],
    payment: [
      {
        id: 'payment-1',
        question: 'What payment methods do you accept?',
        answer: 'We accept various payment methods including credit/debit cards, UPI, net banking, and popular wallets. All payments are processed securely through our payment gateway.'
      },
      {
        id: 'payment-2',
        question: 'How are profits paid out to traders?',
        answer: 'Profits are paid directly to your registered bank account via NEFT/RTGS/IMPS. We process all withdrawal requests within 5-7 business days after the end of each month.'
      },
      {
        id: 'payment-3',
        question: 'Are there any taxes on my profits?',
        answer: 'Wealtrix pays you your share of the profits as per the agreed profit split. You are responsible for reporting and paying any applicable taxes on your income as per Indian tax laws. We recommend consulting with a tax professional regarding your specific situation.'
      },
      {
        id: 'payment-4',
        question: 'What happens if I request a refund?',
        answer: 'We offer a 3-day refund policy for challenges that have not been started. Once you begin trading or after 3 days from purchase (whichever comes first), the challenge fee is non-refundable.'
      }
    ],
    technical: [
      {
        id: 'technical-1',
        question: 'What trading platforms can I use?',
        answer: 'You can use any trading platform that is compatible with our supported brokers. This includes popular platforms like Zerodha Kite, Upstox Pro, Angel One, and more. We provide detailed setup instructions for each supported platform.'
      },
      {
        id: 'technical-2',
        question: 'How do you track my trading performance?',
        answer: 'We use a secure API connection to your trading account to monitor your performance in real-time. This allows us to track your profits, losses, and compliance with trading rules automatically.'
      },
      {
        id: 'technical-3',
        question: 'Can I trade using mobile devices?',
        answer: 'Yes, you can trade using mobile applications provided by our supported brokers. However, we recommend using desktop platforms for more comprehensive analysis and order management.'
      },
      {
        id: 'technical-4',
        question: 'What happens if there are technical issues during my challenge?',
        answer: 'If you experience technical issues that are verifiably caused by our systems or supported brokers (not due to your internet connection or hardware), please contact our support team immediately. We will investigate and may provide appropriate adjustments or extensions to your challenge period.'
      }
    ]
  };
  
  return (
    <FAQContainer className="container">
      <FAQHeader>
        <FAQTitle>Frequently Asked Questions</FAQTitle>
        <FAQSubtitle>
          Find answers to common questions about Wealtrix, our challenges, and funded accounts
        </FAQSubtitle>
      </FAQHeader>
      
      <FAQCategories>
        {categories.map(category => (
          <CategoryButton 
            key={category.id}
            active={activeCategory === category.id}
            onClick={() => setActiveCategory(category.id)}
          >
            {category.name}
          </CategoryButton>
        ))}
      </FAQCategories>
      
      <FAQList>
        {faqData[activeCategory].map(item => (
          <FAQItem key={item.id}>
            <FAQQuestion onClick={() => toggleItem(item.id)}>
              <h3>{item.question}</h3>
              {openItems[item.id] ? <FaChevronUp /> : <FaChevronDown />}
            </FAQQuestion>
            <FAQAnswer isOpen={openItems[item.id]}>
              <p>{item.answer}</p>
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQList>
      
      <ContactSection>
        <h2>Still have questions?</h2>
        <p>Our support team is here to help you with any questions you may have about Wealtrix</p>
        <ContactButton href="mailto:support@wealtrix.com">Contact Support</ContactButton>
      </ContactSection>
    </FAQContainer>
  );
};

export default FAQPage;
