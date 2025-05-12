import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBook, FaChartLine, FaVideo, FaFileAlt, FaCalendarAlt, FaDownload, FaSearch, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ResourcesContainer = styled.div`
  padding: 5rem 0;
`;

const ResourcesHeader = styled.div`
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
    background-image: url('/resources-bg.jpg');
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

const ResourcesTitle = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 1rem;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ResourcesSubtitle = styled.p`
  font-size: 1.3rem;
  max-width: 800px;
  margin: 0 auto 2rem;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const SearchContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  position: relative;
`;

const SearchInput = styled.input`
  width: 100%;
  padding: 1rem 1.5rem 1rem 3.5rem;
  border-radius: var(--border-radius-md);
  border: none;
  font-size: 1.1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  
  &:focus {
    outline: none;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.15);
  }
`;

const SearchIcon = styled.div`
  position: absolute;
  left: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--primary);
  font-size: 1.2rem;
`;

const ResourcesTabs = styled.div`
  display: flex;
  justify-content: center;
  margin: 4rem 0 3rem;
  flex-wrap: wrap;
  gap: 1rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ResourceTab = styled.button`
  padding: 0.8rem 1.5rem;
  background-color: ${({ active }) => active ? 'var(--primary)' : 'transparent'};
  color: ${({ active }) => active ? 'white' : 'var(--text-primary)'};
  border: 2px solid var(--primary);
  border-radius: var(--border-radius-md);
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => active ? 'var(--primary)' : 'rgba(var(--primary-rgb), 0.1)'};
  }
`;

const ResourcesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
`;

const ResourceCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-lg);
  }
`;

const CardImage = styled.div`
  height: 200px;
  background-color: #f5f5f5;
  background-image: ${({ image }) => image ? `url(${image})` : 'none'};
  background-size: cover;
  background-position: center;
  position: relative;
`;

const CardCategory = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: var(--primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: var(--border-radius-md);
  font-size: 0.8rem;
  font-weight: 600;
`;

const CardContent = styled.div`
  padding: 1.5rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
  
  a {
    color: var(--text-primary);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--primary);
    }
  }
`;

const CardDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const CardMeta = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-secondary);
  font-size: 0.9rem;
`;

const CardDate = styled.span``;

const CardType = styled.span`
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 0.5rem;
  }
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

const WebinarSection = styled.div`
  margin: 5rem 0;
`;

const WebinarCard = styled.div`
  display: flex;
  background-color: white;
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-md);
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const WebinarImage = styled.div`
  flex: 0 0 300px;
  background-color: #f5f5f5;
  background-image: ${({ image }) => image ? `url(${image})` : 'none'};
  background-size: cover;
  background-position: center;
  
  @media (max-width: 768px) {
    height: 200px;
  }
`;

const WebinarContent = styled.div`
  flex: 1;
  padding: 2rem;
`;

const WebinarTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const WebinarDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
  line-height: 1.6;
`;

const WebinarMeta = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

const WebinarMetaItem = styled.div`
  display: flex;
  align-items: center;
  color: var(--text-secondary);
  
  svg {
    margin-right: 0.5rem;
    color: var(--primary);
  }
`;

const WebinarButton = styled(Link)`
  display: inline-block;
  background-color: var(--primary);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const DownloadSection = styled.div`
  margin: 5rem 0;
  background-color: var(--background-light);
  padding: 4rem 2rem;
  border-radius: var(--border-radius-lg);
`;

const DownloadGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
`;

const DownloadCard = styled.div`
  background-color: white;
  border-radius: var(--border-radius-md);
  padding: 2rem;
  text-align: center;
  box-shadow: var(--shadow-sm);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-md);
  }
`;

const DownloadIcon = styled.div`
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

const DownloadTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.5rem;
`;

const DownloadDescription = styled.p`
  color: var(--text-secondary);
  margin-bottom: 1.5rem;
`;

const DownloadButton = styled.a`
  display: inline-block;
  background-color: var(--primary);
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: var(--border-radius-md);
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background-color: var(--secondary);
    transform: translateY(-3px);
  }
`;

const ResourcesPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  const articles = [
    {
      id: 1,
      title: "Understanding Options Strategies for Indian Markets",
      description: "Learn the most effective options strategies tailored specifically for the Indian F&O market.",
      category: "Options Trading",
      date: "May 10, 2025",
      type: "Article",
      image: "/article1.jpg"
    },
    {
      id: 2,
      title: "Technical Analysis Fundamentals for NSE Stocks",
      description: "Master the basics of technical analysis to identify profitable trading opportunities in NSE stocks.",
      category: "Technical Analysis",
      date: "May 5, 2025",
      type: "Article",
      image: "/article2.jpg"
    },
    {
      id: 3,
      title: "Risk Management Techniques for Day Traders",
      description: "Essential risk management strategies to protect your capital and maximize profits in day trading.",
      category: "Risk Management",
      date: "April 28, 2025",
      type: "Article",
      image: "/article3.jpg"
    },
    {
      id: 4,
      title: "Understanding Market Microstructure in Indian Exchanges",
      description: "Deep dive into how Indian exchanges operate and how to leverage market microstructure for better trades.",
      category: "Market Structure",
      date: "April 22, 2025",
      type: "Article",
      image: "/article4.jpg"
    },
    {
      id: 5,
      title: "Algorithmic Trading Basics for Retail Traders",
      description: "Introduction to algorithmic trading concepts that retail traders can implement in the Indian market.",
      category: "Algorithmic Trading",
      date: "April 15, 2025",
      type: "Article",
      image: "/article5.jpg"
    },
    {
      id: 6,
      title: "Trading Psychology: Overcoming Emotional Biases",
      description: "Learn how to master your emotions and develop a disciplined trading mindset for consistent profits.",
      category: "Psychology",
      date: "April 8, 2025",
      type: "Article",
      image: "/article6.jpg"
    }
  ];
  
  const videos = [
    {
      id: 7,
      title: "Nifty Options Trading Masterclass",
      description: "Comprehensive guide to trading Nifty options profitably with practical examples and case studies.",
      category: "Options Trading",
      date: "May 8, 2025",
      type: "Video",
      image: "/video1.jpg"
    },
    {
      id: 8,
      title: "Advanced Chart Patterns for Indian Markets",
      description: "Learn to identify and trade complex chart patterns that work specifically in the Indian market context.",
      category: "Technical Analysis",
      date: "May 1, 2025",
      type: "Video",
      image: "/video2.jpg"
    },
    {
      id: 9,
      title: "Intraday Trading Strategies for Bank Nifty",
      description: "Specialized intraday trading techniques for Bank Nifty futures and options with real trade examples.",
      category: "Intraday Trading",
      date: "April 24, 2025",
      type: "Video",
      image: "/video3.jpg"
    }
  ];
  
  const ebooks = [
    {
      id: 10,
      title: "The Complete Guide to F&O Trading in India",
      description: "Comprehensive ebook covering all aspects of futures and options trading in the Indian market.",
      category: "F&O Trading",
      date: "April 30, 2025",
      type: "E-Book",
      image: "/ebook1.jpg"
    },
    {
      id: 11,
      title: "Mastering Candlestick Patterns",
      description: "Detailed guide to identifying and trading with Japanese candlestick patterns in Indian markets.",
      category: "Technical Analysis",
      date: "April 20, 2025",
      type: "E-Book",
      image: "/ebook2.jpg"
    }
  ];
  
  const webinars = [
    {
      id: 12,
      title: "Options Greeks Masterclass",
      description: "Deep dive into options Greeks and how to use them for better trading decisions in the Indian F&O market. This webinar covers Delta, Gamma, Theta, Vega, and Rho with practical examples.",
      date: "May 15, 2025",
      time: "6:00 PM IST",
      presenter: "Rajiv Sharma, Head of Options Trading",
      image: "/webinar1.jpg"
    },
    {
      id: 13,
      title: "Market Profile Trading Strategies",
      description: "Learn how to use Market Profile to identify value areas, balance areas, and high-probability trading opportunities in Indian equity and index markets.",
      date: "May 22, 2025",
      time: "7:00 PM IST",
      presenter: "Priya Patel, Senior Market Analyst",
      image: "/webinar2.jpg"
    },
    {
      id: 14,
      title: "Algorithmic Trading for Retail Traders",
      description: "Practical guide to implementing algorithmic trading strategies as a retail trader in India, covering tools, platforms, and regulatory considerations.",
      date: "May 29, 2025",
      time: "6:30 PM IST",
      presenter: "Vikram Mehta, Algo Trading Specialist",
      image: "/webinar3.jpg"
    }
  ];
  
  const downloads = [
    {
      id: 15,
      title: "Options Strategy Calculator",
      description: "Excel-based tool for calculating risk, reward, and break-even points for various options strategies.",
      icon: <FaFileAlt />
    },
    {
      id: 16,
      title: "Trading Journal Template",
      description: "Structured template to track and analyze your trades for continuous improvement.",
      icon: <FaBook />
    },
    {
      id: 17,
      title: "Risk Management Calculator",
      description: "Tool to calculate position sizing and risk parameters based on your account size and risk tolerance.",
      icon: <FaChartLine />
    },
    {
      id: 18,
      title: "Indian Market Trading Calendar 2025",
      description: "Comprehensive calendar with market holidays, expiry dates, and important economic events.",
      icon: <FaCalendarAlt />
    }
  ];
  
  // Combine all resources
  const allResources = [...articles, ...videos, ...ebooks];
  
  // Filter resources based on active tab and search term
  const filteredResources = allResources.filter(resource => {
    const matchesTab = activeTab === 'all' || 
                       (activeTab === 'articles' && resource.type === 'Article') ||
                       (activeTab === 'videos' && resource.type === 'Video') ||
                       (activeTab === 'ebooks' && resource.type === 'E-Book');
                       
    const matchesSearch = searchTerm === '' || 
                         resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.category.toLowerCase().includes(searchTerm.toLowerCase());
                         
    return matchesTab && matchesSearch;
  });
  
  return (
    <ResourcesContainer className="container">
      <ResourcesHeader>
        <HeaderContent>
          <ResourcesTitle>Trading Resources</ResourcesTitle>
          <ResourcesSubtitle>
            Access our comprehensive library of trading resources designed specifically for the Indian F&O market
          </ResourcesSubtitle>
          <SearchContainer>
            <SearchIcon>
              <FaSearch />
            </SearchIcon>
            <SearchInput 
              type="text" 
              placeholder="Search for articles, videos, ebooks..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </SearchContainer>
        </HeaderContent>
      </ResourcesHeader>
      
      <ResourcesTabs>
        <ResourceTab 
          active={activeTab === 'all'} 
          onClick={() => setActiveTab('all')}
        >
          All Resources
        </ResourceTab>
        <ResourceTab 
          active={activeTab === 'articles'} 
          onClick={() => setActiveTab('articles')}
        >
          Articles
        </ResourceTab>
        <ResourceTab 
          active={activeTab === 'videos'} 
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </ResourceTab>
        <ResourceTab 
          active={activeTab === 'ebooks'} 
          onClick={() => setActiveTab('ebooks')}
        >
          E-Books
        </ResourceTab>
      </ResourcesTabs>
      
      {filteredResources.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '3rem 0' }}>
          <h3>No resources found matching your criteria</h3>
          <p>Try adjusting your search or filter settings</p>
        </div>
      ) : (
        <ResourcesGrid>
          {filteredResources.map(resource => (
            <ResourceCard key={resource.id}>
              <CardImage image={resource.image}>
                <CardCategory>{resource.category}</CardCategory>
              </CardImage>
              <CardContent>
                <CardTitle>
                  <Link to={`/resources/${resource.id}`}>{resource.title}</Link>
                </CardTitle>
                <CardDescription>{resource.description}</CardDescription>
                <CardMeta>
                  <CardDate>{resource.date}</CardDate>
                  <CardType>
                    {resource.type === 'Article' && <FaFileAlt />}
                    {resource.type === 'Video' && <FaVideo />}
                    {resource.type === 'E-Book' && <FaBook />}
                    {resource.type}
                  </CardType>
                </CardMeta>
              </CardContent>
            </ResourceCard>
          ))}
        </ResourcesGrid>
      )}
      
      <WebinarSection>
        <SectionTitle>Upcoming Webinars</SectionTitle>
        <SectionSubtitle>
          Join our live webinars conducted by industry experts and enhance your trading knowledge
        </SectionSubtitle>
        
        {webinars.map(webinar => (
          <WebinarCard key={webinar.id}>
            <WebinarImage image={webinar.image} />
            <WebinarContent>
              <WebinarTitle>{webinar.title}</WebinarTitle>
              <WebinarDescription>{webinar.description}</WebinarDescription>
              <WebinarMeta>
                <WebinarMetaItem>
                  <FaCalendarAlt />
                  {webinar.date}
                </WebinarMetaItem>
                <WebinarMetaItem>
                  <FaVideo />
                  {webinar.time}
                </WebinarMetaItem>
                <WebinarMetaItem>
                  <FaUser />
                  {webinar.presenter}
                </WebinarMetaItem>
              </WebinarMeta>
              <WebinarButton to="/signup">Register Now</WebinarButton>
            </WebinarContent>
          </WebinarCard>
        ))}
      </WebinarSection>
      
      <DownloadSection>
        <SectionTitle>Free Trading Tools</SectionTitle>
        <SectionSubtitle>
          Download our free trading tools and resources to enhance your trading performance
        </SectionSubtitle>
        
        <DownloadGrid>
          {downloads.map(download => (
            <DownloadCard key={download.id}>
              <DownloadIcon>
                {download.icon}
              </DownloadIcon>
              <DownloadTitle>{download.title}</DownloadTitle>
              <DownloadDescription>{download.description}</DownloadDescription>
              <DownloadButton href="#download">
                <FaDownload style={{ marginRight: '0.5rem' }} />
                Download
              </DownloadButton>
            </DownloadCard>
          ))}
        </DownloadGrid>
      </DownloadSection>
    </ResourcesContainer>
  );
};

export default ResourcesPage;
