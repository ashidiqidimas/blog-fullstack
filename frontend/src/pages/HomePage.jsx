import FirstPost from "../components/FirstPost";
import SecondPost from "../components/SecondPost";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function HomePage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  const fetchPosts = () => {
    axios
      .get("http://localhost:8000/post/")
      .then((res) => {
        const listPosts = res.data;
        setPosts(listPosts);
      })
      .catch((e) => alert("error with " + e));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const handleClick = (id) => {
    navigate(`/blogs/${id}`);
  };

  return (
    <div className={"lg:container pt-[7.5rem] px-5"}>
      {
        posts.length === 0 ?
          <p>Posts is still empty :(</p>
          :
          <>
            <FirstPost
              photoURL={posts[0].photo_URL}
              createdAt={posts[0].createdAt}
              postTitle={posts[0].post_title}
              postBody={posts[0].post_body}
              onClick={() => handleClick(posts[0].post_id)}
            />
            <div className={"mt-8 flex flex-wrap"}>
              {posts.map((post, index) => (
                index !== 0 ?
                  <SecondPost
                    key={post.post_id}
                    photoURL={post.photo_URL}
                    createdAt={post.createdAt}
                    postTitle={post.post_title}
                    postBody={post.post_body}
                    onClick={() => handleClick(post.post_id)}
                    handleEdit={undefined}
                  />
                  :
                  ""
              ))}
            </div>
            )}
          </>
      }
    </div>
  );
};