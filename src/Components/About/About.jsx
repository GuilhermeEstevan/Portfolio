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
                {`Sou um desenvolvedor web dedicado a transformar ideias em realidade através da programação.
              Tenho ${age} anos de idade e sou formado em Engenharia Mecânica, descobri no mundo da programação o que realmente desperta minha vontade de aprender e crescer profissionalmente.`}
              </p>
              <p>
                Iniciei meus estudos sobre desenvolvimento web de forma autodidata, foi quando me identifiquei com React. Atualmente, estou aprimorando minhas habilidades através do Curso Técnico de desenvolvimento de sistemas no Senac, buscando me tornar um profissional mais completo e capacitado.
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