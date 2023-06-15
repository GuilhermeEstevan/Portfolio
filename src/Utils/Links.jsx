import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa'



export const links = [
  {
    id: 1,
    text: 'Sobre Mim',
    url: '#about',
  },
  {
    id: 2,
    text: 'Projetos',
    url: '#projects',
  },
  {
    id: 3,
    text: 'Contato',
    url: '#contact',
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

