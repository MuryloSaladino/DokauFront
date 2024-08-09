import { RouteObject } from "react-router-dom";
import Home from "../pages/public/Home";

const openRoutes:RouteObject[] = [
    {
        path: "/",
        element: <Home/>
    }
]

export default openRoutes