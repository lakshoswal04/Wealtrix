import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  padding: 5rem 0;
`;

const AboutSection = styled.section`
  margin-bottom: 5rem;
`;

const AboutHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const AboutTitle = styled.h1`
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const AboutSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const AboutCard = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const CardContent = styled.p`
  color: var(--text-secondary);
  line-height: 1.6;
`;

const TeamSection = styled.section`
  margin-top: 5rem;
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const MemberImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: var(--background-light);
  margin: 0 auto 1.5rem;
  overflow: hidden;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const MemberName = styled.h3`
  font-size: 1.3rem;
  color: var(--primary);
  margin-bottom: 0.5rem;
`;

const MemberPosition = styled.p`
  color: var(--text-secondary);
  font-style: italic;
`;

const AboutPage = () => {
  return (
    <AboutContainer className="container">
      <AboutHeader>
        <AboutTitle>About Wealtrix</AboutTitle>
        <AboutSubtitle>
          India's premier prop trading firm specializing in the F&O market, providing traders with the capital they need to succeed.
        </AboutSubtitle>
      </AboutHeader>
      
      <AboutSection>
        <h2>Our Mission</h2>
        <p>
          At Wealtrix, we are dedicated to democratizing access to trading capital in the Indian F&O market. 
          We believe that talented traders should have the opportunity to trade with substantial capital, 
          regardless of their personal financial situation. Our mission is to identify skilled traders through 
          our evaluation process and provide them with the resources they need to thrive in the markets.
        </p>
        
        <AboutGrid>
          <AboutCard>
            <CardTitle>Our Vision</CardTitle>
            <CardContent>
              To become India's leading prop trading firm by creating a community of elite traders who consistently 
              outperform the market using our capital, while maintaining the highest standards of risk management and compliance.
            </CardContent>
          </AboutCard>
          
          <AboutCard>
            <CardTitle>Our Values</CardTitle>
            <CardContent>
              We operate with transparency, integrity, and a commitment to excellence. We believe in fair evaluation, 
              merit-based advancement, and creating long-term partnerships with our traders.
            </CardContent>
          </AboutCard>
          
          <AboutCard>
            <CardTitle>Our Approach</CardTitle>
            <CardContent>
              We combine rigorous trader evaluation with sophisticated risk management systems, allowing us to 
              identify and support traders who demonstrate consistent profitability and disciplined trading habits.
            </CardContent>
          </AboutCard>
        </AboutGrid>
      </AboutSection>
      
      <AboutSection>
        <h2>Why Choose Wealtrix?</h2>
        <p>
          Wealtrix stands out in the Indian prop trading landscape for several key reasons:
        </p>
        
        <AboutGrid>
          <AboutCard>
            <CardTitle>Indian Market Focus</CardTitle>
            <CardContent>
              Unlike international firms, our challenges and capital allocation are specifically designed for 
              the unique characteristics of the Indian F&O market, including NSE and BSE derivatives.
            </CardContent>
          </AboutCard>
          
          <AboutCard>
            <CardTitle>Generous Profit Split</CardTitle>
            <CardContent>
              We offer up to 90% profit sharing, allowing our traders to keep the majority of their trading profits 
              while using our capital.
            </CardContent>
          </AboutCard>
          
          <AboutCard>
            <CardTitle>Scaling Opportunities</CardTitle>
            <CardContent>
              Successful traders can scale their accounts up to ₹1 Crore, providing significant earning potential 
              for those who demonstrate consistent performance.
            </CardContent>
          </AboutCard>
          
          <AboutCard>
            <CardTitle>Comprehensive Support</CardTitle>
            <CardContent>
              Our traders receive access to advanced trading tools, educational resources, and a community of 
              like-minded professionals to enhance their trading journey.
            </CardContent>
          </AboutCard>
        </AboutGrid>
      </AboutSection>
      
      <AboutSection>
        <h2>Competitions</h2>
        <p>
          At Wealtrix, we regularly host trading competitions to identify exceptional talent and foster a community of skilled traders.
          Our competitions provide an opportunity to showcase your trading skills and win exciting prizes, including funded accounts.
        </p>
        
        <AboutGrid>
          <AboutCard>
            <CardTitle>Monthly Trading Challenge</CardTitle>
            <CardContent>
              Participate in our monthly trading challenge with a simulated account. Top performers receive funded accounts
              and cash prizes. Entry is free for all registered Wealtrix users.
            </CardContent>
          </AboutCard>
          
          <AboutCard>
            <CardTitle>Quarterly Championship</CardTitle>
            <CardContent>
              Our flagship quarterly competition features larger prizes and higher account sizes for winners.
              The top three traders receive funded accounts ranging from ₹10 Lakhs to ₹50 Lakhs.
            </CardContent>
          </AboutCard>
          
          <AboutCard>
            <CardTitle>Rookie Trader Program</CardTitle>
            <CardContent>
              Designed specifically for new traders with less than one year of experience. Learn while you compete
              and get mentored by professional traders. Winners receive discounted challenge entries.
            </CardContent>
          </AboutCard>
        </AboutGrid>
      </AboutSection>
      
      <AboutSection>
        <h2>Trading Resources</h2>
        <p>
          We provide comprehensive resources to help our traders succeed in the challenging Indian F&O market.
          From educational content to advanced tools, we ensure our traders have everything they need.
        </p>
        
        <AboutGrid>
          <AboutCard>
            <CardTitle>Market Analysis</CardTitle>
            <CardContent>
              Daily and weekly market analysis by our expert team, covering major indices, stocks, and derivatives
              in the Indian market. Includes technical analysis, trend identification, and trading opportunities.
            </CardContent>
          </AboutCard>
          
          <AboutCard>
            <CardTitle>Educational Webinars</CardTitle>
            <CardContent>
              Regular webinars on trading strategies, risk management, and market psychology. Special sessions
              focused on the unique characteristics of Indian F&O markets and how to trade them profitably.
            </CardContent>
          </AboutCard>
          
          <AboutCard>
            <CardTitle>Trading Community</CardTitle>
            <CardContent>
              Join our active community of traders to share ideas, strategies, and insights. Participate in
              discussion forums, trading rooms, and networking events to grow your trading network.
            </CardContent>
          </AboutCard>
        </AboutGrid>
      </AboutSection>
    </AboutContainer>
  );
};

export default AboutPage;
