import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth deve essere usato all\'interno di un AuthProvider')
    }
    return context
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [users, setUsers] = useState([]) // Simula un database di utenti registrati

    // Funzione per registrare un nuovo utente
    const register = (userData) => {
        // Controlla se l'email è già registrata
        const existingUser = users.find(u => u.email === userData.email)
        if (existingUser) {
            throw new Error('Email già registrata')
        }

        // Crea il nuovo utente
        const newUser = {
            id: Date.now(),
            name: userData.name,
            email: userData.email,
            password: userData.password,
            registeredAt: new Date().toISOString()
        }

        // Aggiungi l'utente al "database"
        setUsers(prev => [...prev, newUser])

        // Effettua il login automatico dopo la registrazione
        setUser({
            id: newUser.id,
            name: newUser.name,
            email: newUser.email
        })

        return newUser
    }

    // Funzione per effettuare il login
    const login = (email, password) => {
        const foundUser = users.find(u => u.email === email && u.password === password)

        if (!foundUser) {
            throw new Error('Credenziali non valide')
        }

        // Salva l'utente loggato (senza la password)
        setUser({
            id: foundUser.id,
            name: foundUser.name,
            email: foundUser.email
        })

        return foundUser
    }

    // Funzione per effettuare il logout
    const logout = () => {
        setUser(null)
    }

    // Verifica se l'utente è autenticato
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
