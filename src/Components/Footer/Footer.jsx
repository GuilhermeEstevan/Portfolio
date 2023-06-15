import { FooterContainer } from "./index"
import { contactLinks } from "../../Utils/Links"
import ContactForm from "../ContactForm/ContactForm"

const Footer = () => {



  return (
    <FooterContainer id="contact">
      <div className="title">
        <h2>Contato</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center contact-container">
        <ul className="links">
          {contactLinks.map((link, index) => {
            const { id, text, url, icon } = link
            console.log(index);
            return (
              <li key={id}>
                <a href={url} target="blank">
                  <span
                    className="icon">
                    {icon}
                  </span>
                </a>
                <p>{text}</p>
              </li>)
          })}
        </ul>
        <ContactForm />
      </div>
    </FooterContainer>
  )
}
export default Footer