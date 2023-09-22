import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'

import PageHome from '../pages/PageHome'
import PageKnowUs from '../pages/PageKnowUs'
import PageServices from '../pages/PageServices'
import PageOperations from '../pages/PageOperations'

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <PageHome />
      },
      {
        path: '/conocenos',
        element: <PageKnowUs />
      },
      {
        path: '/servicios',
        element: <PageServices />
      },
      {
        path: '/operaciones',
        element: <PageOperations />
      }
    ]
  }
 
])