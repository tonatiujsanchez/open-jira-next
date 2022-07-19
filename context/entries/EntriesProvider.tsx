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
    entries: [
        {
            _id: uuidv4(),
            description: 'pending-Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis feugiat.',
            createdAd: Date.now(),
            status: 'pending'
        },
        {
            _id: uuidv4(),
            description: 'in-progress-Vitae aliquet nec ullamcorper sit amet. Senectus et netus et malesuada fames ac.',
            createdAd: Date.now() - 1000000,
            status: 'in-progress'
        },
        {
            _id: uuidv4(),
            description: 'finished-Ultrices mi tempus imperdiet nulla. Sagittis id consectetur purus ut faucibus pulvinar elementum integer enim.',
            createdAd: Date.now() - 100000,
            status: 'finished'
        },
    ],
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


    return (
        <EntriesContext.Provider value={{
            ...state,
            addNewEntry,
        }}>
            {children}
        </EntriesContext.Provider>
    )
}
