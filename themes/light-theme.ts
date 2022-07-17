import { createTheme} from '@mui/material';
import { blueGrey, red, lightBlue } from '@mui/material/colors';



export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: blueGrey[50]
        },
        primary: {
            main: lightBlue[900],
            contrastText: blueGrey[50]
        },
        secondary: {
            main: '#19857b'
        },
        error: {
            main: red.A400
        }
    },
    components: {
        MuiAppBar: {
            defaultProps: {
                elevation: 0
            },
            styleOverrides: {
                root: {
                    backgroundColor:lightBlue[900],
                },
                
            },
        }
    }
})