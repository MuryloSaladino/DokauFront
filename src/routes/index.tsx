import { useContext, useEffect, useState } from "react"
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom"
import { UserContext } from "../providers/UserContext"
import openRoutes from "./openRoutes"

const Routes = () => {

    const { user } = useContext(UserContext)
    const [routes, setRoutes] = useState<RouteObject[]>([])

    useEffect(() => {
        if(user)
            setRoutes([...openRoutes])
        else    
            setRoutes([...openRoutes])
    }, [user])

    return(
        <RouterProvider router={createBrowserRouter(routes)}/>
    )
}

export default Routes