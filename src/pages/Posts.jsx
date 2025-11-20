import { useLoaderData, Link } from 'react-router-dom'

function Posts() {
    const { posts } = useLoaderData()

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
