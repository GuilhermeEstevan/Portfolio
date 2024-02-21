import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ name, imageUrl, url, repository }) => {
  return (
    <div className="project-box">
      <div className="container">
        <a href={url} target="_blank">
          <img src={imageUrl} alt="" />
        </a>
        <div className="project-info">
          <span>{name}</span>
          <span className="github">
            <a href={repository} target="_blank">
              <FaGithub />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};
export default ProjectBox;
