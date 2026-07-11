import { doc, setDoc, updateDoc, increment } from 'firebase/firestore'
import { db } from '@/config/firebase'

const STORAGE_KEY = 'lematec_ultima_visita'

function dataHoje(): string {
  const agora = new Date()
  const ano = agora.getFullYear()
  const mes = String(agora.getMonth() + 1).padStart(2, '0')
  const dia = String(agora.getDate()).padStart(2, '0')
  return `${ano}-${mes}-${dia}`
}

export async function registrarVisita(): Promise<void> {
  try {
    const hoje = dataHoje()

    if (localStorage.getItem(STORAGE_KEY) === hoje) return

    const ref = doc(db, 'admin', 'siteAnalytics', 'dias', hoje)
    try {
      // Primeiro visitante do dia: cria com count literal 1 (exigido pelas rules)
      await setDoc(ref, { count: 1 })
    } catch {
      // Doc ja existe: incrementa (rules validam count == anterior + 1)
      await updateDoc(ref, { count: increment(1) })
    }

    localStorage.setItem(STORAGE_KEY, hoje)
  } catch {
    // Analytics nunca pode quebrar o site — falha silenciosa
  }
}
