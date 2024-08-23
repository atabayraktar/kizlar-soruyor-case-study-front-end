const PostCard = () => {
  return (
    <div className="post-card">
      <div className="tag">Lorem ipsum</div>
      <div className="title">
        Lorem ipsum dolor sit amet consectetur. Duis posuere nullam augue
        cursus.
      </div>
      <div className="user">
        <img
          src="/images/placeholders/placeholder-avatar-img.svg"
          alt="use image"
        />
        <div>
          <div className="user-name">Makenna Carder</div>
          <div className="user-info">
            <div className="user-title">Fenomen</div>
            <div className="user-tier">Xper 2</div>
          </div>
        </div>
      </div>
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
