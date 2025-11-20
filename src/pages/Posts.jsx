import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function Posts() {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    if (!posts) {
        return (
            <div className="container mx-auto px-4 py-16 text-center">
                <span className="loading loading-spinner loading-lg text-white"></span>
                <p className="text-white text-xl mt-4">⏳ Caricamento posts...</p>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-white text-center mb-2">📝 Tutti i Posts</h1>
            <p className="text-white/80 text-center mb-8">Clicca su un post per vedere i dettagli</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {posts.map((post) => (
                    <Link
                        to={`/posts/${post.id}`}
                        key={post.id}
                        className="card glass glass-hover"
                    >
                        <div className="card-body">
                            <h2 className="card-title text-white line-clamp-2">{post.title}</h2>
                            <p className="text-white/80 line-clamp-3">{post.body}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Posts
