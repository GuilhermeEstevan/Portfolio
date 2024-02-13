
const ProjectBox = ({ name, imageUrl, url }) => {
    return (
        <div className="project-box">
            <div className="image">
                <a href={url} target="blank">
                    <img src={imageUrl} alt="" />
                </a>
            </div>
            <div className="subtitle">
                <h5>{name}</h5>
            </div>
        </div>
    )
}
export default ProjectBox