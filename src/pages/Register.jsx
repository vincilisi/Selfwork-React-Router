import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useForm } from 'react-hook-form'

function Register() {
    const [error, setError] = useState('')
    const [success, setSuccess] = useState(false)
    const { register: registerUser } = useAuth()
    const navigate = useNavigate()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm()

    const password = watch('password')

    const onSubmit = (data) => {
        setError('')

        if (data.password.length < 6) {
            setError('La password deve essere di almeno 6 caratteri')
            return
        }

        try {
            registerUser({
                name: data.name,
                email: data.email,
                password: data.password
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

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Nome completo</span>
                            </label>
                            <input
                                type="text"
                                {...register('name', {
                                    required: 'Nome è obbligatorio',
                                    maxLength: {
                                        value: 50,
                                        message: 'Nome non può superare 50 caratteri'
                                    }
                                })}
                                placeholder="Mario Rossi"
                                className="input input-bordered glass text-white placeholder:text-white/50"
                            />
                            {errors.name && (
                                <span className="text-error text-sm mt-1">{errors.name.message}</span>
                            )}
                        </div>

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

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white font-medium">Conferma Password</span>
                            </label>
                            <input
                                type="password"
                                {...register('confirmPassword', {
                                    required: 'Conferma password è obbligatoria',
                                    maxLength: {
                                        value: 50,
                                        message: 'Conferma password non può superare 50 caratteri'
                                    },
                                    validate: value => value === password || 'Le password non coincidono'
                                })}
                                placeholder="••••••••"
                                className="input input-bordered glass text-white placeholder:text-white/50"
                            />
                            {errors.confirmPassword && (
                                <span className="text-error text-sm mt-1">{errors.confirmPassword.message}</span>
                            )}
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
