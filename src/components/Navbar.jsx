import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
    const { user, logout, isAuthenticated } = useAuth()

    return (
        <nav className="navbar">
            <div className="navbar-container">
                <Link to="/" className="navbar-logo">
                    React Router App
                </Link>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>

                    {/* Mostra il link Posts solo se l'utente è autenticato */}
                    {isAuthenticated() && (
                        <li className="nav-item">
                            <Link to="/posts" className="nav-link">Posts</Link>
                        </li>
                    )}

                    <li className="nav-item">
                        <Link to="/components" className="nav-link">Components</Link>
                    </li>

                    {/* Mostra Login/Register solo se NON autenticato */}
                    {!isAuthenticated() ? (
                        <>
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/register" className="nav-link">Register</Link>
                            </li>
                        </>
                    ) : (
                        // Mostra info utente e logout se autenticato
                        <>
                            <li className="nav-item user-info">
                                <span className="nav-link">👤 {user.name}</span>
                            </li>
                            <li className="nav-item">
                                <button onClick={logout} className="nav-link logout-btn">
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
