import { FC } from "react"

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { useSidebar } from "../../hooks/useSidebar";

export const Navbar: FC = () => {

    const { openSideMenu } = useSidebar()    


    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                    onClick={openSideMenu}
                >
                    <MenuOutlinedIcon />
                </IconButton>
                <Typography variant="h6">Open Jira</Typography>
            </Toolbar>
        </AppBar>
    )
}
