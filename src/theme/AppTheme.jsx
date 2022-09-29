import {CssBaseline, ThemeProvider} from '@mui/material'
import { purpleTheme } from './purple'

const AppTheme = ({children}) => {
  return (
    <>
    <ThemeProvider theme={purpleTheme}>

        <CssBaseline />
        {children}
    </ThemeProvider>

    </>
  )
}

export default AppTheme