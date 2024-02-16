import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'
import { IoHomeSharp } from "react-icons/io5";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";

export const links = [
  {
    id: 1,
    text: 'Home',
    url: '#home',
    icon: <IoHomeSharp />
  },
  {
    id: 2,
    text: 'Sobre',
    url: '#about',
    icon: <FaUserAlt />
  },
  {
    id: 3,
    text: 'Projetos',
    url: '#projects',
    icon: <MdOutlineWork />
  },
  {
    id: 4,
    text: 'Tecnologias',
    url: '#tech',
    icon: <IoCodeSlash />
  },
  {
    id: 5,
    text: 'Contato',
    url: '#contact',
    icon: <TiMessages />
  },
]

export const contactLinks = [

  {
    id: 1,
    url: 'https://github.com/GuilhermeEstevan',
    icon: <FaGithub />,
    text: 'Github'
  },
  {
    id: 2,
    url: 'https://www.linkedin.com/in/guilherme-estevan/',
    icon: <FaLinkedin />,
    text: 'Linkedin'
  },
  {
    id: 3,
    url: 'https://wa.me/5581997311453',
    icon: <FaWhatsapp />,
    text: 'Whatsapp'
  },


]

