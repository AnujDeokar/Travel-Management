import { useState } from 'react'
import { Link } from 'react-router-dom'
import './TripsPage.css'

const initialTrips = [
  {
    id: 1,
    name: 'Maldives Getaway',
    dates: 'Dec 12 – Dec 18, 2026',
    status: 'Upcoming',
    notes: 'Overwater villa, snorkeling day trip booked for Dec 14.',
  },
  {
    id: 2,
    name: 'Thailand Island Hop',
    dates: 'Mar 3 – Mar 10, 2027',
    status: 'Planning',
    notes: 'Still deciding between Koh Samui and Koh Phi Phi for the second leg.',
  },
]

export default function TripsPage() {
  const [trips, setTrips] = useState(initialTrips)
  const [expandedId, setExpandedId] = useState(null)

  function cancelTrip(id) {
    setTrips((prev) => prev.filter((trip) => trip.id !== id))
    if (expandedId === id) setExpandedId(null)
  }

  function toggleDetails(id) {
    setExpandedId((current) => (current === id ? null : id))
  }

  return (
    <section className="page trips-page">
      <h1 className="page__title">Your trips</h1>
      <p className="page__subtitle">Everything you've booked or are planning, in one place.</p>

      {trips.length === 0 ? (
        <div className="trips-page__empty">
          <h3>No trips yet</h3>
          <p>Once you book something, it'll show up here.</p>
          <Link to="/book" className="trips-page__empty-cta">Book a trip</Link>
        </div>
      ) : (
        <div className="trips-page__list">
          {trips.map((trip) => (
            <div key={trip.id} className="trip-card">
              <div className="trip-card__row">
                <div>
                  <h3 className="trip-card__name">{trip.name}</h3>
                  <p className="trip-card__dates">{trip.dates}</p>
                </div>
                <span className="trip-card__status">{trip.status}</span>
              </div>

              {expandedId === trip.id && (
                <p className="trip-card__notes">{trip.notes}</p>
              )}

              <div className="trip-card__actions">
                <button
                  className="trip-card__action trip-card__action--view"
                  onClick={() => toggleDetails(trip.id)}
                >
                  {expandedId === trip.id ? 'Hide details' : 'View details'}
                </button>
                <button
                  className="trip-card__action trip-card__action--cancel"
                  onClick={() => cancelTrip(trip.id)}
                >
                  Cancel
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}