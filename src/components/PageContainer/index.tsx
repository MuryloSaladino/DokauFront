import { AppBar, Toolbar } from "@mui/material"
import { ReactNode } from "react"

interface IPageContainerProps {
    children?: ReactNode
}

const PageContainer = ({ children }:IPageContainerProps) => {

    return (
        <>
            <AppBar>
                <Toolbar>

                </Toolbar>
            </AppBar>
            { children }
        </>
    )
}

export default PageContainer
