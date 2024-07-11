import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <h1>
          <Link to="/">Space Travel</Link>
        </h1>
        <nav id="siteNav">
          <input id="hamburgerToggle" type="checkbox" hidden />
          <label htmlFor="hamburgerToggle" id="icon"></label>
          <div id="wrapperForMobileSidebar">
            <ol>
              <li className="active">
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/destination">Destination</Link>
              </li>
              <li>
                <Link to="/crew">Crew</Link>
              </li>
              <li>
                <Link to="/tech">Technology</Link>
              </li>
            </ol>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  )
}
