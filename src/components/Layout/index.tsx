import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Navbar from 'components/Navbar'

export default function Layout() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  )
}
