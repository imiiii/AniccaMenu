import { useLanguage } from '../contexts/LanguageContext';

const LanguageSwitcher = () => {
  const { language, toggleLanguage } = useLanguage();
  const isRTL = language === 'fa';

  return (
    <button
      onClick={toggleLanguage}
      className={`absolute top-4 md:top-6 z-50 px-4 py-2 bg-terracotta text-white rounded-lg hover:bg-terracotta/90 transition-colors font-medium shadow-2xl flex items-center gap-2 border-2 border-white ${
        isRTL ? 'left-4 md:left-6' : 'right-4 md:right-6'
      }`}
      aria-label="Switch language"
    >
      <span className="text-lg font-bold">{language === 'fa' ? 'EN' : 'فا'}</span>
      <span className="text-sm">{language === 'fa' ? 'English' : 'فارسی'}</span>
    </button>
  );
};

export default LanguageSwitcher;

