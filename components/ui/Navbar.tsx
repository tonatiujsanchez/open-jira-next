import { FC } from "react"
import NextLink from "next/link";

import { AppBar, IconButton, Link, ThemeProvider, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useUI } from "../../hooks/useUI";
import { darkTheme } from "../../themes";

export const Navbar: FC = () => {

    const { openSideMenu } = useUI()    


    return (
        <AppBar position="sticky">
            <Toolbar>
            <ThemeProvider theme={darkTheme} >
                <IconButton
                    size="large"
                    edge="start"
                    onClick={openSideMenu}
                >
                    <MenuOutlinedIcon />
                </IconButton>
                <NextLink href="/" passHref>
                    <Link underline="none" color="white">
                        <Typography variant="h6">Open Jira</Typography>
                    </Link>
                </NextLink>
            </ThemeProvider>
            </Toolbar>
        </AppBar>
    )
}
