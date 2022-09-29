import {Routes, Route} from 'react-router-dom'
import AuthRoutes from '../auth/routes/AuthRoutes'
import JournalRoutes from '../journal/routes/JournalRoutes'

const AppRouter = () => {
  return (
    
    <Routes>
        <Route>

            <Route path="/auth/*" element={<AuthRoutes />} />

            <Route path="/*" element={<JournalRoutes />} />

        </Route>
    </Routes>
  )
}

export default AppRouter