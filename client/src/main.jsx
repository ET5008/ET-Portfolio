import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import './index.css'
import Extras from './pages/Extras.jsx'
import VersionHistory from './pages/VersionHistory.jsx'
import VersionRouter from './components/routing/VersionRouter.jsx'
import { VersionProvider } from './context/VersionContext.jsx'

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
