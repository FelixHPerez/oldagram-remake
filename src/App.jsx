import { useState } from "react";
import Post from "./components/Post";

function App() {
  const [posts, setPosts] = useState([
    {
      name: "Vincent van Gogh",
      username: "vincey1853",
      location: "Zundert, Netherlands",
      avatar: "/avatar-vangogh.jpg",
      post: "/post-vangogh.jpg",
      comment: "just took a few mushrooms lol",
      likes: 21,
      isLiked: false,
      id: 1,
    },
    {
      name: "Gustave Courbet",
      username: "gus1819",
      location: "Ornans, France",
      avatar: "/avatar-courbet.jpg",
      post: "/post-courbet.jpg",
      comment: "i'm feelin a bit stressed tbh",
      likes: 4,
      isLiked: false,
      id: 2,
    },
    {
      name: "Joseph Ducreux",
      username: "jd1735",
      location: "Paris, France",
      avatar: "/avatar-ducreux.jpg",
      post: "/post-ducreux.jpg",
      comment:
        "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
      likes: 152,
      isLiked: false,
      id: 3,
    },
  ]);

  const handleLike = (postId) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => {
        if (post.id === postId) {
          return { ...post, isLiked: !post.isLiked };
        } else {
          return post;
        }
      })
    );
  };

  return (
    <>
      <header className="padding">
        <img src="/logo.svg" alt="Oldagram logo" className="logo" />
        <img
          src="/profile-pic.jpg"
          alt="Profile picture showing a dog being petted"
          className="acc--avatar"
        />
      </header>
      <main id="posts--container">
        {posts.map((post) => (
          <Post key={post.id} post={post} handleLike={handleLike} />
        ))}
      </main>
    </>
  );
}

export default App;
