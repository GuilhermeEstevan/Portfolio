import { Wrapper } from "../assets/Wrappers/about"
import icon from '../assets/images/code_think.svg'
import Title from "../Components/title/title"
import Lottie from "lottie-react"
import animation from "../assets/animation/Animationdev.json"
import { useRef } from "react"

const About = () => {

  // const animationRef = useRef()

  return (

    <Wrapper id="about">
      <Title text="Sobre" />
      <div className="about-content">
        <div className="image-container">
          <img src={icon} alt="" />
          {/* <Lottie className="animation"
            lottieRef={animationRef}
            animationData={animation}
            loop={false}
            onComplete={() => {
              animationRef.current.goToAndPlay(30, true)
            }} /> */}
        </div>
        <div className="content">
          <div className="about-text">
            <h2 >Eu sou {" "}
              <span className="contrast">
                Guilherme Estevan
              </span>
            </h2>
            <p>
              Desenvolvedor web, formado em Engenharia Mecânica e cursando técnico de Desenvolvimento de sistemas.
              Iniciei minha jornada autodidata no desenvolvimento web, onde me encantei pelo poder e versatilidade do React. Atualmente, estou aprimorando minhas habilidades por meio do Curso Técnico de Desenvolvimento de Sistemas no Senac, focado em me tornar um profissional mais completo e capacitado.
            </p>
            <p>
              Especializado em tecnologias modernas como React, Node.js, TypeScript e MongoDB e desenvolvendo meus conhecimentos em Java, estou animado para aplicar meu conhecimento e contribuir para projetos inovadores. Acredito que a aprendizagem contínua é essencial para o crescimento profissional, e estou comprometido em buscar excelência no desenvolvimento web
            </p>
          </div>
        </div>
      </div>
    </Wrapper >
  )
}
export default About