import { UIState } from './';


type UIActionType =
    | { type: "[UI] - Open Siderbar" }
    | { type: "[UI] - Close Siderbar" }

export const uiReducer = (state: UIState, action: UIActionType): UIState => {

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
        default:
            return state
    }
}
