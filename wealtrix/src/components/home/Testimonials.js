import React, { useState } from 'react';
import styled from 'styled-components';
import Section from '../common/Section';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const TestimonialsContainer = styled.div`
  position: relative;
  max-width: 900px;
  margin: 0 auto;
`;

const TestimonialSlide = styled.div`
  text-align: center;
  padding: 2rem;
`;

const QuoteIcon = styled.div`
  font-size: 3rem;
  color: var(--primary);
  opacity: 0.3;
  margin-bottom: 2rem;
`;

const TestimonialText = styled.p`
  font-size: 1.2rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-style: italic;
`;

const TestimonialAuthor = styled.div`
  margin-bottom: 1rem;
`;

const AuthorName = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const AuthorTitle = styled.p`
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const StarRating = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  color: #FFD700;
`;

const TestimonialImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin: 0 auto 1rem;
  border: 3px solid var(--primary);
`;

const SlideControls = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
`;

const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--background);
  border: 1px solid var(--primary);
  color: var(--primary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: var(--primary);
    color: var(--text-light);
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const SlideIndicators = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 1.5rem;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${({ active }) => active ? 'var(--primary)' : 'rgba(255, 107, 53, 0.3)'};
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => active ? 'var(--primary)' : 'rgba(255, 107, 53, 0.5)'};
  }
`;

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      text: "Wealtrix has completely transformed my trading career. With their funding, I've been able to scale my strategies and generate consistent profits without risking my own capital. The platform is intuitive, and their support team is always ready to help.",
      author: "Rajesh Sharma",
      title: "F&O Trader, Mumbai",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      text: "As a full-time trader, I was looking for a way to increase my capital without taking on excessive risk. Wealtrix's challenge was fair and realistic for the Indian markets. I passed in just 8 days and now trade a ₹10 lakh account with an 85% profit split!",
      author: "Priya Patel",
      title: "Options Trader, Bangalore",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      text: "The Wealtrix team understands the unique challenges of trading Indian F&O markets. Their rules are designed to promote disciplined trading while still allowing for profitable opportunities. I've recommended their program to all my trading friends.",
      author: "Vikram Singh",
      title: "Professional Trader, Delhi",
      rating: 4,
      image: "https://randomuser.me/api/portraits/men/67.jpg"
    }
  ];
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  
  return (
    <Section 
      title="Trader Success Stories" 
      subtitle="Hear from our funded traders who have successfully passed our challenges and now trade with our capital"
      padding="5rem 0"
    >
      <TestimonialsContainer>
        <TestimonialSlide>
          <QuoteIcon>
            <FaQuoteLeft />
          </QuoteIcon>
          <TestimonialText>
            {testimonials[currentSlide].text}
          </TestimonialText>
          <TestimonialImage 
            src={testimonials[currentSlide].image} 
            alt={testimonials[currentSlide].author} 
          />
          <TestimonialAuthor>
            <AuthorName>{testimonials[currentSlide].author}</AuthorName>
            <AuthorTitle>{testimonials[currentSlide].title}</AuthorTitle>
          </TestimonialAuthor>
          <StarRating>
            {[...Array(5)].map((_, i) => (
              <FaStar 
                key={i} 
                color={i < testimonials[currentSlide].rating ? '#FFD700' : '#e4e5e9'} 
              />
            ))}
          </StarRating>
          
          <SlideControls>
            <ControlButton onClick={prevSlide}>
              <FaChevronLeft />
            </ControlButton>
            <ControlButton onClick={nextSlide}>
              <FaChevronRight />
            </ControlButton>
          </SlideControls>
          
          <SlideIndicators>
            {testimonials.map((_, index) => (
              <Indicator 
                key={index} 
                active={currentSlide === index} 
                onClick={() => setCurrentSlide(index)} 
              />
            ))}
          </SlideIndicators>
        </TestimonialSlide>
      </TestimonialsContainer>
    </Section>
  );
};

export default Testimonials;
