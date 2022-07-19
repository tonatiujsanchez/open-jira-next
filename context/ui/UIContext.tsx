import { createContext } from 'react';


interface ContextProps {
    sidemenuOpen: boolean,
    isAddingEntry: boolean,
    isDragging: boolean,
    
    openSideMenu: ()=>void,
    closedSideMenu: ()=>void,
    setIsAddingEntry: (isAdding: boolean)=>void,
    setStartDraggin: ()=>void,
    setEndDraggin: ()=>void,
}


export const UIContext = createContext({} as ContextProps)