import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean,
    openSideMenu: ()=>void,
    closedSideMenu: ()=>void,
    isAddingEntry: boolean,
    setIsAddingEntry: (isAdding: boolean)=>void,
}


export const UIContext = createContext({} as ContextProps)