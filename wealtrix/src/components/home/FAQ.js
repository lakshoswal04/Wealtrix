import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import { FaPlus, FaMinus } from 'react-icons/fa';

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

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  
  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "What is a prop trading firm?",
      answer: "A proprietary (prop) trading firm like Wealtrix provides capital to skilled traders to trade financial markets. We fund traders to trade Indian Futures & Options markets with our capital. Traders keep a significant portion of the profits they generate without risking their own money."
    },
    {
      question: "How do I get funded by Wealtrix?",
      answer: "To get funded, you need to pass our trading challenge, which evaluates your trading skills and risk management. Choose between our One-Step or Two-Step Challenge, complete the required objectives, and upon successful completion, you'll receive a funded account to trade with our capital."
    },
    {
      question: "What markets can I trade with Wealtrix?",
      answer: "Wealtrix specializes in the Indian markets. You can trade Futures & Options (F&O) on Nifty, Bank Nifty, Fin Nifty, and other approved indices and stocks available for F&O trading on Indian exchanges."
    },
    {
      question: "What is the profit split?",
      answer: "Depending on your account size and challenge type, you can keep between 80% to 90% of the profits you generate. The exact profit split is clearly mentioned in each challenge package."
    },
    {
      question: "Do I need to pay for the challenge?",
      answer: "Yes, there is a one-time fee to take our trading challenge. This fee varies based on the account size and challenge type you choose. If you pass the challenge, you'll get access to a funded account with no additional costs."
    },
    {
      question: "What happens if I lose money?",
      answer: "You trade with our capital, so you don't lose your own money. However, if you violate the trading rules (like exceeding the maximum drawdown limit), your funded account may be terminated. You can always take another challenge to get funded again."
    },
    {
      question: "How quickly can I get funded?",
      answer: "With our One-Step Challenge, you can get funded as soon as you meet all the objectives, which could be as quick as 5 trading days. For those who choose Express Evaluation, the minimum trading day requirement is reduced, allowing for even faster funding."
    }
  ];
  
  return (
    <Section 
      title="Frequently Asked Questions" 
      subtitle="Get answers to common questions about Wealtrix and our funding program"
      bgColor="#f9f9f9"
      padding="5rem 0"
    >
      <FAQContainer>
        {faqItems.map((item, index) => (
          <FAQItem key={index}>
            <FAQQuestion 
              isOpen={openIndex === index}
              onClick={() => toggleQuestion(index)}
            >
              {item.question}
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </FAQQuestion>
            <FAQAnswer isOpen={openIndex === index}>
              {item.answer}
            </FAQAnswer>
          </FAQItem>
        ))}
      </FAQContainer>
    </Section>
  );
};

export default FAQ;
