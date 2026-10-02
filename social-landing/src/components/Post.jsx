import { FaThumbsUp, FaRegCommentAlt, FaShare, FaCheckCircle } from 'react-icons/fa';

function Post({
  author,
  avatar,
  time,
  verified,
  text,
  image,
  images,
  video,
  background,
  likes = 0,
  comments = 0,
}) {
  if (!author && !text && !image && !video && !images) return null;

  return (
    <div className="post-card">
      <div className="post-header">
        <img className="post-avatar" src={avatar} alt={author} />
        <div className="post-author-block">
          <div className="post-author-name">
            {author}
            {verified && <FaCheckCircle className="post-verified" />}
          </div>
          <div className="post-time">{time}</div>
        </div>
        <button className="post-more">•••</button>
      </div>

      {background ? (
        <div className="post-text-bg" style={{ background }}>
          {text}
        </div>
      ) : (
        <p className="post-text">{text}</p>
      )}

      {video && (
        <video className="post-video" src={video} controls poster={image}></video>
      )}

      {!video && images && (
        <div className={`post-grid post-grid-${Math.min(images.length, 4)}`}>
          {images.slice(0, 4).map((src, i) => (
            <img key={i} src={src} alt="" />
          ))}
        </div>
      )}

      {!video && !images && image && (
        <img className="post-image" src={image} alt="publication" />
      )}

      <div className="post-stats">
        <span>👍 {likes}</span>
        <span>{comments} commentaires</span>
      </div>

      <div className="post-actions">
        <button className="post-action-btn">
          <FaThumbsUp /> J'aime
        </button>
        <button className="post-action-btn">
          <FaRegCommentAlt /> Commenter
        </button>
        <button className="post-action-btn">
          <FaShare /> Partager
        </button>
      </div>
    </div>
  );
}

export default Post;