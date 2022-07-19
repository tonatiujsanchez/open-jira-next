import { UIState } from './';


type UIActionType =
    | { type: "[UI] - Open Siderbar" }
    | { type: "[UI] - Close Siderbar" }
    | { type: "[UI] - Is Adding Entry", payload: boolean }
    | { type: "[UI] - Start Draggin" }
    | { type: "[UI] - End Draggin" }

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
