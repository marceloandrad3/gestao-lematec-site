import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/config/firebase'

const PRECO_FALLBACK = 99.99

export function usePreco() {
  const [preco, setPreco] = useState<number>(PRECO_FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const buscarPreco = async () => {
      try {
        const snap = await getDoc(doc(db, 'admin', 'settings'))
        if (snap.exists()) {
          const valor = snap.data()?.subscriptionValue
          if (typeof valor === 'number' && valor > 0) {
            setPreco(valor)
          }
        }
      } catch {
        // fallback mantido
      } finally {
        setLoading(false)
      }
    }

    buscarPreco()
  }, [])

  const precoFormatado = preco.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })

  return { preco, precoFormatado, loading }
}
