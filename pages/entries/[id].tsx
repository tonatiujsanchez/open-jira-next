import { ChangeEvent, useState, useMemo, FC } from 'react';
import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router';

import {
    capitalize,
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    FormControl,
    FormControlLabel,
    FormLabel,
    Grid,
    Radio,
    RadioGroup,
    TextField,
    IconButton,
    Typography,
} from "@mui/material"

import SaveOutlinedIcon from '@mui/icons-material/SaveOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';

import { Layout } from "../../components/layouts"

import { Entry, EntryStatus } from '../../interfaces/entry';

import { dbEntries } from '../../database';
import { useEntries } from '../../hooks/useEntries';
import { dateFunctions } from '../../utils';


const validStatus: EntryStatus[] = ["pending", "in-progress", "finished"]

interface Props {
    entry: Entry
}


const EntryPage: FC<Props> = ({ entry }) => {

    const [inputValue, setInputValue] = useState(entry.description)
    const [status, setStatus] = useState<EntryStatus>(entry.status)
    const [touched, setTouched] = useState(false)

    const router = useRouter()

    const { updateEntry, removeEntry } = useEntries()

    const isNotValid = useMemo(() => inputValue.length <= 0 && touched, [inputValue, touched])

    const onTextFieldChanges = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    const onStatusChanged = (event: ChangeEvent<HTMLInputElement>) => {
        setStatus(event.target.value as EntryStatus)
    }

    const onSave = () => {

        if( inputValue.trim().length === 0 ) return

        const newEntry: Entry = {
            ...entry,
            description: inputValue,
            status,
        }

        updateEntry(newEntry, true)
    }

    const onRemove = () => {
        removeEntry(entry._id)
        router.replace('/')
    }


    return (
        <Layout title={`${inputValue.substring(0, 25)}...`}>
            <Grid
                container
                justifyContent='center'
                sx={{ marginTop: 2 }}
            >
                <Grid item xs={12} sm={8} md={6}>
                    <Card>
                        <CardHeader
                            title={`Entrada: ${inputValue}`}
                            subheader={`Creada ${dateFunctions.getFormatDistanceToNow(entry.createdAd)}`}
                        />

                        <CardContent>

                            <TextField
                                sx={{ marginTop: 2, marginBottom: 1 }}
                                fullWidth
                                placeholder="Nueva entrada"
                                autoFocus
                                multiline
                                label="Entrada"
                                value={inputValue}
                                onBlur={() => setTouched(true)}
                                onChange={onTextFieldChanges}
                                helperText={isNotValid && 'Ingrese un valor'}
                                error={isNotValid}
                            />

                            {/* RADIO */}
                            <FormControl
                                sx={{ marginTop: 2, marginBottom: 1 }}
                            >
                                <FormLabel>Estado:</FormLabel>
                                <RadioGroup
                                    row
                                    value={status}
                                    onChange={onStatusChanged}
                                >
                                    {
                                        validStatus.map(option => (
                                            <FormControlLabel
                                                key={option}
                                                value={option}
                                                control={<Radio />}
                                                label={capitalize(option)}
                                            />
                                        ))
                                    }
                                </RadioGroup>
                            </FormControl>
                            <Typography variant='body2'>Views: {entry.views}</Typography>

                        </CardContent>
                        <CardActions>
                            <Button
                                startIcon={<SaveOutlinedIcon />}
                                variant="contained"
                                fullWidth
                                onClick={onSave}
                                disabled={inputValue.length <= 0}
                            >
                                Save
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <IconButton
                    onClick={ onRemove }
                    sx={{
                        position: 'fixed',
                        bottom: 30,
                        right: 30,
                        backgroundColor: 'error.dark',
                        color: 'white'
                    }}
                >
                    <DeleteForeverOutlinedIcon />
                </IconButton>
            </Grid>
        </Layout>
    )
}


// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
export const getServerSideProps: GetServerSideProps = async ({ params }) => {

    const { id } = params as { id: string }

    const entry = await dbEntries.getEntryById(id)

    if (!entry) {

        return {
            // notFound: true
            redirect: {
                destination: '/',
                permanent: false
            }
        }

    }




    return {
        props: {
            entry: entry
        }
    }
}

export default EntryPage