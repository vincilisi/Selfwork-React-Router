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
        setError('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setError('')

        try {
            login(formData.email, formData.password)
            navigate('/')
        } catch (err) {
            setError(err.message)
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-80px)] px-4 py-8">
            <div className="card w-full max-w-md glass">
                <div className="card-body">
                    <h1 className="text-3xl font-bold text-center text-white mb-2">🔐 Login</h1>
                    <p className="text-center text-white/70 mb-6">Accedi al tuo account</p>

                    {error && (
                        <div className="alert alert-error">
                            <span>{error}</span>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
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

                        <button type="submit" className="btn btn-primary w-full mt-4">
                            Accedi
                        </button>
                    </form>

                    <p className="text-center text-white/70 mt-4">
                        Non hai un account? <Link to="/register" className="text-white font-bold underline">Registrati qui</Link>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Login
