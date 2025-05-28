// Import required dependencies and components
import styled from 'styled-components';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Card from './components/Card';

// Main container that wraps the entire app
// Changes background and text color based on theme
const AppContainer = styled.div`
  min-height: 100vh;
  transition: all 0.3s ease;
  background-color: ${props => props.isDarkMode ? '#1a1a1a' : '#ffffff'};
  color: ${props => props.isDarkMode ? '#ffffff' : '#1a1a1a'};
`;

// Container for centering and padding content
const ContentContainer = styled.div`
  max-width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Grid layout for responsive card arrangement
// Uses CSS Grid with auto-fit for flexible columns
const CardGrid = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin: 0 auto;
`;

function App() {
  return (
    // Wrap entire app with ThemeProvider to make theme context available
    <ThemeProvider>
      {/* Navbar contains the theme toggle button */}
      <Navbar />
      {/* Main container that changes appearance based on theme */}
      <AppContainer>
        <ContentContainer>
          <CardGrid>
            {/* Educational cards explaining useContext */}
            <Card 
              title="What is useContext?" 
              content="useContext is a React Hook that lets you read and subscribe to context from your component. It's the perfect solution for passing data through the component tree without manually passing props at every level (prop drilling)."
            />
            <Card 
              title="How Context Works" 
              content="1. Create context using createContext()\n2. Wrap parent component with Context.Provider\n3. Pass value to Provider\n4. Use useContext() in child components to access the value\n\nIn this example, ThemeContext.Provider wraps our app, making theme data available everywhere!"
            />
            {/* More educational cards... */}
          </CardGrid>
        </ContentContainer>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
