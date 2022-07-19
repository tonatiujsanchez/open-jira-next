import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { DragEvent, FC } from 'react';
import { useUI } from '../../hooks/useUI';
import { Entry } from '../../interfaces';


interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const { setStartDraggin, setEndDraggin } = useUI()

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('entryDrop', entry._id )
        setStartDraggin()
    }

    const onDragEnd = () => {
        setEndDraggin()
    }

    return (
        <Card 
            sx={{ marginBottom: 1 }} 
            elevation={2}
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd} >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ whiteSpace: 'pre-line' }}>
                        { entry.description }
                    </Typography>
                </CardContent>
                <CardActions sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    paddingRight: 2
                }}>
                    <Typography variant='caption'>Hace 30 min</Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
