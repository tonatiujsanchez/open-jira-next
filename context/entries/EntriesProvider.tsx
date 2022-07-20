import { FC, useReducer } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';


interface Props {
    children: JSX.Element
}

export interface EntriesState {
    entries: Entry[];

}

const Entries_INITIAL_STATE: EntriesState = {
    entries: [],
}


export const EntriesProvider: FC<Props> = ({ children }) => {


    const [state, dispatch] = useReducer(entriesReducer, Entries_INITIAL_STATE)

    const addNewEntry = ( description: string ) => {

        const newAntry: Entry = {
            _id: uuidv4(),
            description: description,
            createdAd: Date.now(),
            status: 'pending' 
        }

        dispatch({
            type: '[Entry] Add-Entry',
            payload: newAntry
        })
    }

    const updateEntry = ( entry: Entry ) => {
        dispatch({ type: '[Entry] Entry-Updated', payload: entry })
    }


    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
            updateEntry
        }}>
            {children}
        </EntriesContext.Provider>
    )
}
