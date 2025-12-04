// Header component - لوگو از public/images/logo.png نمایش داده می‌شود
// می‌توانید مسیر لوگو را با prop logoPath تغییر دهید
const Header = ({ logoPath = "/images/logo.png" }) => {
  return (
    <header className="bg-gradient-to-b from-terracotta/20 to-sand-beige py-6 md:py-8 px-4 text-center fade-in">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Logo Image */}
          <div className="mb-2 w-full flex justify-center">
            <img 
              src={logoPath} 
              alt="Anicca Hostel Logo" 
              className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

