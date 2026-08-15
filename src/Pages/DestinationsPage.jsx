import destinations from '../data/destinations'
import DestinationCard from '../components/DestinationCard'
import './DestinationsPage.css'

export default function DestinationsPage() {
  return (
    <section className="page destinations-page">
      <h1 className="page__title">All destinations</h1>
      <p className="page__subtitle">Browse every place we cover — filter and search coming soon.</p>

      <div className="destinations-page__grid">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  )
}