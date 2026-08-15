import { useState } from 'react'
import './FilterTabs.css'

const tabs = ['Popular', 'Trending']

export default function FilterTabs() {
  const [active, setActive] = useState(tabs[0])

  return (
    <div className="filter-tabs" role="tablist" aria-label="Destination filters">
      {tabs.map((tab) => (
        <button
          key={tab}
          role="tab"
          aria-selected={active === tab}
          className={`filter-tabs__pill${active === tab ? ' filter-tabs__pill--active' : ''}`}
          onClick={() => setActive(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  )
}
