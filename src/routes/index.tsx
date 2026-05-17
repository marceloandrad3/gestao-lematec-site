import { createBrowserRouter } from 'react-router-dom'

import HomePage from '@/pages/Home'
import Privacidade from '@/pages/Privacidade'
import Termos from '@/pages/Termos'
import AppPage from '@/pages/App'
import AppIphone from '@/pages/AppIphone'
import AppAndroid from '@/pages/AppAndroid'

export const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/privacidade', element: <Privacidade /> },
  { path: '/termos', element: <Termos /> },
  { path: '/app', element: <AppPage /> },
  { path: '/app/iphone', element: <AppIphone /> },
  { path: '/app/android', element: <AppAndroid /> },
])
