import { Grid, CircularProgress } from '@mui/material'
import React from 'react'

const CheckingAuth = () => {
  return (
    <div>    
        <Grid container
            spacing={0}
            direction="row"
            justifyContent="center"
            alignItems="center"
            sx={{ minHeight: '100vh', backgroundColor:'primary.main', padding: '4'}}>


            <Grid 
                item
                sx={{ width:{md:450}}}>
                    <CircularProgress color="warning"></CircularProgress>
            </Grid>
        </Grid>
        
    </div>
  )
}

export default CheckingAuth