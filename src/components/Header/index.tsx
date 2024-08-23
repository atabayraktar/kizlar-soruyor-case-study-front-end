import HeaderItem from "./HeaderItem";

const Header = () => {
  const items = [
    { img: "/images/menu.svg", title: "Menü" },
    { img: "/images/explore.svg", title: "Keşfet" },
    { img: "/images/search.svg", title: "Ara" },
  ];

  return (
    <div className="header">
      <div className="header-items">
        {items.map((item, index) => (
          <HeaderItem key={index} img={item.img} title={item.title} />
        ))}
      </div>
      <div className="logo">
        <img src="/images/logo.svg" alt="logo" />
      </div>
      <div className="header-actions">
        <div className="ask">
          <img src="/images/ask.svg" alt="ask" />
          Sor
        </div>
        <div className="profile">
          <img src="/images/profile.svg" alt="profile" />
          Giriş Yap / Üye Ol
        </div>
      </div>
    </div>
  );
};

export default Header;
