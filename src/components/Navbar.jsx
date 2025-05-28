// Import styled-components and our custom theme hook
import styled from 'styled-components';
import { useTheme } from '../context/ThemeContext';

// Styled navigation bar that adapts to theme
const Nav = styled.nav`
  padding: 1rem;
  background-color: ${props => props.isDarkMode ? '#333' : '#f0f0f0'};
  color: ${props => props.isDarkMode ? '#fff' : '#333'};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// Theme toggle button with theme-aware styling
const ThemeToggle = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  background-color: ${props => props.isDarkMode ? '#555' : '#ddd'};
  color: ${props => props.isDarkMode ? '#fff' : '#333'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.isDarkMode ? '#666' : '#ccc'};
  }
`;

function Navbar() {
  // Use our custom hook to access theme context
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <Nav isDarkMode={isDarkMode}>
      <h1>Theme Context Demo</h1>
      {/* Button that toggles theme when clicked */}
      <ThemeToggle isDarkMode={isDarkMode} onClick={toggleTheme}>
        Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
      </ThemeToggle>
    </Nav>
  );
}

export default Navbar;