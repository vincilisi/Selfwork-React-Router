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
        setError('')
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

            setTimeout(() => {
                navigate('/')
            }, 1500)
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-80px)] px-4 py-8">
            <div className="card w-full max-w-md glass">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center text-white mb-2">📝 Registrazione</h1>
                    <p className="text-center text-white/70 mb-6">Crea un nuovo account</p>

                    {error && (
                        <div className="alert alert-error">
                            <span>{error}</span>
                        </div>
                    )}
                    {success && (
                        <div className="alert alert-success">
                            <span>✅ Registrazione completata! Reindirizzamento...</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Nome completo</span>
                            </label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Mario Rossi"
                                className="input input-bordered glass text-white placeholder:text-white/50"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="tua@email.com"
                                className="input input-bordered glass text-white placeholder:text-white/50"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="input input-bordered glass text-white placeholder:text-white/50"
                                required
                            />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Conferma Password</span>
                            </label>
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="••••••••"
                                className="input input-bordered glass text-white placeholder:text-white/50"
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-primary w-full mt-4">
                            Registrati
                        </button>
                    </form>

                    <p className="text-center text-white/70 mt-4">
                        Hai già un account? <Link to="/login" className="text-white font-bold underline">Accedi qui</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Register
