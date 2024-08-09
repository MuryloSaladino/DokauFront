import { AppBar, Toolbar } from "@mui/material"
import { ReactNode } from "react"

interface IPageContainerProps {
    children?: ReactNode
    noHeader?: boolean;
    noFooter?: boolean;
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
