import './FilterTabs.css'

const tabs = [
  { label: 'Popular', value: 'popular' },
  { label: 'Trending', value: 'trending' },
]

export default function FilterTabs({ active, onChange }) {
  return (
    <div className="filter-tabs" role="tablist" aria-label="Destination filters">
      {tabs.map((tab) => (
        <button
          key={tab.value}
          role="tab"
          aria-selected={active === tab.value}
          className={`filter-tabs__pill${active === tab.value ? ' filter-tabs__pill--active' : ''}`}
          onClick={() => onChange(tab.value)}
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}