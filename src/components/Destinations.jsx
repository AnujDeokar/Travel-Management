import destinations from '../data/destinations'
import DestinationCard from './DestinationCard'
import './Destinations.css'

export default function Destinations() {
  return (
    <section className="destinations" id="destinations">
      <h2 className="destinations__heading">Destination cards</h2>

      <div className="destinations__grid">
        {destinations.map((d) => (
          <DestinationCard key={d.id} destination={d} />
        ))}
      </div>
    </section>
  )
}
