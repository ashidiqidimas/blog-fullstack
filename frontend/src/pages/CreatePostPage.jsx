import axios from "axios";
import {useEffect, useRef, useState} from "react";
import {useCookies} from "react-cookie";
import {useNavigate} from "react-router-dom";

export default function CreatePostPage() {
  const [values, setValues] = useState({});
  const [cookies] = useCookies(["userId", "accessToken"]);
  const navigate = useNavigate();
  const textareaRef = useRef(null);

  // check whether user has logged in
  useEffect(() => {
    if (!cookies.userId) {
      navigate("/register");
    }
  }, []);

  useEffect(() => {
    textareaRef.current.style.height = "200px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [values]);

  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
    console.log(values);
  };

  const handleSubmit = (event) => {
    console.log(cookies.accessToken);
    event.preventDefault();
    axios
      .post("http://localhost:8000/post/create", values, {
        headers: { Authorization: `Bearer ${cookies.accessToken}` },
      })
      .then((res) => {
        alert("Success created a post");
        navigate("/dashboard");
      })
      .catch((e) => alert("Error with" + e));
  };

  return (
    <div className={"lg:container pt-14 px-5 "}>
      <div className={"flex justify-center items-center bg-base mt-8 px-8 py-12 rounded-xl"}>
        <form onSubmit={handleSubmit} className={"w-full flex flex-col gap-y-8"}>
          <div className={"w-full"}>
            <label className={"text-secondary-text"}>Post Title</label>
            <input
              type="text"
              name={"postTitle"}
              placeholder={"A cool title"}
              onChange={handleChange}
              className={"bg-slate-900 text-secondary-text placeholder:text-tertiary-text " +
                "outline-none border-2 border-transparent focus:border-sky-800 rounded-lg " +
                "w-full text-xl leading-7 py-2 px-4 mt-1"}
            />
          </div>
          <div className={"w-full"}>
            <label className={"text-secondary-text"}>Photo URL</label>
            <input
              type="text"
              name={"photoURL"}
              placeholder={"Copy a link to a photo here"}
              onChange={handleChange}
              className={"bg-slate-900 text-secondary-text placeholder:text-tertiary-text " +
                "outline-none border-2 border-transparent focus:border-sky-800 rounded-lg " +
                "w-full text-xl leading-7 py-2 px-4 mt-1"}
            />
          </div>
          <div className={"w-full"}>
            <label className={"text-secondary-text"}>Post Body</label>
            <textarea
              name={"postBody"}
              placeholder={"Body"}
              ref={textareaRef}
              onChange={handleChange}
              className={"bg-slate-900 text-secondary-text placeholder:text-tertiary-text " +
                "outline-none border-2 border-transparent focus:border-sky-800 rounded-lg " +
                "w-full text-xl leading-7 py-2 px-4 mt-1"}
            />
          </div>
          <button
            type="submit"
            className={"flex justify-center text-white gap-x-2 px-4 py-3 bg-sky-600 rounded-lg text-lg leading-7 font-semibold"}
          >
            Post
          </button>
        </form>
      </div>
    </div>
  );
};