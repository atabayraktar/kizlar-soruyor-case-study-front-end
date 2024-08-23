const UserBadge = ({
  img,
  name,
  title,
  tier,
}: {
  img: string;
  name: string;
  title: string;
  tier: string;
}) => {
  return (
    <div className="user">
      <img src={img} alt="user image" />
      <div>
        <div className="user-name">{name}</div>
        <div className="user-info">
          <div className="user-title">{title}</div>
          <div className="user-tier">{tier}</div>
        </div>
      </div>
    </div>
  );
};

export default UserBadge;
