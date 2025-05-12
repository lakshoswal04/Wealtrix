import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Main = styled.main`
  min-height: 100vh;
  padding-top: ${({ isAuthPage }) => isAuthPage ? '0' : '80px'}; /* Only add padding for non-auth pages */
`;

const Layout = ({ children }) => {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      {!isAuthPage && <Header />}
      <Main isAuthPage={isAuthPage}>{children}</Main>
      {!isAuthPage && <Footer />}
    </>
  );
};

export default Layout;
