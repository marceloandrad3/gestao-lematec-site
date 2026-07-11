import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'

import { router } from '@/routes'
import { useRegistrarVisita } from '@/hooks/useRegistrarVisita'

import './index.css'

function Root() {
  useRegistrarVisita()
  return <RouterProvider router={router} />
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>,
)
