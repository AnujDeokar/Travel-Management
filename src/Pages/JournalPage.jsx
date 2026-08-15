import './JournalPage.css'

const posts = [
  { id: 1, title: '48 hours in Paris on a budget', date: 'Jul 2026' },
  { id: 2, title: 'Best time to visit the Maldives', date: 'Jun 2026' },
  { id: 3, title: 'A slow coastal drive down the Amalfi coast', date: 'May 2026' },
]

export default function JournalPage() {
  return (
    <section className="page journal-page">
      <h1 className="page__title">Journal</h1>
      <p className="page__subtitle">Travel notes, guides, and stories from the road.</p>

      <div className="journal-page__list">
        {posts.map((post) => (
          <a key={post.id} className="journal-post" href="#">
            <h3 className="journal-post__title">{post.title}</h3>
            <span className="journal-post__date">{post.date}</span>
          </a>
        ))}
      </div>
    </section>
  )
}