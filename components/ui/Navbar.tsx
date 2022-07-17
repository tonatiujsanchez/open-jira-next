import { FC } from "react"

import { AppBar, IconButton, Toolbar, Typography } from '@mui/material';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';
import { blueGrey } from "@mui/material/colors";

export const Navbar: FC = () => {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton
                    size="large"
                    edge="start"
                >
                    <MenuOutlinedIcon />
                </IconButton>
                <Typography variant="h6">Open Jira</Typography>
            </Toolbar>
        </AppBar>
    )
}
