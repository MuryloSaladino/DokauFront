import { RouteObject } from "react-router-dom";
import Home from "../pages/public/Home";

const mainRoutes:RouteObject[] = [
    {
        path: "/",
        element: <Home/>
    }
]

export default mainRoutes