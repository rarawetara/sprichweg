import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const AboutSection = styled.section`
  padding: 8rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

const AboutContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
`;

const AboutImageContainer = styled.div`
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  @media (max-width: 992px) {
    max-width: 500px;
    margin: 0 auto;
  }
`;

const MainImage = styled.img`
  width: 100%;
  border-radius: 24px;
  transform: translateZ(0);
  transition: transform 0.5s ease;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.08);
  
  &:hover {
    transform: translateZ(10px);
  }
`;

const FloatingImage1 = styled.img`
  position: absolute;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 16px;
  bottom: -30px;
  right: -50px;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateZ(40px);
  background-color: white;
  padding: 8px;
  animation: float 8s ease-in-out infinite;
  
  @keyframes float {
    0% { transform: translateZ(40px) translateY(0px); }
    50% { transform: translateZ(40px) translateY(-15px); }
    100% { transform: translateZ(40px) translateY(0px); }
  }
  
  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
    right: -20px;
  }
`;

const FloatingImage2 = styled.img`
  position: absolute;
  width: 140px;
  height: 140px;
  object-fit: cover;
  border-radius: 16px;
  top: -30px;
  left: -40px;
  z-index: 2;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  transform: translateZ(20px);
  background-color: white;
  padding: 8px;
  animation: float2 6s ease-in-out infinite;
  
  @keyframes float2 {
    0% { transform: translateZ(20px) translateY(0px); }
    50% { transform: translateZ(20px) translateY(15px); }
    100% { transform: translateZ(20px) translateY(0px); }
  }
  
  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
    left: -20px;
  }
`;

const AboutContent = styled.div`
  max-width: 550px;
  
  @media (max-width: 992px) {
    max-width: 100%;
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  font-weight: 600;
  position: relative;
  letter-spacing: -0.02em;
`;

const AboutDescription = styled.p`
  color: #666;
  line-height: 1.8;
  margin-bottom: 2.5rem;
  font-size: 1.1rem;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const FeatureItem = styled.li`
  margin-bottom: 1.25rem;
  display: flex;
  align-items: flex-start;
  opacity: 0;
  transform: translateX(20px);
  transition: all 0.5s ease;
  
  &.visible {
    opacity: 1;
    transform: translateX(0);
  }
`;

const FeatureIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(241, 100, 46, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  color: var(--secondary-color);
  font-size: 1.25rem;
  flex-shrink: 0;
`;

const FeatureText = styled.span`
  font-size: 1.05rem;
  color: #1a1a1a;
  padding-top: 0.5rem;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 600px;
  height: 600px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(241, 100, 46, 0.02), rgba(241, 100, 46, 0));
  top: 10%;
  left: -10%;
  z-index: -1;
`;

const BackgroundGradient2 = styled.div`
  position: absolute;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.02), rgba(59, 130, 246, 0));
  bottom: 5%;
  right: -5%;
  z-index: -1;
`;

const About = () => {
  const { t } = useTranslation();
  const featuresRef = useRef<HTMLUListElement>(null);
  
  useEffect(() => {
    const features = featuresRef.current?.querySelectorAll('li');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('visible');
          }, index * 150);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    features?.forEach(feature => {
      observer.observe(feature);
    });
    
    return () => {
      features?.forEach(feature => {
        observer.unobserve(feature);
      });
    };
  }, []);
  
  const featuresIcons = ['👨‍🏫', '👥', '📚', '💻', '📋'];
  const featuresData = t('about.features', { returnObjects: true }) as string[];
  
  return (
    <AboutSection id="about">
      <BackgroundGradient />
      <BackgroundGradient2 />
      <div className="container">
        <AboutContainer>
          <AboutContent>
            <SectionTitle>{t('about.title')}</SectionTitle>
            <AboutDescription>{t('about.description')}</AboutDescription>
            <FeatureList ref={featuresRef}>
              {featuresData.map((feature, index) => (
                <FeatureItem key={index}>
                  <FeatureIcon>{featuresIcons[index]}</FeatureIcon>
                  <FeatureText>{feature}</FeatureText>
                </FeatureItem>
              ))}
            </FeatureList>
          </AboutContent>
          
          <AboutImageContainer>
            <MainImage 
              src="images/german-classroom.jpg" 
              alt="Students learning German"
            />
            <FloatingImage1 
              src="/images/german-student.jpg" 
              alt="Student learning German"
            />
            <FloatingImage2 
              src="/images/german-book.jpg" 
              alt="German textbook"
            />
          </AboutImageContainer>
        </AboutContainer>
      </div>
    </AboutSection>
  );
};

export default About; 