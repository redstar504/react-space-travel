import { Route, Routes, useLocation } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './Home.tsx'
import './styles/screen.css'
import { useLayoutEffect } from 'react'

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
        </Route>
      </Routes>
    </div>
  )
}

export default App
