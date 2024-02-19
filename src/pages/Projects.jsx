import { Wrapper } from '../assets/Wrappers/projects'
import ProjectBox from "../Components/Projects/ProjectBox"
import Title from '../Components/title/Title'
import { projectsData } from '../Components/Projects/projectLinks'

const Projects = () => {



    return (
        <Wrapper id="projects">
            <Title text="Projetos" />
            <div className="projects">
                <div className="projects-container">
                    {projectsData.projects.map((project) => {
                        const { id, name, imageUrl, url, repository } = project
                        return (
                            <ProjectBox
                                key={id}
                                name={name}
                                imageUrl={imageUrl}
                                url={url}
                                repository={repository} />
                        )
                    })}
                </div>
            </div>
        </Wrapper>
    )
}
export default Projects