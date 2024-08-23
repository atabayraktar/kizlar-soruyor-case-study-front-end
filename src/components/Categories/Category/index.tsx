const Category = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="category">
      <img src={img} alt={`${title} image`} />
      {title}
    </div>
  );
};

export default Category;
