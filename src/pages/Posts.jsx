import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

function Posts() {
    const posts = useFetch('https://jsonplaceholder.typicode.com/posts')

    if (!posts) {
        return (
            <div className="posts-page">
                <div className="loading-spinner">⏳ Caricamento posts...</div>
            </div>
        )
    }

    return (
        <div className="posts-page">
            <h1>📝 Tutti i Posts</h1>
            <p className="page-subtitle">Clicca su un post per vedere i dettagli</p>

            <div className="posts-grid">
                {posts.map((post) => (
                    <Link to={`/posts/${post.id}`} key={post.id} className="post-card">
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default Posts
