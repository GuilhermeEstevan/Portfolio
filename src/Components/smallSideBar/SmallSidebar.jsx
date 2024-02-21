import { contactLinks, links } from "../../Utils/Links";
import Wrapper from "../../assets/Wrappers/smallSidebar";
import logo from "../../assets/images/logo.png";
import { MdOutlineClose } from "react-icons/md";
import { useGlobalContext } from "../../Context/Context";
import { Link } from "react-router-dom";

const SmallSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();

  return (
    <Wrapper>
      <div
        className={
          isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button className="nav-toggle" onClick={closeSidebar}>
            <MdOutlineClose />
          </button>

          <header>
            <img src={logo} alt="" />
          </header>
          <ul className="nav-links">
            {links.map((link) => {
              const { id, text, url, icon } = link;

              return (
                <Link to={url} onClick={closeSidebar}>
                  <li key={id}>
                    <span className="icon">{icon}</span>
                    <span className="text">{text}</span>
                  </li>
                </Link>
              );
            })}
          </ul>
          <ul className="social-links">
            {contactLinks.map((link) => {
              const { id, text, url, icon } = link;

              return (
                <li key={id}>
                  <a href={url}>
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

export default SmallSidebar;
