import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()


export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth deve essere usato dentro AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([])

    const register = (userData) => {

        const esistente = users.find(u => u.email === userData.email)
        if (esistente) {
            throw new Error('Email già registrata')
        }

        const nuovoUtente = {
            id: Date.now(),
            name: userData.name,
            email: userData.email,
            password: userData.password,
            registeredAt: new Date().toISOString()
        }

        setUsers(prev => [...prev, nuovoUtente])


        setUser({
            id: nuovoUtente.id,
            name: nuovoUtente.name,
            email: nuovoUtente.email
        })

        return nuovoUtente
    }

    const login = (email, password) => {
        const utenteDB = users.find(u => u.email === email && u.password === password)

        if (!utenteDB) {
            throw new Error('Credenziali non valide')
        }

        setUser({
            id: utenteDB.id,
            name: utenteDB.name,
            email: utenteDB.email
        })

        return utenteDB
    }

    const logout = () => {
        setUser(null)
    }

    const isAuthenticated = () => {
        return user !== null
    }

    const value = {
        user,
        users,
        register,
        login,
        logout,
        isAuthenticated
    }

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
