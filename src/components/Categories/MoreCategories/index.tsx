const MoreCategories = ({
  imgs,
  amount,
}: {
  imgs: string[];
  amount: number;
}) => {
  return (
    <div className="more-categories">
      {imgs.map((img, index) => (
        <img key={index} src={img} alt="category image" />
      ))}
      <div className="amount">+{amount}</div>
    </div>
  );
};

export default MoreCategories;
