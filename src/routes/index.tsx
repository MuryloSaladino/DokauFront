import { useState } from "react"
import { createBrowserRouter, RouteObject, RouterProvider } from "react-router-dom"

const Routes = () => {

    const [routes, setRoutes] = useState<RouteObject[]>([])

    return(
        <RouterProvider router={createBrowserRouter(routes)}/>
    )
}

export default Routes