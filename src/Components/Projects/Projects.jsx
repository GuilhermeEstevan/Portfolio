import { ProjectsContainer } from "./index"
import unsplash from '../../assets/unsplash_project.png'
import comfy from '../../assets/comfy_project.png'
import magnus from '../../assets/magnus_project.png'


const Projects = () => {

    const unsplashUrl = 'https://search-images-app-unsplash.netlify.app/'
    const magnusUrl = 'https://loja-magnus.netlify.app/'
    const comfyUrl = 'https://comfysloth-project.netlify.app/'

    return (
        <ProjectsContainer id="projects">
            <div className="title">
                <h2>Projetos</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center">
                <div className="projects-container">
                    <div className="project-box">
                        <div className="image">
                            <a href={unsplashUrl} target="blank">
                                <img src={unsplash} alt="" />
                            </a>
                        </div>
                        <div className="subtitle">
                            <h5>Unsplash</h5>
                        </div>
                    </div>
                    <div className="project-box">
                        <div className="image">
                            <a href={magnusUrl} target="blank">
                                <img src={magnus} alt="" />
                            </a>
                        </div>
                        <div className="subtitle">
                            <h5>Magnus</h5>
                        </div>
                    </div>
                    <div className="project-box">
                        <div className="image">
                            <a href={comfyUrl} target="blank">
                                <img src={comfy} alt="" />
                            </a>
                        </div>
                        <div className="subtitle">
                            <h5>comfy</h5>
                        </div>
                    </div>
                </div>
            </div>
        </ProjectsContainer>
    )
}
export default Projects