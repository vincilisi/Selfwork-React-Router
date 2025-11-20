import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import useScroll from '../hooks/useScroll'

function Navbar() {
    const { user, logout, isAuthenticated } = useAuth()
    const [ref, scrollY] = useScroll()

    return (
        <div className={`navbar glass sticky top-0 z-50 transition-transform duration-300 ${scrollY > 100 ? '-translate-y-full' : 'translate-y-0'}`}>
            <div className="navbar-start">
                <Link to="/" className="btn btn-ghost text-xl text-white font-bold hover:scale-105">
                    React Router App
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-white">
                    <li><Link to="/" className="hover:bg-white/20">Home</Link></li>

                    {isAuthenticated() && (
                        <li><Link to="/posts" className="hover:bg-white/20">Posts</Link></li>
                    )}

                    <li><Link to="/components" className="hover:bg-white/20">Components</Link></li>
                </ul>
            </div>

            <div className="navbar-end gap-2">
                {!isAuthenticated() ? (
                    <>
                        <Link to="/login" className="btn btn-sm btn-ghost text-white hover:bg-white/20">
                            Login
                        </Link>
                        <Link to="/register" className="btn btn-sm btn-primary">
                            Register
                        </Link>
                    </>
                ) : (
                    <>
                        <div className="badge badge-lg glass text-white">
                            👤 {user.name}
                        </div>
                        <button onClick={logout} className="btn btn-sm btn-error btn-outline text-white hover:bg-error">
                            Logout
                        </button>
                    </>
                )}
            </div>
        </div>
    )
}

export default Navbar
