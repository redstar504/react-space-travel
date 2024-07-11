export default function Crew() {
  return (
    <main>
      <h2 id="pageTitle">
        <strong>02</strong>
        Meet Your Crew
      </h2>

      <div id="crewImageWrapper">
        <img id="crewImage" src="/react-space-travel/crew/image-douglas-hurley.webp" alt="Cmdr. Douglas Hurley" />
      </div>

      <div id="contentWrapper">
        <div id="content">
          <nav id="crewNav">
            <ul>
              <li className="active">
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
              <li>
                <a href="#">Page 4</a>
              </li>
            </ul>
          </nav>
          <h3>
            <span>Commander</span>
            <em>Douglas Hurley</em>
          </h3>

          <p>
            Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut.
            He launched into space for the third time as commander of Crew Dragon Demo-2.
          </p>
        </div>
      </div>
    </main>
  )
}