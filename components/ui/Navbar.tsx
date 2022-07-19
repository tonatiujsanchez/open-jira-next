import { FC } from "react"

import { AppBar, IconButton, ThemeProvider, Toolbar, Typography } from '@mui/material';
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
                <Typography variant="h6">Open Jira</Typography>
            </ThemeProvider>
            </Toolbar>
        </AppBar>
    )
}
