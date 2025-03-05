import { createContext, useContext, useState } from 'react';

// Create a theme context
const ThemeContext = createContext();

// Theme provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
  };

  const value = { theme, toggleTheme };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

// Example components using the theme context
const ThemedButton = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      style={{
        backgroundColor: theme === 'light' ? '#007bff' : '#6c757d',
        color: 'white',
        padding: '10px 20px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        margin: '10px 0'
      }}
    >
      Toggle Theme
    </button>
  );
};

const ThemedBox = () => {
  const { theme } = useTheme();
  
  return (
    <div
      style={{
        backgroundColor: theme === 'light' ? '#f8f9fa' : '#343a40',
        color: theme === 'light' ? '#212529' : '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        margin: '10px 0',
        transition: 'all 0.3s ease'
      }}
    >
      <h3>Current Theme: {theme}</h3>
      <p>This box demonstrates the current theme from context.</p>
    </div>
  );
};

// Main example component
const ContextExample = () => {
  return (
    <div className="context-example" style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>React Context API Example</h2>
      <p>This example demonstrates the use of React Context API for theme management.</p>
      
      <ThemeProvider>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <ThemedButton />
          <ThemedBox />
          <div style={{ marginTop: '20px' }}>
            <h3>How it works:</h3>
            <ul>
              <li>ThemeContext provides theme state to all child components</li>
              <li>useTheme custom hook makes it easy to access the theme context</li>
              <li>Components can read and update the theme without prop drilling</li>
              <li>Theme changes are reflected immediately across all components</li>
            </ul>
          </div>
        </div>
      </ThemeProvider>
    </div>
  );
};

export default ContextExample;