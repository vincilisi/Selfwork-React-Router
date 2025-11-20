function Home() {
    return (
        <div className="container mx-auto px-4 py-16 text-center">
            <h1 className="text-5xl font-bold text-white mb-4">Benvenuto nella React Router App</h1>
            <p className="text-xl text-white/80 mb-12">Un'applicazione completa con routing avanzato</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
                <div className="card glass hover:-translate-y-2 transition-transform">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl mb-2">🚀</h2>
                        <h3 className="text-xl font-bold text-white">React Router</h3>
                        <p className="text-white/80">Sistema di routing con layout gerarchico e rotte annidate</p>
                    </div>
                </div>
                <div className="card glass hover:-translate-y-2 transition-transform">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl mb-2">📊</h2>
                        <h3 className="text-xl font-bold text-white">Custom Hooks</h3>
                        <p className="text-white/80">useFetch e useScroll per gestione dati e scroll</p>
                    </div>
                </div>
                <div className="card glass hover:-translate-y-2 transition-transform">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl mb-2">🔐</h2>
                        <h3 className="text-xl font-bold text-white">Autenticazione</h3>
                        <p className="text-white/80">Pagine di Login e Register con Context API</p>
                    </div>
                </div>
                <div className="card glass hover:-translate-y-2 transition-transform">
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-3xl mb-2">📝</h2>
                        <h3 className="text-xl font-bold text-white">Posts & Comments</h3>
                        <p className="text-white/80">Gestione posts e commenti da API esterna</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
