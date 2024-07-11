import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      Space Travel
      <Outlet />
    </div>
  )
}
