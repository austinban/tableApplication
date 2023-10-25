import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import Loader from 'components/Loader'

export default function Layout() {
  return (
    <Suspense fallback={<Loader fixed />}>
      <Outlet />
    </Suspense>
  )
}
