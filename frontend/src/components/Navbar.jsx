import {Link} from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
    </div>
  );
};