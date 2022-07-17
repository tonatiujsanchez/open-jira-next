import { FC, useReducer } from 'react';
import { UIContext, uiReducer } from './';


interface Props {
    children: JSX.Element
}

export interface UIState {
    sidemenuOpen: boolean;

}

const UI_INITIAL_STATE: UIState = {
    sidemenuOpen: false,
}


export const UIProvider: FC<Props> = ({ children }) => {


    const [state, dispatch] = useReducer(uiReducer, UI_INITIAL_STATE)


    const openSideMenu = () => {
        dispatch({type: '[UI] - Open Siderbar'})
    }

    const closedSideMenu = () => {
        dispatch({type: '[UI] - Close Siderbar'})
    }



    return (
        <UIContext.Provider value={{
            ...state,
            openSideMenu,
            closedSideMenu
        }}>
            {children}
        </UIContext.Provider>
    )
}
