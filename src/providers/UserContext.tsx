import { createContext, ReactNode, useState } from "react";
import { TUser } from "../types/user";

type TUserContext = {
    user: TUser | null;
}

export const UserContext = createContext({} as TUserContext)

export const UserProvider = ({ children }:{ children:ReactNode }) => {

    const [user, setUser] = useState<TUser | null>(null)

    return (
        <UserContext.Provider 
            value={{
                user: user,
            }} 
            children={ children } 
        />
    )
}