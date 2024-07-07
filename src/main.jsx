import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import InfoPais from './pages/InfoPais.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import PaisPage from './pages/PaisPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <PaisPage />,
    errorElement: <ErrorPage />
  },
  {
    path: '/:namePais',
    element: <InfoPais />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
