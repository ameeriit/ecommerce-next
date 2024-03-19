interface CategoriesCardProps {
  categories: Category[];
  CardGroupTitle: string;
}

interface Category {}

export default function CategoriesCard({
  categories,
  CardGroupTitle,
}: CategoriesCardProps) {
  return (
    <div>
      <h3 className="text-3xl">{CardGroupTitle}</h3>
      <div>
        {categories.map((category, categoryIndex) => (
          <div key={categoryIndex}>
            {/* Render category information here */}
          </div>
        ))}
      </div>
    </div>
  );
}
