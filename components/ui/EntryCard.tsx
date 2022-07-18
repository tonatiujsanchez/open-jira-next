import { Card, CardActionArea, CardActions, CardContent, Typography } from '@mui/material';
import { FC } from 'react';
import { Entry } from '../../interfaces';


interface Props {
    entry: Entry
}

export const EntryCard: FC<Props> = ({ entry }) => {


    return (
        <Card sx={{
            marginBottom: 1
        }} elevation={2} >
            <CardActionArea>
                <CardContent>
                    <Typography sx={{ widthSpace: 'pre-line' }}>
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
