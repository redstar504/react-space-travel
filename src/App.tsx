import { Route, Routes } from 'react-router-dom'
import Layout from './Layout.tsx'
import Home from './Home.tsx'
import './styles/screen.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
