import destinations from '../data/destinations'
import DestinationCard from './DestinationCard'
import './Destinations.css'

export default function Destinations({ filter }) {
  const visible = filter
    ? destinations.filter((d) => d.category === filter)
    : destinations

  return (
    <section className="destinations" id="destinations">
      <h2 className="destinations__heading">Destination cards</h2>

      <div className="destinations__grid">
        {visible.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  )
}