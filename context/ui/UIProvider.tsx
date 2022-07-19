import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


interface Props {
    children: JSX.Element
}

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false 
}


export const UIProvider: FC<Props> = ({ children }) => {


    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)


    const openSideMenu = () => {
        dispatch({type: '[UI] - Open Siderbar'})
    }

    const closedSideMenu = () => {
        dispatch({type: '[UI] - Close Siderbar'})
    }

    const setIsAddingEntry = (isAdding: boolean) => {
        dispatch({type: '[UI] - Is Adding Entry', payload: isAdding})
    }



    return (
        <UIContext.Provider value={{
            ...state,
            openSideMenu,
            closedSideMenu,
            setIsAddingEntry
        }}>
            {children}
        </UIContext.Provider>
    )
}
