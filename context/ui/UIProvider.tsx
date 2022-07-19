import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


interface Props {
    children: JSX.Element
}

export interface UIState {
    sidemenuOpen: boolean;
    isAddingEntry: boolean;
    isDragging: boolean;
}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
    isAddingEntry: false,
    isDragging: false,

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

    const setStartDraggin = () => {
        dispatch({type: '[UI] - Start Draggin'})
    }

    const setEndDraggin = () => {
        dispatch({type: '[UI] - End Draggin'})
    }



    return (
        <UIContext.Provider value={{
            ...state,
            
            openSideMenu,
            closedSideMenu,

            setIsAddingEntry,

            setStartDraggin,
            setEndDraggin
        }}>
            {children}
        </UIContext.Provider>
    )
}
