export default function Tech() {
  return (
    <main>
      <h2 id="pageTitle">
        <strong>03</strong>
        Space Launch 101
      </h2>

      <div id="techImageWrapper">
        <img src="/tech/image-launch-vehicle-landscape.jpg" alt="Launch Vehicle" id="landscapeImage" />
        <img src="/tech/image-launch-vehicle-portrait.jpg" alt="Launch Vehicle" id="portraitImage" />
      </div>

      <nav id="techNav">
        <ol>
          <li className="active">
            <a href="#">1</a>
          </li>
          <li>
            <a href="#">2</a>
          </li>
          <li>
            <a href="#">3</a>
          </li>
        </ol>
      </nav>

      <article>
        <h3>
          <small>The Terminology</small>
          <em>Launch Vehicle</em>
        </h3>
        <p>
          A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's
          surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in
          operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!
        </p>
      </article>
    </main>
  )
}