// Import styled-components and our custom theme hook
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

// Card container with theme-aware styling
const CardContainer = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  border-radius: 8px;
  background-color: ${props => props.isDarkMode ? '#333' : '#f0f0f0'};
  color: ${props => props.isDarkMode ? '#fff' : '#333'};
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Card title with theme-aware text color
const CardTitle = styled.h2`
  margin-bottom: 1rem;
  color: ${props => props.isDarkMode ? '#fff' : '#333'};
`;

// Card content with consistent line height
const CardContent = styled.p`
  line-height: 1.5;
`;

function Card({ title, content }) {
  // Access theme context using our custom hook
  const { isDarkMode } = useTheme();

  return (
    // Pass theme state to styled components
    <CardContainer isDarkMode={isDarkMode}>
      <CardTitle isDarkMode={isDarkMode}>{title}</CardTitle>
      <CardContent>{content}</CardContent>
    </CardContainer>
  );
}

export default Card;