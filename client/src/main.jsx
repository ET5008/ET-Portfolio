import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import { Extras, VersionHistory } from './versions/v2'
import { VersionRouter, VersionProvider } from './core'

const router = createBrowserRouter([
  {
    path: "/",
    element: <VersionRouter />
  },
  {
    path: "/extras",
    element: <Extras />
  },
  {
    path: "/version-history",
    element: <VersionHistory />
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <VersionProvider>
      <RouterProvider router={router} />
    </VersionProvider>
  </StrictMode>,
)
