import { useState, MouseEvent } from 'react'
import padNumber from './util/padNumber.ts'

const destinations = [
  {
    name: 'Moon',
    imagePath: '/react-space-travel/destination/image-moon.webp',
    description: 'Discover Earth from an unparalleled vantage point on a rejuvenating lunar retreat. Immerse yourself in history by exploring the Luna 2 and Apollo 11 landing sites, ensuring a unique blend of relaxation and historical enrichment.',
    distance: '384,400 KM',
    travelTime: '3 days',
  },
  {
    name: 'Mars',
    imagePath: '/react-space-travel/destination/image-mars.webp',
    description: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
    distance: '225 mil. km',
    travelTime: '9 months',
  },
  {
    name: 'Europa',
    imagePath: '/react-space-travel/destination/image-europa.webp',
    description: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
    distance: '628 mil. km',
    travelTime: '3 years',
  },
  {
    name: 'Titan',
    imagePath: '/react-space-travel/destination/image-titan.webp',
    description: 'he only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
    distance: '1.6 bil. km',
    travelTime: '7 years'
  },
]

type Destination = {
  name: string
  imagePath: string
  description: string
  distance: string
  travelTime: string
}

export default function Destination() {
  const [activeDestination, setActiveDestination] = useState<Destination>(destinations[0])
  const currentIndex = destinations.findIndex(d => d.name === activeDestination.name) + 1

  const handleChangeDestination = (i: number) => (e: MouseEvent) => {
    e.preventDefault()
    const nextDestination = destinations[i]
    setActiveDestination(nextDestination)
  }

  return (
    <main>
      <h2 id="pageTitle">
        <strong>{padNumber(currentIndex)}</strong>
        Pick Your Destination
      </h2>

      <div id="planetWrapper">
        <img className="planet" src={activeDestination.imagePath} alt={activeDestination.name} />
      </div>

      <div id="contentWrapper">
        <div id="content">
          <ul id="destinationNav">
            {destinations.map((d, i) => (
              <li key={i} className={d.name === activeDestination.name ? 'selected' : ''}>
                <button onClick={handleChangeDestination(i)}><small>{d.name}</small></button>
              </li>
            ))}
          </ul>

          <h3>{activeDestination.name}</h3>
          <p>{activeDestination.description}</p>

          <div className="hr"></div>

          <ul id="destinationStats">
            <li>
              <small className="xs">Avg. Distance</small>
              <em className="lg">{activeDestination.distance}</em>
            </li>
            <li>
              <small className="xs">Est. Travel Time</small>
              <em className="lg">{activeDestination.travelTime}</em>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}