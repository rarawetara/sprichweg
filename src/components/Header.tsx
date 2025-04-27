import { useState, useEffect } from 'react';
import styled from 'styled-components';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

const HeaderContainer = styled.header<{ isScrolled: boolean }>`
  background-color: ${props => props.isScrolled ? 'rgba(255, 255, 255, 0.98)' : 'transparent'};
  padding: ${props => props.isScrolled ? '0.75rem 0' : '1.25rem 0'};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  transition: all 0.3s ease-in-out;
  backdrop-filter: ${props => props.isScrolled ? 'blur(8px)' : 'none'};
  box-shadow: ${props => props.isScrolled ? '0 1px 0 rgba(0, 0, 0, 0.06)' : 'none'};
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div<{ $isScrolled: boolean }>`
  font-size: 1.75rem;
  font-weight: 700;
  color: #1a1a1a;
  display: flex;
  align-items: center;
  
  span {
    color: var(--secondary-color);
  }
`;

const MenuItems = styled.ul<{ isOpen: boolean }>`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  
  @media (max-width: 768px) {
    display: ${props => (props.isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.98);
    padding: 1.5rem;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.06);
    backdrop-filter: blur(8px);
  }
`;

const MenuItem = styled.li`
  margin-left: 2.5rem;
  
  @media (max-width: 768px) {
    margin: 0.75rem 0;
  }
`;

const MenuLink = styled.a<{ isActive?: boolean }>`
  color: ${props => props.isActive ? 'var(--secondary-color)' : '#1a1a1a'};
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
  font-size: 1rem;
  padding: 0.5rem 0;
  position: relative;
  
  &:hover {
    color: var(--secondary-color);
  }
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: ${props => props.isActive ? '100%' : '0'};
    height: 2px;
    background-color: var(--secondary-color);
    transition: width 0.3s ease;
  }
  
  &:hover::after {
    width: 100%;
  }
`;

const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #1a1a1a;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 10;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const RightSection = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

const GetStartedButton = styled.a`
  background-color: var(--secondary-color);
  color: white;
  font-weight: 500;
  padding: 0.6rem 1.5rem;
  border-radius: 30px;
  transition: all 0.2s;
  font-size: 0.95rem;
  
  &:hover {
    transform: translateY(-2px);
    background-color: #e05328;
  }
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const Header = () => {
  const { t } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['home', 'courses', 'about', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (!element) return false;
        
        const rect = element.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <div className="container">
        <Nav>
          <Logo $isScrolled={isScrolled}>
            <span>Sprich</span>weg
          </Logo>
          
          <MenuButton onClick={toggleMenu} aria-expanded={isMenuOpen}>
            {isMenuOpen ? '✕' : '☰'}
          </MenuButton>
          
          <MenuItems isOpen={isMenuOpen}>
            <MenuItem>
              <MenuLink 
                href="#" 
                onClick={(e) => {e.preventDefault(); scrollToSection('home');}}
                isActive={activeSection === 'home'}
              >
                Home
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink 
                href="#courses" 
                onClick={(e) => {e.preventDefault(); scrollToSection('courses');}}
                isActive={activeSection === 'courses'}
              >
                Courses
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink 
                href="#about" 
                onClick={(e) => {e.preventDefault(); scrollToSection('about');}}
                isActive={activeSection === 'about'}
              >
                About Us
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink 
                href="#contact" 
                onClick={(e) => {e.preventDefault(); scrollToSection('contact');}}
                isActive={activeSection === 'contact'}
              >
                Contact
              </MenuLink>
            </MenuItem>
          </MenuItems>
          
          <RightSection>
            <LanguageSwitcher />
            <GetStartedButton href="#contact">
              {t('header.getStarted')}
            </GetStartedButton>
          </RightSection>
        </Nav>
      </div>
    </HeaderContainer>
  );
};

export default Header; 