import { SidebarContainer } from "./index"
import { FaTimes } from 'react-icons/fa'
import { links } from "../../Utils/Links"
import logo from '../../assets/logo_3.png'
import { useGlobalContext } from "../../Context/Context"

const Sidebar = () => {

    const { isSidebarOpen, closeSidebar } = useGlobalContext()


    return (
        <SidebarContainer>
            <div className={isSidebarOpen ? 'sidebar show-sidebar' : 'sidebar'}>
                <div className="sidebar-header">
                    <img src={logo} alt="logo" className="logo" />
                    <button
                        className="close-btn"
                        onClick={closeSidebar}>
                        <FaTimes />
                    </button>
                </div>
                <ul className="links">
                    {links.map((link) => {
                        const { text, id, url } = link
                        return (
                            <li key={id}>
                                <a href={url}
                                    onClick={closeSidebar}>
                                    {text}
                                </a>
                            </li>)
                    })}
                </ul>
            </div>
        </SidebarContainer>
    )
}
export default Sidebar