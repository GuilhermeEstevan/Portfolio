import { Wrapper } from '../assets/Wrappers/projects'
import unsplash from "../assets/images/unsplash_project.png"
import comfy from '../assets/images/comfy_project.png'
import magnus from '../assets/images/magnus_project.png'
import petLovers from '../assets/images/petlovers.png'
import jobster from "../assets/images/Jobster.png"
import backroads from "../assets/images/backroads.png"
import ProjectBox from "../Components/Projects/ProjectBox"
import Title from '../Components/title/Title'
import { projectsData } from '../Components/Projects/projectLinks'

const Projects = () => {

    const unsplashUrl = 'https://search-images-app-unsplash.netlify.app'
    const magnusUrl = 'https://loja-magnus.netlify.app'
    const comfyUrl = 'https://comfysloth-project.netlify.app'
    const petLoversUrl = "https://petloverswebsite.netlify.app"
    const jobsterUrl = "https://jobster-ts.netlify.app/"
    const backroadsurl = "https://backroadsapp-gui.netlify.app"


    const unsplashRepo = 'https://github.com/GuilhermeEstevan/React---Search-Images'
    const magnusRepo = 'https://github.com/GuilhermeEstevan/Loja-Magnus'
    const comfyRepo = 'https://github.com/GuilhermeEstevan/comfy-sloth-TS'
    const petLoversRepo = "https://github.com/GuilhermeEstevan/PetLovers"
    const jobsterRepo = "https://github.com/GuilhermeEstevan/Jobster"
    const backroadsRepo = "https://github.com/GuilhermeEstevan/temp-backrodas-app"



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