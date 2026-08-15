import { useState } from 'react'
import Hero from '../components/Hero'
import FilterTabs from '../components/FilterTabs'
import Destinations from '../components/Destinations'
import './ExplorePage.css'

export default function ExplorePage() {
  const [filter, setFilter] = useState('popular')

  return (
    <div className="explore-page">
      <Hero />
      <FilterTabs active={filter} onChange={setFilter} />
      <Destinations filter={filter} />
    </div>
  )
}