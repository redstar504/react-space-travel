import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <h1>
          <a href="/index">Space Travel</a>
        </h1>
        <nav id="siteNav">
          <input id="hamburgerToggle" type="checkbox" hidden />
          <label htmlFor="hamburgerToggle" id="icon"></label>
          <div id="wrapperForMobileSidebar">
            <ol>
              <li className="active">
                <a href="/index">Home</a>
              </li>
              <li>
                <a href="/destination">Destination</a>
              </li>
              <li>
                <a href="/crew">Crew</a>
              </li>
              <li>
                <a href="/tech">Technology</a>
              </li>
            </ol>
          </div>
        </nav>
      </header>

      <Outlet />
    </>
  )
}
