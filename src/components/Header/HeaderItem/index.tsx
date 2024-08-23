const HeaderItem = ({ img, title }: { img: string; title: string }) => {
  return (
    <div className="header-item">
      <img src={img} alt={`${title} icon`} />
      {title}
    </div>
  );
};

export default HeaderItem;
