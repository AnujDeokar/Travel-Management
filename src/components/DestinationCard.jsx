import './DestinationCard.css'

export default function DestinationCard({ destination }) {
  const { name, tag, gradient, image } = destination

  return (
    <a className="dest-card" href={`#${destination.id}`}>
      <div
        className="dest-card__media"
        style={{
          backgroundImage: image ? `url(${image})` : gradient,
        }}
      >
        <div className="dest-card__scrim" />
        <div className="dest-card__body">
          <h3 className="dest-card__name">{name}</h3>
          <span className="dest-card__tag">{tag}</span>
        </div>
      </div>
    </a>
  )
}
