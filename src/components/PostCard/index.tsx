import UserBadge from "./UserBadge";

const PostCard = () => {
  return (
    <div className="post-card">
      <div className="tag">Lorem ipsum</div>
      <div className="title">
        Lorem ipsum dolor sit amet consectetur. Duis posuere nullam augue
        cursus.
      </div>
      <UserBadge
        img="/images/placeholders/placeholder-avatar-img.svg"
        name="Makenna Carder"
        title="Fenomen"
        tier="Xper 2"
      />
      <div className="text">
        Lorem ipsum dolor sit amet consectetur. Mi suscipit risus vulputate urna
        ullamcorper facilisi at.
      </div>
      <img
        src="/images/placeholders/placeholder-post-img.svg"
        alt="post image"
      />
    </div>
  );
};

export default PostCard;
