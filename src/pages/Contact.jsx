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
            <a href="">
              <span>
                <FaWhatsapp />
              </span>
            </a>
            <span className="title">WhatsApp</span>
            <span className="info">(81) 99731-1453</span>
          </div>

          <div className="social">
            <a href="">
              <span>
                <MdEmail />
              </span>
            </a>
            <span className="title">Email</span>
            <span className="info">guilhermeestevangui@hotmail.com</span>
          </div>

          <div className="social">
            <a href="">
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
