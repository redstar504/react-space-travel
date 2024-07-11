import { Link, Outlet } from 'react-router-dom'
import { useContext } from 'react'
import { CurrentPageContext } from './App.tsx'

export default function Layout() {
  const { currentPage } = useContext(CurrentPageContext)

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
              <li className={currentPage === 'homePage' ? 'active' : ''}>
                <Link to="/">Home</Link>
              </li>
              <li className={currentPage === 'destinationPage' ? 'active' : ''}>
                <Link to="/destination">Destination</Link>
              </li>
              <li className={currentPage === 'crewPage' ? 'active' : ''}>
                <Link to="/crew">Crew</Link>
              </li>
              <li className={currentPage === 'techPage' ? 'active' : ''}>
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
