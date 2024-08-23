import Category from "./Category";
import MoreCategories from "./MoreCategories";

const Categories = () => {
  const items = [
    {
      img: "/images/placeholders/placeholder-category-img.svg",
      title: "Kızlar Bir Adım Öne",
    },
    {
      img: "/images/placeholders/placeholder-category-img.svg",
      title: "Güzellik & Bakım",
    },
    {
      img: "/images/placeholders/placeholder-category-img.svg",
      title: "Saç Bakım",
    },
    {
      img: "/images/placeholders/placeholder-category-img.svg",
      title: "Yeme & İçme",
    },
    {
      img: "/images/placeholders/placeholder-category-img.svg",
      title: "Temizlik İpuçları",
    },
    {
      img: "/images/placeholders/placeholder-category-img.svg",
      title: "Spor",
    },
  ];
  const moreCategoriesImages = [
    "/images/placeholders/placeholder-category-img.svg",
    "/images/placeholders/placeholder-category-img.svg",
    "/images/placeholders/placeholder-category-img.svg",
  ];

  return (
    <div className="categories">
      {items.map((item, index) => (
        <Category key={index} img={item.img} title={item.title} />
      ))}
      <MoreCategories imgs={moreCategoriesImages} amount={24} />
    </div>
  );
};

export default Categories;
