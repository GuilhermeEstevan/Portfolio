import { AboutContainer } from "./index"
import icon from '../../assets/code_think.svg'
import { useTheme } from "styled-components"
import { useState } from "react"
import { useGlobalContext } from "../../Context/Context"

const About = () => {

  const { age } = useGlobalContext()

  return (
    <AboutContainer id="about">
      <div className="title">
        <h2>Sobre Mim</h2>
      </div>
      <div className="section-center">
        <div className="about-content">
          <div className="image-container">
            <img src={icon} alt="" />
          </div>
          <div className="content">
            <div className="about-text">
              <p>
                Desenvolvedor web, formado em Engenharia Mecânica e cursando técnico de Desenvolvimento de sistemas.
              </p>
              <p>
                Iniciei minha jornada autodidata no desenvolvimento web, onde me encantei pelo poder e versatilidade do React. Atualmente, estou aprimorando minhas habilidades por meio do Curso Técnico de Desenvolvimento de Sistemas no Senac, focado em me tornar um profissional mais completo e capacitado.
              </p>
              <p>
                Especializado em tecnologias modernas como React, Node.js, TypeScript e MongoDB e desenvolvendo meus conhecimentos em Java, estou animado para aplicar meu conhecimento e contribuir para projetos inovadores. Acredito que a aprendizagem contínua é essencial para o crescimento profissional, e estou comprometido em buscar excelência no desenvolvimento web
              </p>
            </div>
            <div className="knowledges">
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>ReactJs</button>
              <button>TypeScript</button>
              <button>NodeJs</button>
              <button>MongoDB</button>
              <button>MySQL</button>
              <button>Java</button>
              <button>Spring Boot</button>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer >
  )
}
export default About