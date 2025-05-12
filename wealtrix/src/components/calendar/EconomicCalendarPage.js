import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { FaCalendarAlt, FaFilter, FaSearch, FaStar, FaRegStar, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const CalendarContainer = styled.div`
  padding: 5rem 0;
`;

const CalendarHeader = styled.div`
  text-align: center;
  margin-bottom: 3rem;
`;

const CalendarTitle = styled.h1`
  font-size: 3rem;
  color: var(--primary);
  margin-bottom: 1rem;
`;

const CalendarSubtitle = styled.p`
  font-size: 1.2rem;
  color: var(--text-secondary);
  max-width: 700px;
  margin: 0 auto;
`;

const ControlsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const DateControl = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 250px;
  background-color: var(--background-light);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 1rem;
  
  svg {
    margin-right: 0.5rem;
    color: var(--primary);
  }
  
  select {
    flex: 1;
    border: none;
    background: transparent;
    padding: 0.5rem;
    font-size: 1rem;
    color: var(--text-primary);
    cursor: pointer;
    
    &:focus {
      outline: none;
    }
  }
`;

const FilterControl = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 250px;
  background-color: var(--background-light);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 1rem;
  
  svg {
    margin-right: 0.5rem;
    color: var(--primary);
  }
  
  select {
    flex: 1;
    border: none;
    background: transparent;
    padding: 0.5rem;
    font-size: 1rem;
    color: var(--text-primary);
    cursor: pointer;
    
    &:focus {
      outline: none;
    }
  }
`;

const SearchControl = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  min-width: 250px;
  background-color: var(--background-light);
  border-radius: var(--border-radius-md);
  padding: 0.5rem 1rem;
  
  svg {
    margin-right: 0.5rem;
    color: var(--primary);
  }
  
  input {
    flex: 1;
    border: none;
    background: transparent;
    padding: 0.5rem;
    font-size: 1rem;
    color: var(--text-primary);
    
    &:focus {
      outline: none;
    }
  }
`;

const CalendarTable = styled.div`
  background-color: var(--background-light);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
`;

const CalendarTableHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 120px 120px 120px;
  background-color: var(--primary);
  color: white;
  font-weight: 600;
  padding: 1rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const HeaderCell = styled.div`
  padding: 0 0.5rem;
`;

const CalendarItem = styled.div`
  border-bottom: 1px solid var(--border-color);
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    padding: 1rem;
    border-bottom: 1px solid var(--border-color);
  }
`;

const ItemHeader = styled.div`
  display: grid;
  grid-template-columns: 120px 1fr 120px 120px 120px;
  padding: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: rgba(var(--primary-rgb), 0.05);
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr auto;
    grid-template-rows: repeat(2, auto);
    gap: 0.5rem;
  }
`;

const TimeCell = styled.div`
  color: var(--text-secondary);
  font-weight: 500;
  
  @media (max-width: 768px) {
    grid-column: 1;
    grid-row: 1;
  }
`;

const EventCell = styled.div`
  font-weight: 600;
  
  @media (max-width: 768px) {
    grid-column: 1 / -1;
    grid-row: 2;
  }
`;

const CountryCell = styled.div`
  display: flex;
  align-items: center;
  
  img {
    width: 24px;
    height: 16px;
    margin-right: 0.5rem;
  }
  
  @media (max-width: 768px) {
    grid-column: 2;
    grid-row: 1;
  }
`;

const ImpactCell = styled.div`
  display: flex;
  align-items: center;
  
  .impact {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin-right: 0.25rem;
    background-color: ${({ impact }) => {
      switch (impact) {
        case 'high':
          return 'var(--error)';
        case 'medium':
          return 'var(--warning)';
        default:
          return 'var(--success)';
      }
    }};
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const FavoriteCell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  svg {
    cursor: pointer;
    color: ${({ favorite }) => favorite ? 'var(--warning)' : 'var(--text-secondary)'};
    transition: color 0.3s ease;
    
    &:hover {
      color: ${({ favorite }) => favorite ? 'var(--warning)' : 'var(--primary)'};
    }
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const ItemDetails = styled.div`
  padding: 0;
  max-height: ${({ isOpen }) => isOpen ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  background-color: rgba(var(--primary-rgb), 0.03);
`;

const DetailContent = styled.div`
  padding: 1.5rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const DetailItem = styled.div``;

const DetailTitle = styled.h4`
  font-size: 1rem;
  color: var(--text-secondary);
  margin-bottom: 0.5rem;
`;

const DetailValue = styled.div`
  font-size: 1.1rem;
  font-weight: 500;
`;

const CalendarPagination = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
`;

const PaginationButton = styled.button`
  background-color: ${({ active }) => active ? 'var(--primary)' : 'var(--background-light)'};
  color: ${({ active }) => active ? 'white' : 'var(--text-primary)'};
  border: none;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-md);
  margin: 0 0.25rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: ${({ active }) => active ? 'var(--primary)' : 'rgba(var(--primary-rgb), 0.1)'};
  }
  
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

const EconomicCalendarPage = () => {
  const [dateRange, setDateRange] = useState('today');
  const [country, setCountry] = useState('all');
  const [impact, setImpact] = useState('all');
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [openItem, setOpenItem] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const eventsPerPage = 5;
  
  useEffect(() => {
    // In a real application, this would be an API call to fetch economic events
    // For this demo, we'll use mock data
    const mockEvents = [
      {
        id: 1,
        time: '09:00',
        event: 'RBI Interest Rate Decision',
        country: 'India',
        impact: 'high',
        actual: '4.00%',
        forecast: '4.00%',
        previous: '4.00%',
        description: 'The Reserve Bank of India (RBI) announces its decision on interest rates and other monetary policy measures.'
      },
      {
        id: 2,
        time: '10:30',
        event: 'GDP Growth Rate QoQ',
        country: 'India',
        impact: 'high',
        actual: '1.8%',
        forecast: '1.6%',
        previous: '1.5%',
        description: 'The Gross Domestic Product (GDP) growth rate measures the annualized change in the inflation-adjusted value of all goods and services produced by the economy.'
      },
      {
        id: 3,
        time: '12:00',
        event: 'Manufacturing PMI',
        country: 'India',
        impact: 'medium',
        actual: '54.2',
        forecast: '53.5',
        previous: '52.8',
        description: 'The Manufacturing Purchasing Managers Index (PMI) measures the activity level of purchasing managers in the manufacturing sector.'
      },
      {
        id: 4,
        time: '14:00',
        event: 'Inflation Rate YoY',
        country: 'India',
        impact: 'high',
        actual: '5.2%',
        forecast: '5.4%',
        previous: '5.6%',
        description: 'The inflation rate measures the annual change in the Consumer Price Index (CPI).'
      },
      {
        id: 5,
        time: '15:30',
        event: 'Foreign Exchange Reserves',
        country: 'India',
        impact: 'medium',
        actual: '$642.5B',
        forecast: '$640.0B',
        previous: '$638.7B',
        description: 'Foreign Exchange Reserves are the foreign assets held by the central bank and monetary authorities.'
      },
      {
        id: 6,
        time: '16:45',
        event: 'Services PMI',
        country: 'India',
        impact: 'medium',
        actual: '56.8',
        forecast: '55.5',
        previous: '55.2',
        description: 'The Services Purchasing Managers Index (PMI) measures the activity level of purchasing managers in the services sector.'
      },
      {
        id: 7,
        time: '09:30',
        event: 'Trade Balance',
        country: 'India',
        impact: 'low',
        actual: '-$15.2B',
        forecast: '-$16.0B',
        previous: '-$16.8B',
        description: 'The Trade Balance measures the difference in value between exported and imported goods and services.'
      },
      {
        id: 8,
        time: '11:00',
        event: 'Industrial Production YoY',
        country: 'India',
        impact: 'medium',
        actual: '4.2%',
        forecast: '3.8%',
        previous: '3.5%',
        description: 'The Industrial Production measures the change in the total inflation-adjusted value of output produced by manufacturers, mines, and utilities.'
      },
      {
        id: 9,
        time: '13:30',
        event: 'Unemployment Rate',
        country: 'USA',
        impact: 'high',
        actual: '3.6%',
        forecast: '3.7%',
        previous: '3.8%',
        description: 'The Unemployment Rate measures the percentage of the total work force that is unemployed and actively seeking employment during the previous month.'
      },
      {
        id: 10,
        time: '14:45',
        event: 'Non-Farm Payrolls',
        country: 'USA',
        impact: 'high',
        actual: '235K',
        forecast: '220K',
        previous: '210K',
        description: 'The Non-Farm Payrolls measures the change in the number of people employed during the previous month, excluding the farming industry.'
      },
      {
        id: 11,
        time: '10:00',
        event: 'GDP Growth Rate QoQ',
        country: 'Eurozone',
        impact: 'high',
        actual: '0.3%',
        forecast: '0.2%',
        previous: '0.1%',
        description: 'The Gross Domestic Product (GDP) measures the annualized change in the inflation-adjusted value of all goods and services produced by the economy.'
      },
      {
        id: 12,
        time: '12:30',
        event: 'Inflation Rate YoY',
        country: 'Eurozone',
        impact: 'medium',
        actual: '2.1%',
        forecast: '2.2%',
        previous: '2.3%',
        description: 'The Inflation Rate measures the percentage change in the average price level of a basket of selected goods over the same period of the previous year.'
      },
      {
        id: 13,
        time: '10:30',
        event: 'Bank of England Interest Rate Decision',
        country: 'UK',
        impact: 'high',
        actual: '5.25%',
        forecast: '5.25%',
        previous: '5.00%',
        description: 'The Bank of England (BoE) announces its decision on interest rates and other monetary policy measures.'
      },
      {
        id: 14,
        time: '08:30',
        event: 'Bank of Japan Interest Rate Decision',
        country: 'Japan',
        impact: 'high',
        actual: '0.10%',
        forecast: '0.10%',
        previous: '0.00%',
        description: 'The Bank of Japan (BoJ) announces its decision on interest rates and other monetary policy measures.'
      },
      {
        id: 15,
        time: '09:45',
        event: 'Manufacturing PMI',
        country: 'China',
        impact: 'medium',
        actual: '50.2',
        forecast: '49.8',
        previous: '49.5',
        description: 'The Manufacturing Purchasing Managers Index (PMI) measures the activity level of purchasing managers in the manufacturing sector.'
      }
    ];
    
    setEvents(mockEvents);
    setFilteredEvents(mockEvents);
    setLoading(false);
  }, []);
  
  // Filter events based on user selections
  useEffect(() => {
    if (!events.length) return;
    
    let filtered = [...events];
    
    // Filter by country
    if (country !== 'all') {
      filtered = filtered.filter(event => event.country.toLowerCase() === country.toLowerCase());
    }
    
    // Filter by impact
    if (impact !== 'all') {
      filtered = filtered.filter(event => event.impact === impact);
    }
    
    // Filter by search term
    if (search) {
      const searchLower = search.toLowerCase();
      filtered = filtered.filter(event => 
        event.event.toLowerCase().includes(searchLower) || 
        event.country.toLowerCase().includes(searchLower)
      );
    }
    
    // Sort by time
    filtered.sort((a, b) => {
      const timeA = a.time.split(':').map(Number);
      const timeB = b.time.split(':').map(Number);
      
      if (timeA[0] !== timeB[0]) {
        return timeA[0] - timeB[0];
      }
      return timeA[1] - timeB[1];
    });
    
    setFilteredEvents(filtered);
    // Reset to first page when filters change
    setCurrentPage(1);
  }, [events, country, impact, search]);
  
  // Get current events for pagination
  const indexOfLastEvent = currentPage * eventsPerPage;
  const indexOfFirstEvent = indexOfLastEvent - eventsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstEvent, indexOfLastEvent);
  const totalPages = Math.ceil(filteredEvents.length / eventsPerPage);
  
  const toggleFavorite = (id) => {
    if (favorites.includes(id)) {
      setFavorites(favorites.filter(favId => favId !== id));
    } else {
      setFavorites([...favorites, id]);
    }
  };
  
  const toggleDetails = (id) => {
    if (openItem === id) {
      setOpenItem(null);
    } else {
      setOpenItem(id);
    }
  };
  
  const handlePageChange = (pageNumber) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    // Close any open details when changing pages
    setOpenItem(null);
    // Scroll to top of calendar
    window.scrollTo({
      top: document.querySelector('.calendar-table-header')?.offsetTop - 100 || 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <CalendarContainer className="container">
      <CalendarHeader>
        <CalendarTitle>Economic Calendar</CalendarTitle>
        <CalendarSubtitle>
          Stay informed about important economic events and data releases that impact the Indian F&O markets
        </CalendarSubtitle>
      </CalendarHeader>
      
      <ControlsContainer>
        <DateControl>
          <FaCalendarAlt />
          <select value={dateRange} onChange={(e) => setDateRange(e.target.value)}>
            <option value="today">Today</option>
            <option value="tomorrow">Tomorrow</option>
            <option value="this_week">This Week</option>
            <option value="next_week">Next Week</option>
            <option value="this_month">This Month</option>
          </select>
        </DateControl>
        
        <FilterControl>
          <FaFilter />
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="all">All Countries</option>
            <option value="india">India</option>
            <option value="usa">United States</option>
            <option value="eurozone">Eurozone</option>
            <option value="uk">United Kingdom</option>
            <option value="japan">Japan</option>
            <option value="china">China</option>
          </select>
        </FilterControl>
        
        <FilterControl>
          <FaFilter />
          <select value={impact} onChange={(e) => setImpact(e.target.value)}>
            <option value="all">All Impact</option>
            <option value="high">High Impact</option>
            <option value="medium">Medium Impact</option>
            <option value="low">Low Impact</option>
          </select>
        </FilterControl>
        
        <SearchControl>
          <FaSearch />
          <input
            type="text"
            placeholder="Search events..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </SearchControl>
      </ControlsContainer>
      
      <CalendarTable>
        <CalendarTableHeader className="calendar-table-header">
          <HeaderCell>Time (IST)</HeaderCell>
          <HeaderCell>Event</HeaderCell>
          <HeaderCell>Country</HeaderCell>
          <HeaderCell>Impact</HeaderCell>
          <HeaderCell>Favorite</HeaderCell>
        </CalendarTableHeader>
        
        {loading ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <p>Loading economic events...</p>
          </div>
        ) : currentEvents.length === 0 ? (
          <div style={{ padding: '2rem', textAlign: 'center' }}>
            <p>No events found matching your filters. Try adjusting your search criteria.</p>
          </div>
        ) : (
          currentEvents.map(event => (
            <CalendarItem key={event.id}>
              <ItemHeader onClick={() => toggleDetails(event.id)}>
                <TimeCell>{event.time}</TimeCell>
                <EventCell>{event.event}</EventCell>
                <CountryCell>
                  {/* <img src={`/flags/${event.country.toLowerCase()}.png`} alt={event.country} /> */}
                  {event.country}
                </CountryCell>
                <ImpactCell impact={event.impact}>
                  <div className="impact"></div>
                  {event.impact.charAt(0).toUpperCase() + event.impact.slice(1)}
                </ImpactCell>
                <FavoriteCell 
                  favorite={favorites.includes(event.id)}
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(event.id);
                  }}
                >
                  {favorites.includes(event.id) ? <FaStar /> : <FaRegStar />}
                </FavoriteCell>
              </ItemHeader>
              
              <ItemDetails isOpen={openItem === event.id}>
                <DetailContent>
                  <DetailItem>
                    <DetailTitle>Actual</DetailTitle>
                    <DetailValue>{event.actual}</DetailValue>
                  </DetailItem>
                  
                  <DetailItem>
                    <DetailTitle>Forecast</DetailTitle>
                    <DetailValue>{event.forecast}</DetailValue>
                  </DetailItem>
                  
                  <DetailItem>
                    <DetailTitle>Previous</DetailTitle>
                    <DetailValue>{event.previous}</DetailValue>
                  </DetailItem>
                  
                  <DetailItem style={{ gridColumn: '1 / -1' }}>
                    <DetailTitle>Description</DetailTitle>
                    <DetailValue>{event.description}</DetailValue>
                  </DetailItem>
                </DetailContent>
              </ItemDetails>
            </CalendarItem>
          ))
        )}
      </CalendarTable>
      
      {!loading && filteredEvents.length > 0 && (
        <CalendarPagination>
          <PaginationButton 
            disabled={currentPage === 1} 
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lt;
          </PaginationButton>
          
          {/* Generate pagination buttons dynamically */}
          {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
            // If we have more than 5 pages, show ellipsis
            if (totalPages > 5) {
              // Always show first page
              if (i === 0) return (
                <PaginationButton 
                  key={i} 
                  active={currentPage === 1} 
                  onClick={() => handlePageChange(1)}
                >
                  1
                </PaginationButton>
              );
              
              // Always show last page
              if (i === 4) return (
                <PaginationButton 
                  key={i} 
                  active={currentPage === totalPages} 
                  onClick={() => handlePageChange(totalPages)}
                >
                  {totalPages}
                </PaginationButton>
              );
              
              // Show ellipsis if needed
              if (i === 1 && currentPage > 3) return (
                <span key={i} style={{ margin: '0 0.5rem' }}>...</span>
              );
              
              if (i === 3 && currentPage < totalPages - 2) return (
                <span key={i} style={{ margin: '0 0.5rem' }}>...</span>
              );
              
              // Show pages around current page
              let pageNum;
              if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 1 + i;
              }
              
              if (pageNum > 1 && pageNum < totalPages) {
                return (
                  <PaginationButton 
                    key={i} 
                    active={currentPage === pageNum} 
                    onClick={() => handlePageChange(pageNum)}
                  >
                    {pageNum}
                  </PaginationButton>
                );
              }
              
              return null;
            } else {
              // If we have 5 or fewer pages, show all page numbers
              return (
                <PaginationButton 
                  key={i} 
                  active={currentPage === i + 1} 
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </PaginationButton>
              );
            }
          }).filter(Boolean)}
          
          <PaginationButton 
            disabled={currentPage === totalPages} 
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &gt;
          </PaginationButton>
        </CalendarPagination>
      )}
    </CalendarContainer>
  );
};

export default EconomicCalendarPage;
