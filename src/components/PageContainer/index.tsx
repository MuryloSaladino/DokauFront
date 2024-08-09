import { ReactNode } from "react"

interface IPageContainerProps {
    children: ReactNode
}

const PageContainer = ({ children }:IPageContainerProps) => {

    return (
        <>
            { children }
        </>
    )
}

export default PageContainer
