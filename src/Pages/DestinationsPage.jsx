import { useState } from 'react'
import destinations from '../data/destinations'
import DestinationCard from '../components/DestinationCard'
import './DestinationsPage.css'

const categories = [
  { label: 'All', value: 'all' },
  { label: 'Popular', value: 'popular' },
  { label: 'Trending', value: 'trending' },
]

export default function DestinationsPage() {
  const [query, setQuery] = useState('')
  const [category, setCategory] = useState('all')

  const visible = destinations.filter((d) => {
    const matchesCategory = category === 'all' || d.category === category
    const matchesQuery = d.name.toLowerCase().includes(query.trim().toLowerCase())
    return matchesCategory && matchesQuery
  })

  return (
    <section className="page destinations-page">
      <h1 className="page__title">All destinations</h1>
      <p className="page__subtitle">Browse every place we cover.</p>

      <div className="destinations-page__controls">
        <input
          type="text"
          className="destinations-page__search"
          placeholder="Search destinations..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <div className="destinations-page__categories">
          {categories.map((c) => (
            <button
              key={c.value}
              className={`destinations-page__chip${category === c.value ? ' destinations-page__chip--active' : ''}`}
              onClick={() => setCategory(c.value)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="destinations-page__empty">No destinations match "{query}".</p>
      ) : (
        <div className="destinations-page__grid">
          {visible.map((d) => (
            <DestinationCard key={d.id} destination={d} />
          ))}
        </div>
      )}
    </section>
  )
}