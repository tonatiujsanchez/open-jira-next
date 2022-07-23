import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider, CssBaseline } from '@mui/material';
import { SnackbarProvider } from 'notistack';
import NextNProgress from "nextjs-progressbar";

import { UIProvider } from '../context/ui';
import { EntriesProvider } from '../context/entries';

import { darkTheme, lightTheme } from '../themes';


function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextNProgress color="#ECEFF1"  height={3} />
            <SnackbarProvider maxSnack={3}>
                <EntriesProvider>
                    <UIProvider>
                        <ThemeProvider theme={lightTheme} >
                            <CssBaseline />
                            <Component {...pageProps} />
                        </ThemeProvider>
                    </UIProvider>
                </EntriesProvider>
            </SnackbarProvider>
        </>
    )
}

export default MyApp
