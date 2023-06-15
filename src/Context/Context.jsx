import { useContext, createContext, useState, useEffect } from "react";


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


    // IDADE
    const [age, setAge] = useState(null)

    useEffect(() => {
        const birthDate = new Date(1999, 9, 15)
        const today = new Date()

        const hasBirthdayPassed = today.getMonth() > birthDate.getMonth()
            || (today.getMonth() === birthDate.getMonth()
                && today.getDate() >= birthDate.getDate())

        if (hasBirthdayPassed) {
            let age = today.getFullYear() - birthDate.getFullYear()
            setAge(age)
        } else {
            let age = today.getFullYear() - birthDate.getFullYear()
            age = age - 1
            setAge(age)
        }
    }, [])



    return (
        <GlobalContext.Provider value={{
            isSidebarOpen,
            closeSidebar,
            openSidebar,
            age
        }}>
            {children}
        </GlobalContext.Provider>
    )
}


export const useGlobalContext = () => {
    return useContext(GlobalContext)
}