import { createContext } from "react"

import PropTypes from "prop-types"

// eslint-disable-next-line react-refresh/only-export-components
export const SomeContext = createContext();

export const HookUseContext = ({children}) => {
    const contextValue = "Testando";

    return(
        <SomeContext.Provider value={{ contextValue }} >
            {children}
        </SomeContext.Provider>
    )
}

HookUseContext.propTypes = {
    children: PropTypes.node
}