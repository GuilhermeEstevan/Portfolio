import { FaBars } from 'react-icons/fa'
import { NavContainer } from './index'
import logo from '../../assets/logo_3.png'
import { links } from '../../Utils/Links'
import { useGlobalContext } from '../../Context/Context'
import { Link } from 'react-scroll'


const Navbar = () => {

  const { openSidebar } = useGlobalContext()

  return (
    <NavContainer>
      <div className="nav-center">
        <div className="nav-header">
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <button
            className='nav-toggle'
            onClick={openSidebar}>
            <FaBars />
          </button>
        </div>
        <ul className='nav-links'>
          {links.map((link) => {
            const { id, text, url } = link

            return (
              <li key={id}>
                <a
                  href={url}>
                  {text}
                </a>
              </li>)
          })}
        </ul>
      </div>
    </NavContainer>
  )
}
export default Navbar