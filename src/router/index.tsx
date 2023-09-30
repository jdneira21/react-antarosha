import { createBrowserRouter } from 'react-router-dom'
import RootLayout from '../layouts/RootLayout'

import PageHome from '../pages/PageHome'
import PageKnowUs from '../pages/PageKnowUs'
import PageServices from '../pages/PageServices'
import PageGallery from '../pages/PageGallery'
import PageImagen from '../pages/PageImagen'
import PageOperations from '../pages/PageOperations'


import Panel from '../pages/Panel'
import PanelGallery from '../pages/PanelGallery'


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
        path: '/galeria',
        element: <PageGallery />,
        // children: [
        //   {
        //     path: ':slug',
        //     element: <PageImagen />
        //   }
        // ]
      },
      {
        path: '/galeria/:slug',
        element: <PageImagen />
      },
      {
        path: '/operaciones',
        element: <PageOperations />
      },
      {
        path: '/panel',
        element: <Panel />
      },
      {
        path: '/panel-galeria',
        element: <PanelGallery />
      }
    ]
  }
 
])