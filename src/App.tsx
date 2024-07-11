import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './Home.tsx'
import './styles/screen.css'
import { useLayoutEffect } from 'react'
import Destination from './Destination.tsx'
import Crew from './Crew.tsx'
import Tech from './Tech.tsx'

function App() {
  const location = useLocation()

  useLayoutEffect(() => {
    switch (location.pathname) {
      case '/':
        document.body.id = 'homePage'
        break
      case '/destination':
        document.body.id = 'destinationPage'
        break
      case '/crew':
        document.body.id = 'crewPage'
        break
      case '/tech':
        document.body.id = 'techPage'
        break
    }
  }, [location.pathname])

  return (
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
  )
}

export default App
