import { useLoaderData, Link } from 'react-router-dom'

function Detail() {
    const { post, comments } = useLoaderData()

    return (
        <div className="detail-page">
            <Link to="/posts" className="back-button">← Torna ai Posts</Link>

            <div className="post-detail">
                <h1>{post.title}</h1>
                <p>{post.body}</p>
            </div>

            <div className="comments-section">
                <h2>💬 Commenti ({comments.length})</h2>
                {comments.map((comment) => (
                    <div key={comment.id} className="comment-card">
                        <h3>{comment.name}</h3>
                        <p className="comment-email">{comment.email}</p>
                        <p>{comment.body}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Detail
