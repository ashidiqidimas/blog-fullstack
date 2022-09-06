import {useParams} from "react-router";
import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function DetailPostPage() {
  const { postId } = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  const fetch = () => {
    axios
      .get(`http://localhost:8000/post/${postId}`)
      .then((res) => setPost(res.data))
      .catch((e) => alert("Error with " + e)); // TODO: Handle 404
  };

  useEffect(() => fetch(), []);

  const options = { year: "numeric", month: "long", day: "numeric" };
  const localizedDate = new Date(post.createdAt).toLocaleDateString("id-ID", options);

  return (
    <div className={"lg:container pt-14 px-5"}>
      <div className={"mt-6"}>
        <div className={"flex justify-between items-center"}>
          <button onClick={() => navigate(-1)}>
            <img src="/back-icon.png" alt="" className={"h-10"} />
          </button>
          <p
            className={"text-secondary-text text-lg leading-7 font-medium"}
          >{localizedDate}
          </p>
        </div>
      </div>
      <article className={"mt-8"}>
        <h1
          className={"text-5xl leading-none font-semibold text-white w-3/5"}>{post.post_title}</h1>
        <div className={"px-40 py-2"}>
          <img src={post.photo_URL} alt=""
               className={"mt-8 rounded-xl aspect-video object-cover w-full"} />
        </div>
        <p className={"mt-8 text-primary-text"} style={{ whiteSpace: "pre-line" }}>
          {post.post_body}
        </p>
      </article>
    </div>
  );
};