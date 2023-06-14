import { Navigate, Route, Routes } from 'react-router-dom';

import { LoginPage } from '../auth';
import { CalendarPage } from '../calendar';
import { getEnv } from '../helpers/getEnv';


export const AppRouter = () => {
    console.log('env',getEnv())

    const authStatus = 'not-authenticated'; // 'authenticated'; // 'not-authenticated';


    return (
        <Routes>
            {
                ( authStatus === 'not-authenticated')  
                    ? <Route path="/auth/*" element={ <LoginPage /> } />
                    : <Route path="/*" element={ <CalendarPage /> } />
            }

            <Route path="/*" element={ <Navigate to="/auth/login" /> } />
        </Routes>
    )
}
