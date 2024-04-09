import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../services/api';
import { useNavigate } from 'react-router-dom'

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({})
    const navigate = useNavigate()
    const [cart, setCart] = useState(0)

    async function signIn({email, password}){
        try {
            const response = await api.post("/sessions", { email, password }, 
            { withCredentials: true })
            
            const { user } = response.data;

            localStorage.setItem("@estock:user", JSON.stringify(user))

            setData({ user })
        } catch (error) {
            if (error.response){
                alert(error.response.data.message)
            } else {
                alert("Não foi possível entrar.")
            }
        }
    }

    function signOut() {
        localStorage.removeItem("@estock:user")

        setData({})
        navigate("/")
    }

    useEffect(() => {
        const user = localStorage.getItem("@estock:user")

        if (user) {
            setData({
                user: JSON.parse(user)
            })
        } 
    }, [])

    return(
        <AuthContext.Provider value={{ signIn, signOut, user: data.user, cart: cart, setCart }}>
            {children}
        </AuthContext.Provider>
    )
}

function useAuth(){
    const context = useContext(AuthContext)

    return context
}

export { AuthProvider, useAuth };