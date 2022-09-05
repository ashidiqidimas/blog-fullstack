import AuthInput from "../components/AuthInput";
import {Link} from "react-router-dom";

export default function RegisterPage() {
  return (
    <div className={"lg:container flex h-screen py-14"}>
      <div className={"flex basis-1/2"}>
        <img src="/an-user-registering-an-account.png" alt="" className={"object-contain"} />
      </div>
      <div className={"flex basis-1/2 items-center justify-center"}>
        <div className={"bg-base px-8 py-12 flex flex-col gap-y-4 rounded-2xl"}>
          <p className={"text-3xl leading-9 font-medium text-primary-text"}>
            To Continue,<br />
            You Must Register First
          </p>
          <form className={"flex flex-col gap-y-4 mt-4"}>
            <AuthInput label={"Full Name"} placeholder={"your name"} name={"fullname"} />
            <AuthInput label={"Email"} placeholder={"email"} name={"email"} />
            <AuthInput label={"Password"} placeholder={"password"} name={"password"} />
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
            Already have an account? <Link to={"/login"}><span className={"text-sky-600 underline font-bold"}>Log In</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
};