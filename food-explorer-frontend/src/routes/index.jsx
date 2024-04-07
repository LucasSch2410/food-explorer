import { useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/auth';
import { UserRoutes } from './user.routes'
import { AuthRoutes } from './auth.routes'
import { AdminRoutes } from './admin.routes';
import { useEffect } from 'react';
import { api } from '../services/api';

export function App(){
    const { user, signOut } = useAuth();
    const navigate = useNavigate()

    useEffect(() => {
        api.get("/users/validated").catch((e) => {
            if (e.response?.status) {
                signOut();
            }
        })
        navigate("/")
    }, [])

    function AccessRoute(){
        switch(user.isAdmin){
            case 0:
                return <UserRoutes/>
            case 1:
                return <AdminRoutes/>
        }
    }

    return (
        user ? <AccessRoute/> : <AuthRoutes/>
    )
}