import { Wrapper } from '../assets/Wrappers/home';
import selfie from '../assets/images/Selfie.jpg'
import Typewriter from "../Utils/TypeWriter";
import { Button } from "@radix-ui/themes"

const Home = () => {


  return (
    <Wrapper>
      <div className="hero-content">
        <div className="content">
          <h4>Olá, meu nome é <span className="contrast signature">Guilherme Estevan</span></h4>
          <h2 >Eu sou {" "}
            <span className="contrast">
              <Typewriter text="Desenvolvedor Web" delay={100} />
            </span>
          </h2>
          <p>
            Sou um desenvolvedor web altamente adaptável e ávido por aprendizado, especializado na criação de sites e aplicações web que se destacam pelo desempenho superior e oferecem uma experiência de usuário excepcional.
          </p>
          <Button variant="soft" className='about-btn'>Sobre Mim</Button>
        </div>
        <div className="image-container">
          <img src={selfie} alt="" />
        </div>
      </div>
    </Wrapper>
  )
}
export default Home