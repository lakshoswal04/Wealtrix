import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    /* Main brand colors - using Indian-inspired color palette */
    --primary: #FF6B35; /* Vibrant orange - energetic, represents growth */
    --secondary: #004E89; /* Deep blue - trust, stability */
    --accent: #00A896; /* Teal - prosperity */
    --background: #FFFFFF;
    --text-primary: #333333;
    --text-secondary: #666666;
    --text-light: #FFFFFF;
    --success: #4CAF50;
    --warning: #FFC107;
    --error: #F44336;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 2rem;
    --spacing-xl: 3rem;
    
    /* Border radius */
    --border-radius-sm: 4px;
    --border-radius-md: 8px;
    --border-radius-lg: 16px;
    
    /* Shadows */
    --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.12);
    --shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1);
    --shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1);
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Poppins', sans-serif;
    color: var(--text-primary);
    background-color: var(--background);
    line-height: 1.6;
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    margin-bottom: 1rem;
  }
  
  a {
    text-decoration: none;
    color: var(--primary);
    transition: color 0.3s ease;
    
    &:hover {
      color: var(--secondary);
    }
  }
  
  button {
    cursor: pointer;
    font-family: 'Poppins', sans-serif;
  }
  
  .container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 var(--spacing-md);
  }
  
  .section {
    padding: var(--spacing-xl) 0;
  }
`;

export default GlobalStyles;
