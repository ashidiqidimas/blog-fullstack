import FirstPost from "../components/FirstPost";
import SecondPost from "../components/SecondPost";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";

export default function DashboardPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookies] = useCookies(["accessToken", "fullname", "userId"]);

  const fetchPosts = () => {
    axios
      .get(`http://localhost:8000/post/user/${cookies.userId}`)
      .then((res) => {
        const listPosts = res.data;
        setPosts(listPosts);
      })
      .catch((e) => alert("error with " + e));
  };

  useEffect(() => {
    if (!cookies.userId) {
      navigate("/register");
    } else {
      fetchPosts();
    }
  }, []);

  const handleClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  const handleLogOut = () => {
    removeCookies("accessToken");
    removeCookies("fullname");
    removeCookies("userId");
    navigate("/");
  };

  const handleCreatePost = () => {
    navigate("/blogs/create");
  };

  return (
    <div className={"lg:container pt-14 px-5"}>
      <div className={"my-12 flex justify-between items-center"}>
        <button
          className={"flex text-white gap-x-2 px-4 py-3 bg-sky-600 rounded-lg text-lg leading-7 font-semibold"}
          onClick={handleCreatePost}>
          <img src="/create-post-icon.png" alt="" className={"h-6"} />
          Create Post
        </button>
        <button
          className={"border border-red-500 rounded-lg px-4 py-3 text-lg leading-7 text-red-500"}
          onClick={handleLogOut}>
          Log out
        </button>
      </div>
      {
        posts.length === 0 ?
          <p>Posts is still empty :(</p>
          :
          <>
            <div className={"mt-8 flex flex-wrap"}>
              {posts.map((post) => (
                <SecondPost
                  key={post.post_id}
                  photoURL={post.photo_URL}
                  createdAt={post.createdAt}
                  postTitle={post.post_title}
                  postBody={post.post_body}
                  onClick={() => handleClick(post.post_id)}
                  editHandler={() => navigate(`/blogs/edit/${post.post_id}`)}
                />
              ))}
            </div>
            )}
          </>
      }
    </div>
  );
};