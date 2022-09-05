import AuthInput from "../components/AuthInput";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import axios from "axios";

export default function LoginPage() {
  const [values, setValues] = useState();
  const navigate = useNavigate();

  const handleOnChange = (e) => {
    console.log(values);
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
    axios
      .post("http://localhost:8000/user/register", values)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => alert("Error with " + err));
  };

  return (
    <div className={"lg:container flex h-screen py-14"}>
      <div className={"flex basis-1/2"}>
        <img src="/an-user-registering-an-account.png" alt="" className={"object-contain"} />
      </div>
      <div className={"flex basis-1/2 items-center justify-center"}>
        <div className={"bg-base px-8 py-12 flex flex-col gap-y-4 rounded-2xl"}>
          <p className={"text-3xl leading-9 font-medium text-primary-text"}>
            Log In to Continue
          </p>
          <form onSubmit={handleSubmit} className={"flex flex-col gap-y-4 mt-4"}>
            <AuthInput label={"Email"} type={"email"} placeholder={"example@mail.com"} name={"email"}
                       onChange={handleOnChange} />
            <AuthInput label={"Password"} type={"password"} placeholder={"password"} name={"password"}
                       onChange={handleOnChange} />
            <div className={"mt-4"}>
              <button
                type={"submit"}
                className={"w-full bg-sky-600 py-3 rounded-lg text-primary-text text-lg font-bold"}
              >
                Register
              </button>
            </div>
          </form>
          <div className={"text-primary-text mt-2"}>
            Don't an account? <Link to={"/login"}><span
            className={"text-sky-600 underline font-bold"}>Log In</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};