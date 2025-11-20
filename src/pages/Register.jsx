import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const { register } = useAuth()
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

        if (formData.password !== formData.confirmPassword) {
            setError('Le password non coincidono!')
            return
        }

        if (formData.password.length < 6) {
            setError('La password deve essere di almeno 6 caratteri')
            return
        }

        try {
            register({
                name: formData.name,
                email: formData.email,
                password: formData.password
            })

            setSuccess(true)

            // Reindirizza alla home dopo 1.5 secondi
            setTimeout(() => {
                navigate('/')
            }, 1500)
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="auth-page">
            <div className="auth-container">
                <h1>📝 Registrazione</h1>
                <p className="auth-subtitle">Crea un nuovo account</p>

                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">✅ Registrazione completata! Reindirizzamento...</div>}

                <form onSubmit={handleSubmit} className="auth-form">
                    <div className="form-group">
                        <label htmlFor="name">Nome completo</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Mario Rossi"
                            required
                        />
                    </div>

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

                    <div className="form-group">
                        <label htmlFor="confirmPassword">Conferma Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            placeholder="••••••••"
                            required
                        />
                    </div>

                    <button type="submit" className="auth-button">
                        Registrati
                    </button>
                </form>

                <p className="auth-link">
                    Hai già un account? <Link to="/login">Accedi qui</Link>
                </p>
            </div>
        </div>
    )
}

export default Register
