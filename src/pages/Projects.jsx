import { Wrapper } from '../assets/Wrappers/projects'
import unsplash from "../assets/images/unsplash_project.png"
import comfy from '../assets/images/comfy_project.png'
import magnus from '../assets/images/magnus_project.png'
import petLovers from '../assets/images/petlovers.png'
import freela from "../assets/images/DhiegoRodrigues_freelance.png"
import jobster from "../assets/images/Jobster.png"
import backroads from "../assets/images/backroads.png"
import ProjectBox from "../Components/Projects/ProjectBox"
import Title from '../Components/title/Title'

const Projects = () => {

    const unsplashUrl = 'https://search-images-app-unsplash.netlify.app'
    const magnusUrl = 'https://loja-magnus.netlify.app'
    const comfyUrl = 'https://comfysloth-project.netlify.app'
    const petLoversUrl = "https://petloverswebsite.netlify.app"
    const freelaUrl = "https://dhiegorodrigues.adv.br/"
    const jobsterUrl = "https://jobster-ts.netlify.app/"
    const backroadsurl = "https://backroadsapp-gui.netlify.app"

    return (
        <Wrapper id="projects">
            <Title text="Projetos" />
            <div className="projects">
                <div className="projects-container">
                    <ProjectBox name="Pet Lovers" imageUrl={petLovers} url={petLoversUrl} />
                    <ProjectBox name="Comfy" imageUrl={comfy} url={comfyUrl} />
                    <ProjectBox name="Unsplash" imageUrl={unsplash} url={unsplashUrl} />
                    <ProjectBox name="Magnus" imageUrl={magnus} url={magnusUrl} />
                    <ProjectBox name="Backroads" imageUrl={backroads} url={backroadsurl}/>
                    <ProjectBox name="Jobster" imageUrl={jobster} url={jobsterUrl} />
                    {/* <ProjectBox name="Freelance" imageUrl={freela} url={freelaUrl} /> */}
                </div>
            </div>
        </Wrapper>
    )
}
export default Projects