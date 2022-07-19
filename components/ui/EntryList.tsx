import { FC, useMemo } from "react";

import { List, Paper } from "@mui/material"

import { EntryCard } from "./"
import { EntryStatus } from '../../interfaces';
import { useEntries } from "../../hooks/useEntries";

interface Props {
    status: EntryStatus
}


export const EntryList:FC<Props> = ({ status }) => {

    const { entries } = useEntries()

    const entriesByStatus = useMemo( 
        ()=> entries.filter( entry => entry.status === status ),
        [entries] 
    )

    return (
        // TODO: aqui haremos drop
        <div>
            <Paper sx={{ 
                height: 'calc(100vh - 260px)', 
                overflow: 'auto',
                backgroundColor: 'transparent',
                padding: 1,
                boxShadow: 'none'
             }} className="contenedor-scroll">
                {/* TODO: cambiara dependiendo si estoy haciendo drag */}
                <List sx={{
                    opacity: 1
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
