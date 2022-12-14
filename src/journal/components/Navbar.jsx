import {AppBar, Grid, IconButton, Toolbar, Typography} from '@mui/material'
import {LogoutOutlined, MenuOutlined} from '@mui/icons-material'


const Navbar = ({drawerWidth=240}) => {
  return (
    <AppBar
    position="fixed"
    sx={{
        width: {sm: `calc(100% - ${drawerWidth}px)`},
        ml: {sm: `${drawerWidth}px`}

    }}
    >
        <Toolbar>
            <IconButton
            color="inherit"
            edge="start"
            sx={{mr: 2, display: {sm:'none'}}}>
                <MenuOutlined />
            </IconButton>
            <Grid container direction="row"
            justifyContent="space-between" align-items="center">
                <Typography variant="h6">Journal App</Typography>

                <IconButton color="error">
                    <LogoutOutlined />
                </IconButton>

            </Grid>
        </Toolbar>
    </AppBar>
  )
}

export default Navbar