import styled from 'styled-components';

const HeroContainer = styled.section`
  background-color: white;
  color: #1a1a1a;
  padding: 12rem 0 8rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  animation: fadeIn 0.8s ease-out;
`;

const HeroTitle = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.1;
  letter-spacing: -0.02em;
  
  span {
    color: var(--secondary-color);
    display: block;
    margin: 0.5rem 0;
  }
  
  @media (max-width: 768px) {
    font-size: 2.75rem;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  color: #666;
  font-weight: 400;
  animation: fadeIn 0.8s ease-out 0.3s forwards;
  opacity: 0.9;
  
  @media (max-width: 768px) {
    font-size: 1.25rem;
  }
`;

const Invitation = styled.p`
  font-size: 1.25rem;
  margin-bottom: 3rem;
  color: #666;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  animation: fadeIn 0.8s ease-out 0.4s forwards;
  
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const PrimaryButton = styled.button`
  background-color: var(--secondary-color);
  border: none;
  border-radius: 30px;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  padding: 1rem 2.5rem;
  transition: all 0.3s;
  box-shadow: 0 4px 6px rgba(241, 100, 46, 0.1);
  
  &:hover {
    background-color: #e05328;
    transform: translateY(-3px);
    box-shadow: 0 8px 15px rgba(241, 100, 46, 0.15);
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  animation: bounceLight 2s infinite;
  cursor: pointer;
  color: var(--secondary-color);
  
  &::after {
    content: '↓';
    font-size: 1.5rem;
  }
`;

const Hero = () => {
  const scrollToSection = () => {
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  return (
    <HeroContainer id="home">
      <div className="container">
        <HeroContent>
          <HeroTitle>
            Learn German
            <span>with Sprichweg</span>
          </HeroTitle>
          <HeroSubtitle>Your path to fluent German speaking</HeroSubtitle>
          <Invitation>
            Ми запрошуємо вас відкрити чарівний світ німецької мови разом з нашими експертами!
          </Invitation>
          <PrimaryButton onClick={scrollToSection}>
            Start Learning Today
          </PrimaryButton>
        </HeroContent>
      </div>
      <ScrollIndicator onClick={scrollToSection} />
    </HeroContainer>
  );
};

export default Hero; 