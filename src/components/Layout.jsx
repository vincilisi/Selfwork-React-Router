import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import useScroll from '../hooks/useScroll'

function Layout() {
    const [ref, scrollY] = useScroll()

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>

            {/* Mostra bottone Scroll to Top solo dopo aver scrollato 300px */}
            {scrollY > 300 && (
                <button
                    className="btn btn-circle btn-lg fixed bottom-8 right-8 z-40 bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white/30 text-white hover:scale-110 transition-all shadow-lg"
                    onClick={scrollToTop}
                    aria-label="Torna su"
                >
                    ↑
                </button>
            )}
        </>
    )
}

export default Layout
