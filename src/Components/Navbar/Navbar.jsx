import { Wrapper } from "../../assets/Wrappers/navbar";
import { links } from "../../Utils/Links";
import logo from "../../assets/images/logo.png";
import { contactLinks } from "../../Utils/Links";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="nav-header">
        <img src={logo} alt="" />
      </div>
      <div className="nav-content">
        <div className="nav-center">
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url, icon } = link;

              return (
                <li key={id}>
                  <Link to={url} className="nav-link">
                    <span>{icon}</span>
                    <span> {text}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <ul className="social-links">
            {contactLinks.map((link) => {
              const { id, text, url, icon } = link;

              return (
                <li key={id}>
                  <a href={url} target="_blank">
                    <span>{icon}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;
