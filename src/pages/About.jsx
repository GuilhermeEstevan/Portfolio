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

  let workIconStyles = { background: "#2870bd" }
  let schoolIconStyles = { background: "#43484e" }

  return (

    <Wrapper id="about">
      <Title text="Sobre" />
      <div className="about-content">
        <div className="resume">
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
                Desenvolvedor web com formação em Engenharia Mecânica e atualmente cursando técnico de Desenvolvimento de Sistemas no Senac. Autodidata em desenvolvimento web, com foco em React, Node.js, TypeScript e MongoDB. Também estou expandindo meu conhecimento em Java. Comprometido com a aprendizagem contínua e buscando excelência no desenvolvimento web.
              </p>
            </div>
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
                  <h5>{element.subtitle}</h5>
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