import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const LanguageToggle = styled.button`
  background: transparent;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 30px;
  color: #1a1a1a;
  cursor: pointer;
  font-size: 0.95rem;
  padding: 0.45rem 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.2s ease;
  
  &:hover {
    background: rgba(0, 0, 0, 0.03);
  }
`;

const FlagIcon = styled.span`
  font-size: 1.1rem;
  margin-right: 0.25rem;
`;

interface Language {
  code: string;
  name: string;
  flag: string;
}

const languages: Language[] = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'uk', name: 'Українська', flag: '🇺🇦' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState(i18n.language || 'en');
  
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0];

  const changeLanguage = () => {
    // Cycle through languages
    const currentIndex = languages.findIndex(lang => lang.code === currentLang);
    const nextIndex = (currentIndex + 1) % languages.length;
    const nextLang = languages[nextIndex].code;
    
    i18n.changeLanguage(nextLang);
    setCurrentLang(nextLang);
  };

  return (
    <LanguageToggle 
      onClick={changeLanguage}
      aria-label="Change language"
    >
      <FlagIcon>{currentLanguage.flag}</FlagIcon>
      {currentLanguage.code.toUpperCase()}
    </LanguageToggle>
  );
};

export default LanguageSwitcher; 