import { HeroContainer } from "./index"
import selfie from '../../assets/Selfie.jpg'



const Hero = () => {



  return (
    <HeroContainer>
      <div className="section-center">
        <div className="hero-content">
          <div className="content">
            <h3>Olá, eu sou</h3>
            <h1 className="name">Guilherme Estevan</h1>
            <h4>desenvolvedor web</h4>
          </div>
          <div className="image-container">
            <img src={selfie} alt="" />
          </div>
        </div>
      </div>
    </HeroContainer>
  )
}
export default Hero