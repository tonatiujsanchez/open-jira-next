import {
    Box,
    Divider,
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography
} from '@mui/material';

import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import { useSidebar } from '../../hooks/useSidebar';
const menuItems: String[] = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const Sidebar = () => {

    const { sidemenuOpen, closedSideMenu } = useSidebar()    

    return (
        <Drawer
            anchor="left"
            open={sidemenuOpen}
            onClose={closedSideMenu}
        >
            <Box sx={{ width: 250 }}>
                <Box sx={{ padding: '10px 10px' }} >
                    <Typography variant='h5'>Menú</Typography>
                </Box>
                <Divider />
                <List>
                    {
                        menuItems.map((text, index) => {

                            return (
                                <ListItem button key={index}>
                                    <ListItemIcon>
                                        {index % 2 ? <InboxOutlinedIcon /> : <MailOutlinedIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItem>
                            )
                        })
                    }
                </List>
            </Box>
        </Drawer>
    )
}
