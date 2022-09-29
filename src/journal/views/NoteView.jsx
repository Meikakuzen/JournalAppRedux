import { SaveOutlined } from '@mui/icons-material'
import { Grid, Typography, Button, TextField } from '@mui/material'
import React from 'react'
import ImageGallery from '../components/ImageGallery'

const NoteView = () => {
  return (
    <Grid container direction= "row" justifyContent="space-between" sx={{mb:1}}>
        <Grid item>
            <Typography fontSize={39} fontWeight='light'>16 de agosto</Typography>
        </Grid>
        <Grid item>
            <Button color="primary" sx={{padding:2}}>
                <SaveOutlined sx={{ fontSize: 30, mr: 1}} />
                Guardar
            </Button>
        </Grid>
        <Grid container>
            <TextField
            type="text"
            variant="filled"
            placeholder="Ingrese un titulo"
            label="Titulo"
            sx={{border: "none", mb:1}} />
            <TextField
            type="text"
            variant="filled"
            fullWidth
            multiline
            placeholder="Qué sucedió en el día de hoy?"
            sx={{border: "none", mb:1}}
            minRows={5} />

        </Grid>

        
    </Grid>
  )
}

export default NoteView