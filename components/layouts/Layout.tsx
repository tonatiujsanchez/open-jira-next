import { FC } from "react"
import Head from "next/head"

import { Box } from "@mui/material"
import { Navbar, Sidebar } from "../ui"

interface Props {
    children: JSX.Element,
    title?: string,
}


export const Layout:FC<Props> = ({ children, title= 'Open Jira' }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Head>
                <title>{ title }</title>
            </Head>

            <Navbar />
            <Sidebar />
            <Box sx={{ padding: '10px 20px' }}>
                { children }
            </Box>
        </Box>
    )
}
