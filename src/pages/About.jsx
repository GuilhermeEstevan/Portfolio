import { Wrapper } from "../assets/Wrappers/about"
import icon from '../assets/images/code_think.svg'
import Title from "../Components/title/Title"
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css"
import timelineElements from "../Components/timeline/TimelineElements"
import { MdOutlineWork } from "react-icons/md";
import { IoIosSchool } from "react-icons/io";

const About = () => {

  let workIconStyles = { background: "#3b9eff" }
  let schoolIconStyles = { background: "#43484e" }

  return (

    <Wrapper id="about">
      <Title text="Sobre" />
      <div className="about-content">
        <div className="image-container">
          <img src={icon} alt="" />
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
              Especializado em tecnologias modernas como React, Node.js, TypeScript e MongoDB e desenvolvendo meus conhecimentos em Java, estou animado para aplicar meu conhecimento e contribuir para projetos inovadores. Acredito que a aprendizagem contínua é essencial para o crescimento profissional, e estou comprometido em buscar excelência no desenvolvimento web
            </p>
          </div>
        </div>
        <div className="timeline">
          <VerticalTimeline>
            {timelineElements.map((element) => {

              let isWorkIcon = element.icon === "work"

              return (
                <VerticalTimelineElement
                  key={element.id}
                  date={element.date}
                  dateClassName="date"
                  iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
                  icon={isWorkIcon ? <MdOutlineWork /> : <IoIosSchool />}>

                  <h3 className="title">{element.title}</h3>
                  <h5>{element.location}</h5>
                  <p>{element.description}</p>
                </VerticalTimelineElement>
              )
            })}
          </VerticalTimeline>
        </div>
      </div>
    </Wrapper >
  )
}
export default About