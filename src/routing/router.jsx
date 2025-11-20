import { createBrowserRouter } from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../pages/Home'
import Posts from '../pages/Posts'
import Detail from '../pages/Detail'
import Components from '../pages/Components'
import Login from '../pages/Login'
import Register from '../pages/Register'

// Loader per la pagina Posts
export const postsLoader = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')

    if (!response.ok) {
        throw new Error('Errore nel caricamento dei post')
    }

    const posts = await response.json()
    return { posts }
}

// Loader per la pagina Detail
export const detailLoader = async ({ params }) => {
    const { id } = params

    // Fetch post details
    const postResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    if (!postResponse.ok) {
        throw new Error('Post non trovato')
    }
    const post = await postResponse.json()

    // Fetch comments for this post
    const commentsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    if (!commentsResponse.ok) {
        throw new Error('Errore nel caricamento dei commenti')
    }
    const comments = await commentsResponse.json()

    return { post, comments }
}

// Configurazione del router
export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: 'posts',
                element: <Posts />,
                loader: postsLoader
            },
            {
                path: 'posts/:id',
                element: <Detail />,
                loader: detailLoader
            },
            {
                path: 'components',
                element: <Components />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            }
        ]
    }
])
