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
            <main>
                <Outlet />
            </main>

            {/* Mostra bottone Scroll to Top solo dopo aver scrollato 300px */}
            {scrollY > 300 && (
                <button
                    className="scroll-to-top-btn"
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
