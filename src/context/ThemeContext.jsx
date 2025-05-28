// Import necessary hooks from React
import { createContext, useState, useContext } from 'react';

// Create a new context for theme management
// This will hold our theme state and functions
const ThemeContext = createContext();

// ThemeProvider component that wraps our app
// This makes theme data available to all child components
export const ThemeProvider = ({ children }) => {
  // State to track dark/light mode
  // false = light mode, true = dark mode
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Function to toggle between dark and light modes
  // This will be passed down through context
  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  // Provide the theme context to all children components
  // Value prop contains all data we want to make available
  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to easily access theme context
// This simplifies consuming the context in other components
export const useTheme = () => {
  const context = useContext(ThemeContext);
  
  // Throw error if hook is used outside of ThemeProvider
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  
  return context;
};