import { createBrowserRouter } from 'react-router-dom'

import HomePage from '@/pages/Home'
import Privacidade from '@/pages/Privacidade'
import Termos from '@/pages/Termos'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/privacidade',
    element: <Privacidade />,
  },
  {
    path: '/termos',
    element: <Termos />,
  },
])
