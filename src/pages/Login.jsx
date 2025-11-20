import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useForm } from 'react-hook-form'

function Login() {
    const [error, setError] = useState('')
    const { login } = useAuth()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = (data) => {
        setError('')

        try {
            login(data.email, data.password)
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

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Email</span>
                            </label>
                            <input
                                type="email"
                                {...register('email', {
                                    required: 'Email è obbligatoria',
                                    maxLength: {
                                        value: 50,
                                        message: 'Email non può superare 50 caratteri'
                                    }
                                })}
                                placeholder="tua@email.com"
                                className="input input-bordered glass text-white placeholder:text-white/50"
                            />
                            {errors.email && (
                                <span className="text-error text-sm mt-1">{errors.email.message}</span>
                            )}
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Password</span>
                            </label>
                            <input
                                type="password"
                                {...register('password', {
                                    required: 'Password è obbligatoria',
                                    maxLength: {
                                        value: 50,
                                        message: 'Password non può superare 50 caratteri'
                                    }
                                })}
                                placeholder="••••••••"
                                className="input input-bordered glass text-white placeholder:text-white/50"
                            />
                            {errors.password && (
                                <span className="text-error text-sm mt-1">{errors.password.message}</span>
                            )}
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
