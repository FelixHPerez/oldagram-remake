import { HeartIcon, CommentIcon, ShareIcon } from "./Icons";

function Post({ post, handleLike }) {
  return (
    <article className="post">
      <div className="post--header padding">
        <img src={post.avatar} className="post--avatar" alt={post.name} />
        <div className="post--info">
          <h3 className="post--name">{post.name}</h3>
          <h5 className="post--location">{post.location}</h5>
        </div>
      </div>
      <img
        src={post.post}
        className="post--image"
        alt={`${post.name} selfie`}
      />
      <div className="post--body padding">
        <div className="icons--container">
          <button
            aria-label="Like post"
            id="like-btn"
            onClick={() => handleLike(post.id)}
          >
            <HeartIcon className={`icon ${post.isLiked ? "liked" : ""}`} />
          </button>
          <button aria-label="Comment on post" className="comment-btn">
            <CommentIcon className="icon" />
          </button>
          <button aria-label="Send direct message">
            <ShareIcon className="icon" />
          </button>
        </div>
        <p className="post--like--count">{post.likes} likes</p>
        <p className="post--comment">
          <span className="post--username">{post.username}</span> {post.comment}
        </p>
      </div>
    </article>
  );
}

export default Post;
