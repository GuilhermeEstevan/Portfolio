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
                {`Olá, sou Guilherme Estevan, um desenvolvedor web dedicado a transformar ideias em realidade por meio da programação. Com formação em Engenharia Mecânica, descobri minha verdadeira paixão no mundo da programação.

Iniciei minha jornada autodidata no desenvolvimento web, onde me encantei pelo poder e versatilidade do React. Atualmente, estou aprimorando minhas habilidades por meio do Curso Técnico de Desenvolvimento de Sistemas no Senac, focado em me tornar um profissional mais completo e capacitado.

`}
              </p>
              <p>
                Especializado em tecnologias modernas como React, Node.js, TypeScript e MongoDB, estou animado para aplicar meu conhecimento e contribuir para projetos inovadores. Acredito que a aprendizagem contínua é essencial para o crescimento profissional, e estou comprometido em buscar excelência no desenvolvimento web.

                Estou aberto a oportunidades de colaboração e ansioso para explorar como posso agregar valor aos projetos em que me envolver.
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
              <button>MySql</button>
            </div>
          </div>
        </div>
      </div>
    </AboutContainer >
  )
}
export default About