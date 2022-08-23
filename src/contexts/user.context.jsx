import {createContext, useState } from "react";

export const UserContext = createContext({
    currentUser: null,
    setCurretntUser: ()=> null
});


export const UserProvider = ({children}) => { 
    const [currentUser, setCurretntUser] = useState(null),

    value = {currentUser, setCurretntUser}

    return(
        <UserContext.Provider value={value}>{children}</UserContext.Provider>
    )
}
