import './TripsPage.css'

const trips = [
  { id: 1, name: 'Maldives Getaway', dates: 'Dec 12 – Dec 18, 2026', status: 'Upcoming' },
  { id: 2, name: 'Thailand Island Hop', dates: 'Mar 3 – Mar 10, 2027', status: 'Planning' },
]

export default function TripsPage() {
  return (
    <section className="page trips-page">
      <h1 className="page__title">Your trips</h1>
      <p className="page__subtitle">Everything you've booked or are planning, in one place.</p>

      <div className="trips-page__list">
        {trips.map((trip) => (
          <div key={trip.id} className="trip-card">
            <div>
              <h3 className="trip-card__name">{trip.name}</h3>
              <p className="trip-card__dates">{trip.dates}</p>
            </div>
            <span className="trip-card__status">{trip.status}</span>
          </div>
        ))}
      </div>
    </section>
  )
}