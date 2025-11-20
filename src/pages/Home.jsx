function Home() {
    return (
        <div className="home-page">
            <h1>Benvenuto nella React Router App</h1>
            <p className="subtitle">Un'applicazione completa con routing avanzato</p>

            <div className="features-grid">
                <div className="feature-card">
                    <h3>🚀 React Router</h3>
                    <p>Sistema di routing con layout gerarchico e rotte annidate</p>
                </div>
                <div className="feature-card">
                    <h3>📊 Loaders</h3>
                    <p>Caricamento dati prima del rendering con loader functions</p>
                </div>
                <div className="feature-card">
                    <h3>🔐 Autenticazione</h3>
                    <p>Pagine di Login e Register con form completi</p>
                </div>
                <div className="feature-card">
                    <h3>📝 Posts & Comments</h3>
                    <p>Gestione posts e commenti da API esterna</p>
                </div>
            </div>
        </div>
    )
}

export default Home
