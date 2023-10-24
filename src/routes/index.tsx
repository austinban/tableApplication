import React, { lazy } from 'react'

// Lazy load components to reduce initial load time
// Lazy loaded components need to be paired with the Suspense component which can be found in src/components/Layout/index.tsx
const Home = lazy(() => import('../pages/Home'))
const About = lazy(() => import('../pages/About'))
const Profile = lazy(() => import('../pages/Profile'))

const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  // The asterisk (*) is a wildcard that matches any characters after the slash (/) allowing for the url such as /profile/1, /profile/2, /profile/3, etc.
  { path: '/profile/*', element: <Profile /> },
]
export default routes
