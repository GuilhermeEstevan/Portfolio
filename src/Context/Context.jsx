import { useContext, createContext, useState } from "react";


const GlobalContext = createContext()

export const GlobalProvider = ({ children }) => {

    // SIDEBAR
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }
    const openSidebar = () => {
        setIsSidebarOpen(true)
    }





    return (
        <GlobalContext.Provider value={{
            isSidebarOpen,
            closeSidebar,
            openSidebar,
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(GlobalContext)
}