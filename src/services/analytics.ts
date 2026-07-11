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

const FONTES_VALIDAS = ['instagram', 'tiktok', 'facebook']

export async function registrarVisita(): Promise<void> {
  try {
    const hoje = dataHoje()

    const param = new URLSearchParams(window.location.search).get('fonte') || 'direto'
    const fonte = FONTES_VALIDAS.includes(param) ? param : 'direto'

    // Todo acesso conta; 'unicos' incrementa so na primeira visita do dia deste navegador
    const ehUnico = localStorage.getItem(STORAGE_KEY) !== hoje

    const dados: Record<string, unknown> = { count: increment(1), [fonte]: increment(1) }
    if (ehUnico) dados.unicos = increment(1)

    await setDoc(doc(db, 'admin', 'siteAnalytics', 'dias', hoje), dados, { merge: true })

    localStorage.setItem(STORAGE_KEY, hoje)
  } catch {
    // Analytics nunca pode quebrar o site — falha silenciosa
  }
}
