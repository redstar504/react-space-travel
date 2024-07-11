import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './Home.tsx'
import './styles/screen.css'
import { createContext, useLayoutEffect, useState } from 'react'
import Destination from './Destination.tsx'
import Crew from './Crew.tsx'
import Tech from './Tech.tsx'

type CurrentPageContext = {
  currentPage?: string
}

export const CurrentPageContext = createContext({} as CurrentPageContext)

function App() {
  const location = useLocation()
  const [currentPage, setCurrentPage] = useState<string>()

  useLayoutEffect(() => {
    let page: string | null
    
    switch (location.pathname) {
      case '/':
        page = 'homePage'
        break
      case '/destination':
        page = 'destinationPage'
        break
      case '/crew':
        page = 'crewPage'
        break
      case '/tech':
        page = 'techPage'
        break
      default:
        page = null
    }
    
    if (!page || currentPage === page) return

    document.body.id = page
    setCurrentPage(page)
  }, [currentPage, location.pathname])

  return (
    <CurrentPageContext.Provider value={{ currentPage }}>
      <div id="container">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="destination" element={<Destination />} />
            <Route path="crew" element={<Crew />} />
            <Route path="tech" element={<Tech />} />
          </Route>
        </Routes>
      </div>
    </CurrentPageContext.Provider>
  )
}

export default App
