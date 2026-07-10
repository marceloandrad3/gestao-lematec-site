import { useEffect } from 'react'
import { registrarVisita } from '@/services/analytics'

export function useRegistrarVisita() {
  useEffect(() => {
    registrarVisita()
  }, [])
}
