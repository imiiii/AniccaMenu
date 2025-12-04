// CategorySection component - می‌توانید عنوان دسته‌بندی را اینجا تغییر دهید
// Props: title, items (array of menu items)
import MenuCard from './MenuCard';

const CategorySection = ({ title, items }) => {
  // Don't render section if items array is empty
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <section className="py-12 md:py-16 px-4 md:px-6 fade-in">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-terracotta mb-10 md:mb-12 text-center border-b-4 border-turquoise/40 pb-4">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-10">
          {items.map((item, index) => (
            <MenuCard
              key={index}
              title={item.title}
              description={item.description}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategorySection;

