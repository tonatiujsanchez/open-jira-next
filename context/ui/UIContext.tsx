import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean,
    openSideMenu: ()=>void,
    closedSideMenu: ()=>void,
}


export const UIContext = createContext({} as ContextProps)