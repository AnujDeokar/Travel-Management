// Swap `gradient` for a real photo by adding an `image` field
// (see DestinationCard.jsx — it already prefers `image` over `gradient`).
const destinations = [
  {
    id: 'maldives',
    name: 'Maldives',
    tag: 'Island escapes',
    category: 'popular',
    image: '/Images/Maldives.jpg',
    gradient: 'linear-gradient(135deg, #7f5aa8 0%, #ff7eb3 55%, #ffb37b 100%)',
  },
  {
    id: 'coastal-drive',
    name: 'Coastal Drive',
    tag: 'Road trips',
    category: 'trending',
    image: '/Images/costaldrive.avif',
    gradient: 'linear-gradient(135deg, #0f7a6b 0%, #17b399 55%, #7fe0c4 100%)',
  },
  {
    id: 'thailand',
    name: 'Thailand',
    tag: 'Beach & culture',
    category: 'popular',
    image: '/Images/thailand.avif',
    gradient: 'linear-gradient(135deg, #e8562f 0%, #f2994a 55%, #f7c873 100%)',
  },
  {
    id: 'paris',
    name: 'Paris',
    tag: 'City breaks',
    category: 'trending',
    image: '/Images/paris.avif',
    gradient: 'linear-gradient(135deg, #2f5d8a 0%, #4f7fb0 55%, #9fc6de 100%)',
  },
]

export default destinations