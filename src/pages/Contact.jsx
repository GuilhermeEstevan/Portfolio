import Title from "../Components/title/Title";
import { Wrapper } from "../assets/Wrappers/contact";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

import ContactForm from "../Components/contactForm/ContactForm";

const Contact = () => {
  return (
    <Wrapper>
      <Title text="contato" />
      <div className="about-content">
        <div>
          <ContactForm />
        </div>
        <div className="social-links">
          <div className="social">
            <a href="https://wa.me/5581997311453" target="_blank">
              <span>
                <FaWhatsapp />
              </span>
            </a>
            <span className="title">WhatsApp</span>
            <span className="info">(81) 99731-1453</span>
          </div>

          <div className="social">
            <a href="mailto:guilhermeestevangui@hotmail.com" target="_blank">
              <span>
                <MdEmail />
              </span>
            </a>
            <span className="title">Email</span>
            <span className="info">guilhermeestevangui@hotmail.com</span>
          </div>

          <div className="social">
            <a href="https://www.google.com/maps/place/Recife" target="_blank">
              <span>
                <IoLocationSharp />
              </span>
            </a>
            <span className="title">Localização</span>
            <span className="info">Recife, PE</span>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact;
