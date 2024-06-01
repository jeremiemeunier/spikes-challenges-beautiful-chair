import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <AppName />
      <Navigation />
    </div>
  );
};

export default Header;

export const AppName = () => {
  return (
    <Link className="appname" to={"/"}>
      Cozy®
    </Link>
  );
};

const Navigation = () => {
  return (
    <div className="nav">
      <ul>
        <li>
          <Link className="active" to={"/shop"}>
            Shop
          </Link>
        </li>
        <li>
          <Link to={"/collective"}>Collective</Link>
        </li>
        <li>
          <Link to={"/designers"}>Designers</Link>
        </li>
        <li>
          <Link to={"/about"}>About us</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
      </ul>
    </div>
  );
};
