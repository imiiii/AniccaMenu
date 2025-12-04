import Header from './components/Header';
import CategorySection from './components/CategorySection';
import { menuData } from './data/menu';

function App() {
  return (
    <div className="min-h-screen bg-sand-beige">
      <Header />
      
      <main className="pb-12">
        {/* صبحانه - Breakfast */}
        <CategorySection 
          title="صبحانه" 
          items={menuData.breakfast} 
        />
        
        {/* ناهار / شام - Lunch/Dinner */}
        <CategorySection 
          title="ناهار / شام" 
          items={menuData.lunchDinner} 
        />
        
        {/* بار گرم - Hot Bar */}
        <CategorySection 
          title="بار گرم" 
          items={menuData.hotBar} 
        />
        
        {/* بار سرد - Cold Bar */}
        <CategorySection 
          title="بار سرد" 
          items={menuData.coldBar} 
        />
        
        {/* بشقاب‌ها - Plates */}
        <CategorySection 
          title="بشقاب‌ها" 
          items={menuData.plates} 
        />
        
        {/* خدمات تفریحی - Recreational Services */}
        <CategorySection 
          title="خدمات تفریحی" 
          items={menuData.paddleBoard} 
        />
      </main>
      
      <footer className="bg-terracotta/10 py-6 text-center text-gray-600">
        <p className="text-sm">ANICCA</p>
      </footer>
    </div>
  );
}

export default App;

