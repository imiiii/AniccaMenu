import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Header from './components/Header';
import CategorySection from './components/CategorySection';
import QRCode from './components/QRCode';
import LanguageSwitcher from './components/LanguageSwitcher';
import { translations } from './data/translations';

function AppContent() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="min-h-screen bg-sand-beige">
      <Header />
      
      <main className="pb-12">
        <CategorySection 
          title={t.categories.breakfast} 
          items={t.menu.breakfast} 
        />
        
        <CategorySection 
          title={t.categories.lunchDinner} 
          items={t.menu.lunchDinner} 
        />
        
        <CategorySection 
          title={t.categories.hotBar} 
          items={t.menu.hotBar} 
        />
        
        <CategorySection 
          title={t.categories.coldBar} 
          items={t.menu.coldBar} 
        />
        
        <CategorySection 
          title={t.categories.plates} 
          items={t.menu.plates} 
        />
        
        <CategorySection 
          title={t.categories.paddleBoard} 
          items={t.menu.paddleBoard} 
        />
      </main>
      
      <footer className="bg-terracotta/10 py-6 text-center text-gray-600">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-4">
            <QRCode 
              url={window.location.href} 
              size={150}
            />
          </div>
          <p className="text-sm">ANICCA</p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}

export default App;

