import { Link } from 'react-router-dom'
import journalPosts from '../data/journalPosts'
import './JournalPage.css'

export default function JournalPage() {
  return (
    <section className="page journal-page">
      <h1 className="page__title">Journal</h1>
      <p className="page__subtitle">Travel notes, guides, and stories from the road.</p>

      <div className="journal-page__list">
        {journalPosts.map((post) => (
          <Link key={post.id} className="journal-post" to={`/journal/${post.id}`}>
            <div className="journal-post__text">
              <h3 className="journal-post__title">{post.title}</h3>
              <p className="journal-post__excerpt">{post.excerpt}</p>
            </div>
            <span className="journal-post__date">{post.date}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}