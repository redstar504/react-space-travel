export default function Destination() {
  return (
    <main>
      <h2 id="pageTitle">
        <strong>01</strong>
        Pick Your Destination
      </h2>

      <div id="planetWrapper">
        <img className="planet" src="/destination/image-moon.png" alt="the moon" />
      </div>

      <div id="contentWrapper">
        <div id="content">
          <ul id="destinationNav">
            <li className="selected">
              <a href="#"><small>Moon</small></a>
            </li>
            <li>
              <a href="#"><small>Mars</small></a>
            </li>
            <li>
              <a href="#"><small>Europa</small></a>
            </li>
            <li>
              <a href="#"><small>Titan</small></a>
            </li>
          </ul>

          <h3>Moon</h3>

          <p>
            Discover Earth from an unparalleled vantage point on a rejuvenating lunar retreat. Immerse yourself in
            history by exploring the Luna 2 and Apollo 11 landing sites, ensuring a unique blend of relaxation and
            historical enrichment.
          </p>

          <div className="hr"></div>

          <ul id="destinationStats">
            <li>
              <small className="xs">Avg. Distance</small>
              <em className="lg">384,400 km</em>
            </li>
            <li>
              <small className="xs">Est. Travel Time</small>
              <em className="lg">3 days</em>
            </li>
          </ul>
        </div>
      </div>
    </main>
  )
}