import { createContext } from "react";

export const LabSciContext = createContext()

const LabSciContextProvider = (props) => {
    const value = {

    }
    return(
        <LabSciContext.Provider value={value}>
            {props.children}
        </LabSciContext.Provider>
    )
}

export default LabSciContextProvider