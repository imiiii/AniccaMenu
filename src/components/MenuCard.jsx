// MenuCard component - می‌توانید استایل کارت را اینجا تغییر دهید
// Props: title, description, price
const MenuCard = ({ title, description, price }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 md:p-10 hover:-translate-y-2 border border-sand-beige/50 h-full flex flex-col">
      <h3 className="text-2xl md:text-3xl font-bold text-terracotta mb-3 leading-tight">
        {title}
      </h3>
      {description && (
        <p className="text-gray-600 text-base md:text-lg mb-6 leading-relaxed flex-grow">
          {description}
        </p>
      )}
      <div className="flex justify-end mt-auto">
        <span className="text-xl md:text-2xl font-bold text-turquoise">
          {price}
        </span>
      </div>
    </div>
  );
};

export default MenuCard;

