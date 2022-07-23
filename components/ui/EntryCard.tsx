import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { useRouter } from 'next/router';

import { DragEvent, FC } from 'react';
import { useUI } from '../../hooks/useUI';
import { Entry } from '../../interfaces';
import { dateFunctions } from '../../utils';


interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {

    const router = useRouter()
    const { setStartDraggin, setEndDraggin } = useUI()

    const onDragStart = (event: DragEvent<HTMLDivElement>) => {
        event.dataTransfer.setData('entryDrop', entry._id )
        setStartDraggin()
    }

    const onDragEnd = () => {
        setEndDraggin()
    }

    const onClick = () => {
        router.push(`/entries/${ entry._id }`)
    } 

    return (
        <Card 
            onClick={onClick}
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
                    <Typography variant='caption'>
                        {dateFunctions.getFormatDistanceToNow(entry.createdAd)}
                    </Typography>
                </CardActions>
            </CardActionArea>
        </Card>
    )
}
