import {Link, useLocation} from "react-router-dom";
import {useCookies} from "react-cookie";

export default function Navbar() {
  const path = useLocation().pathname;
  const [cookies] = useCookies(["fullname"]);

  return (
    <nav className={"fixed top-0 z-50 w-full flex justify-between bg-slate-900 px-6 pt-4 pb-2"}>
      <Link to="/">
        <div className={"flex gap-2 items-center"}>
          <img src="/BlogU-logo.png" alt="" className={"h-8 w-8"} />
          <span className={"text-xl leading-7 font-medium text-primary-text"}>BlogU</span>
        </div>
      </Link>
      {cookies.fullname === undefined // There is no user logged in
        ? <ul
          className={`flex text-primary-text gap-2 text-lg leading-7 font-medium 
        ${path === "/register" || path === "/login" ? "hidden" : ""}`
          }>
          <li><Link to="/login">
            <div
              className={"rounded-lg flex justify-center items-center w-[101px] border-2 border-sky-600"}>
              Log In
            </div>
          </Link></li>
          <li><Link to="/register">
            <div
              className={"rounded-lg flex justify-center items-center w-[101px] " +
                "bg-sky-600 border-2 border-sky-600"
              }>
              Register
            </div>
          </Link></li>
        </ul>
        :
        <Link to="/dashboard">
          <div className={"flex text-primary-text gap-2 text-lg leading-7 items-center"}>
            <img src="/profile-icon.png" alt="" className={"h-[28px] w-[28px]"} />
            <span>Dimas Ashidiqi</span>
          </div>
        </Link>
      }
    </nav>
  );
};