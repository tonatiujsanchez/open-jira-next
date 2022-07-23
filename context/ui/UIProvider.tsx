import { FC, useReducer } from 'react';
import { UIContext } from './';



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



// ======================== uiReducer - START ==============================
// =========================================================================

type UIActionType =
    | { type: "[UI] - Open Siderbar" }
    | { type: "[UI] - Close Siderbar" }
    | { type: "[UI] - Is Adding Entry", payload: boolean }
    | { type: "[UI] - Start Draggin" }
    | { type: "[UI] - End Draggin" }

const uiReducer = (state: UIState, action: UIActionType): UIState => {

    switch (action.type) {
        case '[UI] - Open Siderbar':
            return {
                ...state,
                sidemenuOpen: true
            }
        case '[UI] - Close Siderbar':
            return {
                ...state,
                sidemenuOpen: false
            }
        case '[UI] - Is Adding Entry':
            return {
                ...state,
                isAddingEntry: action.payload
            }
        case '[UI] - Start Draggin':
            return {
                ...state,
                isDragging: true
            }
        case '[UI] - End Draggin':
            return {
                ...state,
                isDragging: false
            }
        default:
            return state
    }
}


// ======================== uiReducer - END ==============================
// =======================================================================



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
