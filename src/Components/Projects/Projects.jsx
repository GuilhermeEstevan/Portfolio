import { ProjectsContainer } from "./index"
import unsplash from '../../assets/unsplash_project.png'
import comfy from '../../assets/comfy_project.png'
import magnus from '../../assets/magnus_project.png'
import petLovers from '../../assets/petlovers.print.png'
import freela from "../../assets/DhiegoRodrigues_freela.png"
import ProjectBox from "./ProjectBox"

const Projects = () => {

    const unsplashUrl = 'https://search-images-app-unsplash.netlify.app'
    const magnusUrl = 'https://loja-magnus.netlify.app'
    const comfyUrl = 'https://comfysloth-project.netlify.app'
    const petLoversUrl = "https://petloverswebsite.netlify.app"
    const freelaUrl = "https://dhiegorodrigues.adv.br/"

    return (
        <ProjectsContainer id="projects">
            <div className="title">
                <h2>Projetos</h2>
                <div className="underline"></div>
            </div>
            <div className="section-center">
                <div className="projects-container">
                    <ProjectBox name="Unsplash" imageUrl={unsplash} url={unsplashUrl} />
                    <ProjectBox name="Magnus" imageUrl={magnus} url={magnusUrl} />
                    <ProjectBox name="Comfy" imageUrl={comfy} url={comfyUrl} />
                    <ProjectBox name="Pet Lovers" imageUrl={petLovers} url={petLoversUrl} />
                    <ProjectBox name="Freelance" imageUrl={freela} url={freelaUrl} />
                </div>
            </div>
        </ProjectsContainer>
    )
}
export default Projects