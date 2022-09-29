import { TurnedInNot } from "@mui/icons-material"
import { Box, Toolbar, Drawer, Typography, Divider, List, ListItem, ListItemButton, ListItemIcon, Grid, ListItemText} from "@mui/material"


const SideBar = ({drawerWidth=240}) => {
  return (
    <Box
        component='nav'
        sx={{width: {sm: drawerWidth}, flexShrink: { sm: 0}}}
    >
        <Drawer
        variant="permanent"
        open
        sx={{
            display: {xs: 'block'},
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
        }}>
            <Toolbar>
                <Typography variant="h6" noWrap component='div'>
                    Ismael Berón
                </Typography>
            </Toolbar>
            <Divider />

            <List>
                {
                    ['Enero', 'Febrero', 'Marzo'].map( text=>(
                        <ListItem key={text} disablePadding>
                            <ListItemButton>
                                <ListItemIcon>
                                    {<TurnedInNot/>}
                                </ListItemIcon>
                                <Grid container>
                                    <ListItemText primary={text} />
                                    <ListItemText secondary={'Texto random para ocupar la casilla'} />
                                </Grid>
                            </ListItemButton>
                        </ListItem>
                    ))
                }
            </List>

        </Drawer>
    </Box>
  )
}

export default SideBar