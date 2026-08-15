import { useParams, Link, Navigate } from 'react-router-dom'
import journalPosts from '../data/journalPosts'
import './JournalPostPage.css'

export default function JournalPostPage() {
  const { postId } = useParams()
  const post = journalPosts.find((p) => p.id === postId)

  if (!post) {
    return <Navigate to="/journal" replace />
  }

  return (
    <section className="page journal-post-page">
      <Link to="/journal" className="journal-post-page__back">← Back to journal</Link>

      <span className="journal-post-page__date">{post.date}</span>
      <h1 className="journal-post-page__title">{post.title}</h1>

      <div className="journal-post-page__body">
        {post.content.split('\n\n').map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}