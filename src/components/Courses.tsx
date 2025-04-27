import { useEffect, useRef } from 'react';
import styled from 'styled-components';

const CoursesSection = styled.section`
  padding: 8rem 0;
  background-color: transparent;
  position: relative;
  overflow: hidden;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  font-weight: 600;
  letter-spacing: -0.02em;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.25rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto 4rem;
  line-height: 1.6;
`;

const CourseGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 3rem;
  max-width: 1400px;
  margin: 0 auto;
`;

const CourseCard = styled.div`
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;
  background-color: transparent;
  transform-style: preserve-3d;
  perspective: 1000px;
  
  &:hover {
    transform: translateY(-10px);
    
    img {
      transform: scale(1.05);
    }
  }
`;

const ImageContainer = styled.div`
  height: 240px;
  position: relative;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.08);
  transform: translateZ(0);
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.3));
    z-index: 1;
  }
`;

const CourseImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.7s ease;
  transform-origin: center;
`;

const CourseBadge = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background-color: rgba(255, 255, 255, 0.85);
  color: #1a1a1a;
  font-size: 0.8rem;
  font-weight: 600;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  backdrop-filter: blur(4px);
  z-index: 2;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const CourseContent = styled.div`
  padding: 2rem 1.5rem 1.5rem;
  transform: translateZ(20px);
  position: relative;
  margin-top: -30px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  z-index: 2;
  margin-left: 1rem;
  margin-right: 1rem;
  box-shadow: 0 15px 35px rgba(0, 0, 0, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.8);
`;

const CourseTitle = styled.h3`
  font-size: 1.4rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
`;

const CourseDescription = styled.p`
  color: #666;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.95rem;
`;

const CourseFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const CourseFeatures = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  font-size: 0.85rem;
  color: #666;
`;

const CourseFeature = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;
`;

const LearnMoreButton = styled.a`
  font-weight: 600;
  color: var(--secondary-color);
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  font-size: 0.9rem;
  
  &:hover {
    color: #e05328;
    transform: translateX(3px);
  }
  
  &::after {
    content: '→';
    margin-left: 0.25rem;
    transition: transform 0.2s;
  }
  
  &:hover::after {
    transform: translateX(3px);
  }
`;

const BackgroundElement = styled.div`
  position: absolute;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(241, 100, 46, 0.04), rgba(241, 100, 46, 0));
  top: 15%;
  right: -5%;
  z-index: -1;
`;

const BackgroundElement2 = styled.div`
  position: absolute;
  width: 350px;
  height: 350px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(59, 130, 246, 0.04), rgba(59, 130, 246, 0));
  bottom: 10%;
  left: -5%;
  z-index: -1;
`;

const Courses = () => {
  const cardsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll('.course-card');
    
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
    
    cards?.forEach(card => {
      observer.observe(card);
    });
    
    return () => {
      cards?.forEach(card => {
        observer.unobserve(card);
      });
    };
  }, []);
  
  // Image sources - in a real app these would be imported properly
  const courseImages = {
    beginner: '/images/german-beginner.jpg',
    intermediate: '/images/german-intermediate.jpg',
    advanced: '/images/german-advanced.jpg'
  };
  
  const courseBadges = {
    beginner: 'Популярний',
    intermediate: 'Бестселер',
    advanced: 'Новий'
  };
  
  return (
    <CoursesSection id="courses">
      <BackgroundElement />
      <BackgroundElement2 />
      <div className="container">
        <SectionTitle>Наші курси німецької</SectionTitle>
        <SectionSubtitle>
          Вивчайте німецьку мову з експертами в комфортному середовищі 
          та досягайте своїх мовних цілей швидше
        </SectionSubtitle>
        
        <CourseGrid ref={cardsRef}>
          <CourseCard className="course-card animate-on-scroll">
            <ImageContainer>
              <CourseImage src={courseImages.beginner} alt="Beginner German Course" />
              <CourseBadge>{courseBadges.beginner}</CourseBadge>
            </ImageContainer>
            <CourseContent>
              <CourseTitle>Початковий рівень (A1-A2)</CourseTitle>
              <CourseDescription>
                Побудуйте міцну основу в німецькій мові з нашими курсами для початківців. 
                Вивчайте базову лексику, граматику та повсякденні фрази.
              </CourseDescription>
              <CourseFooter>
                <CourseFeatures>
                  <CourseFeature>
                    <span>🕒</span> 8 тижнів
                  </CourseFeature>
                  <CourseFeature>
                    <span>👥</span> 8-12 учнів
                  </CourseFeature>
                </CourseFeatures>
                <LearnMoreButton href="#contact">Дізнатися більше</LearnMoreButton>
              </CourseFooter>
            </CourseContent>
          </CourseCard>
          
          <CourseCard className="course-card animate-on-scroll">
            <ImageContainer>
              <CourseImage src={courseImages.intermediate} alt="Intermediate German Course" />
              <CourseBadge>{courseBadges.intermediate}</CourseBadge>
            </ImageContainer>
            <CourseContent>
              <CourseTitle>Середній рівень (B1-B2)</CourseTitle>
              <CourseDescription>
                Розширте свої знання німецької мови зі складнішою граматикою, 
                розмовною практикою та культурними знаннями.
              </CourseDescription>
              <CourseFooter>
                <CourseFeatures>
                  <CourseFeature>
                    <span>🕒</span> 10 тижнів
                  </CourseFeature>
                  <CourseFeature>
                    <span>👥</span> 6-10 учнів
                  </CourseFeature>
                </CourseFeatures>
                <LearnMoreButton href="#contact">Дізнатися більше</LearnMoreButton>
              </CourseFooter>
            </CourseContent>
          </CourseCard>
          
          <CourseCard className="course-card animate-on-scroll">
            <ImageContainer>
              <CourseImage src={courseImages.advanced} alt="Advanced German Course" />
              <CourseBadge>{courseBadges.advanced}</CourseBadge>
            </ImageContainer>
            <CourseContent>
              <CourseTitle>Просунутий рівень (C1-C2)</CourseTitle>
              <CourseDescription>
                Відшліфуйте свою німецьку мову з нюансованим словниковим запасом, 
                поглибленою граматикою та автентичними дискусіями.
              </CourseDescription>
              <CourseFooter>
                <CourseFeatures>
                  <CourseFeature>
                    <span>🕒</span> 12 тижнів
                  </CourseFeature>
                  <CourseFeature>
                    <span>👥</span> 4-8 учнів
                  </CourseFeature>
                </CourseFeatures>
                <LearnMoreButton href="#contact">Дізнатися більше</LearnMoreButton>
              </CourseFooter>
            </CourseContent>
          </CourseCard>
        </CourseGrid>
      </div>
    </CoursesSection>
  );
};

export default Courses; 