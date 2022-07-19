import { DragEvent, FC, useMemo } from "react";

import { List, Paper } from "@mui/material"

import { EntryCard } from "./"
import { EntryStatus } from '../../interfaces';

import { useEntries } from "../../hooks/useEntries";
import { useUI } from "../../hooks/useUI";

import styles from './Entrylist.module.css'


interface Props {
    status: EntryStatus
}


export const EntryList:FC<Props> = ({ status }) => {

    const { entries, updateEntry} = useEntries()
    const { isDragging, setEndDraggin } = useUI()

    const entriesByStatus = useMemo( 
        ()=> entries.filter( entry => entry.status === status ),
        [entries] 
    )

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        event.preventDefault()
    }
    
    const onDropEntry = (event: DragEvent<HTMLDivElement>) => {
        
        const id = event.dataTransfer.getData('entryDrop')
        
        const entry = entries.find( e => e._id === id )
        
        if(!entry) return
        
        entry.status = status

        updateEntry( entry )
        setEndDraggin()
    
    }



    return (
        // TODO: aqui haremos drop
        <div 
            onDrop={onDropEntry}
            onDragOver={ allowDrop }
            className={ isDragging ? styles.dragging : '' }
        >
            <Paper sx={{ 
                height: 'calc(100vh - 260px)', 
                overflow: 'auto',
                backgroundColor: 'transparent',
                padding: 1,
                boxShadow: 'none'
             }} className="contenedor-scroll">
                {/* TODO: cambiara dependiendo si estoy haciendo drag */}
                <List sx={{ 
                    opacity: isDragging ? 0.5 : 1,
                    transition: 'all 0.3s'
                }}>
                    {
                        entriesByStatus.map( entry => (
                            <EntryCard key={entry._id} entry={entry} />
                        ))
                    }

                </List>
            </Paper>
        </div>
    )
}
