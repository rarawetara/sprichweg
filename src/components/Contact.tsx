import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(240,247,255,0.5) 100%);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
  text-align: center;
  color: var(--text-color);
  letter-spacing: -0.02em;
`;

const ContactForm = styled.form`
  width: 100%;
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-color);
`;

const Input = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  font-size: 1rem;
  resize: vertical;
  min-height: 120px;
  transition: all 0.2s ease;
  background: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  
  &:focus {
    outline: none;
    border-color: var(--primary-color);
    box-shadow: 0 0 0 2px rgba(var(--primary-color-rgb), 0.1);
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: var(--primary-color);
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  margin-top: 1rem;
  
  &:hover {
    background-color: var(--primary-color-dark);
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled.div`
  padding: 1rem;
  background-color: rgba(220, 255, 220, 0.5);
  border: 1px solid #a3e0a3;
  border-radius: 8px;
  margin-top: 1rem;
  text-align: center;
  color: #2e7d32;
  backdrop-filter: blur(10px);
`;

const ErrorMessage = styled.div`
  color: #d32f2f;
  font-size: 0.85rem;
  margin-top: 0.25rem;
`;

const AnimatedBlob = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background: linear-gradient(45deg, rgba(var(--primary-color-rgb), 0.05), rgba(var(--secondary-color-rgb), 0.05));
  filter: blur(40px);
  z-index: -1;
  animation: float 10s ease-in-out infinite;
  
  @keyframes float {
    0% {
      transform: translate(0, 0) rotate(0deg);
    }
    50% {
      transform: translate(20px, -20px) rotate(5deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
`;

const BlobLeft = styled(AnimatedBlob)`
  top: 20%;
  left: 5%;
  animation-delay: 0s;
`;

const BlobRight = styled(AnimatedBlob)`
  bottom: 20%;
  right: 5%;
  animation-delay: -5s;
`;

const Subtitle = styled.p`
  font-size: 1.1rem;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  color: var(--text-muted);
  line-height: 1.6;
`;

const TelegramButton = styled.a`
  display: inline-block;
  padding: 0.9rem 2.2rem;
  background-color: #229ED9;
  color: #fff;
  font-weight: 600;
  font-size: 1.15rem;
  border-radius: 30px;
  text-decoration: none;
  margin-top: 2.5rem;
  box-shadow: 0 2px 8px rgba(34,158,217,0.08);
  transition: background 0.2s, transform 0.2s;
  &:hover {
    background-color: #1b7fb6;
    transform: translateY(-2px) scale(1.03);
  }
`;

const Contact = () => {
  const { t } = useTranslation();
  return (
    <ContactSection id="contact">
      <BlobLeft />
      <BlobRight />
      <SectionTitle>{t('contact.title')}</SectionTitle>
      <Subtitle>{t('contact.subtitle')}</Subtitle>
      <TelegramButton
        href="https://t.me/sprichweg"
        target="_blank"
        rel="noopener noreferrer"
      >
        {t('contact.telegram')}
      </TelegramButton>
    </ContactSection>
  );
};

export default Contact; 