import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
        setError('') // Rimuovi l'errore quando l'utente modifica i campi
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        try {
            login(formData.email, formData.password)
            // Reindirizza alla home dopo il login
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>🔐 Login</h1>
                <p className="auth-subtitle">Accedi al tuo account</p>

                {error && <div className="error-message">{error}</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="tua@email.com"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Accedi
                    </button>
                </form>

                <p className="auth-link">
                    Non hai un account? <Link to="/register">Registrati qui</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
