import { FC, useEffect, useReducer } from 'react';

import { Entry } from '../../interfaces';

import { EntriesContext, entriesReducer } from './';
import entriesApi from '../../apis/entriesApi';


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

    const addNewEntry = async( description: string ) => {

        // const newAntry: Entry = {
        //     _id: uuidv4(),
        //     description: description,
        //     createdAd: Date.now(),
        //     status: 'pending' 
        // }

        try {
            const { data } = await entriesApi.post<Entry>('/entries', {description})
            dispatch({
                type: '[Entry] Add-Entry',
                payload: data
            })
        } catch (error) {
            console.log({error})
        }

    }

    const updateEntry = async( entry: Entry ) => {

        const { _id, description, status } = entry

        try {
            const { data } = await entriesApi.put(`/entries/${_id}`, { description, status })
            dispatch({ 
                type: '[Entry] Entry-Updated', 
                payload: data 
            })
        } catch (error) {
            console.log({error})
        }

    }

    const refreshEntries = async()=> {
        const { data } = await entriesApi.get<Entry[]>('/entries')
        dispatch({type:'[Entry] Refresh-Data', payload: data })
    }


    useEffect(() => {
        refreshEntries()
    }, [])
    

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
