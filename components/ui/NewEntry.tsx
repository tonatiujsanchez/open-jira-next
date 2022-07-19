import { ChangeEvent, useState } from "react";

import { Box, Button, TextField } from "@mui/material"
import SaveIcon from '@mui/icons-material/Save';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import { useEntries } from '../../hooks/useEntries';
import { useSidebar } from '../../hooks/useSidebar';

export const NewEntry = () => {

    // const [isAdding, setIsAdding] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const [touched, setTouched] = useState(false)

    const { addNewEntry } = useEntries()
    const { isAddingEntry, setIsAddingEntry } = useSidebar()

    const onTextFieldChanges = ( event:ChangeEvent<HTMLInputElement> ) => {
        setInputValue(event.target.value)
    }

    const onSave = () => {
        if((inputValue.trim()).length <= 0) return

        addNewEntry(inputValue)
        setIsAddingEntry(false)
        setTouched(false)
        setInputValue('')
    }


    return (
        <Box paddingX={1}>
            {
                isAddingEntry
                    ? (
                        <>
                            <TextField
                                fullWidth
                                autoFocus
                                multiline
                                label="Nueva entrada"
                                helperText={inputValue.length <= 0 && touched && 'Ingrese un valor'}
                                error={inputValue.length <= 0 && touched}
                                value={inputValue}
                                onChange={onTextFieldChanges}
                                onBlur={()=>setTouched(true)}
                            />

                            <Box display="flex" justifyContent="flex-end" gap={1} paddingBottom={1} paddingTop={1}>
                                <Button
                                    variant="text"
                                    onClick={()=>setIsAddingEntry(false)}
                                >
                                    Cancelar
                                </Button>
                                <Button
                                    variant="outlined"
                                    color="secondary"
                                    startIcon={<SaveIcon />}
                                    onClick={onSave}
                                >
                                    Guardar
                                </Button>
                            </Box>

                        </>
                    )
                    : (
                        <Button
                            startIcon={<AddCircleOutlineIcon />}
                            fullWidth
                            variant="outlined"
                            sx={{ marginBottom: 1 }}
                            onClick={()=>setIsAddingEntry(true)}
                        >
                            Agregar nueva entrada
                        </Button>
                    )
            }


        </Box>
    )
}
