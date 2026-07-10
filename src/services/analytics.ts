import { doc, setDoc, increment } from 'firebase/firestore'
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

    await setDoc(
      doc(db, 'admin', 'siteAnalytics', 'dias', hoje),
      { count: increment(1) },
      { merge: true }
    )

    localStorage.setItem(STORAGE_KEY, hoje)
  } catch {
    // Analytics nunca pode quebrar o site — falha silenciosa
  }
}
