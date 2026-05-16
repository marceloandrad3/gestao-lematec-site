import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyC5RcBiT1xRFVBKhBJ1A-jV1WadZXWhluU',
  authDomain: 'gen-lang-client-0123040986.firebaseapp.com',
  projectId: 'gen-lang-client-0123040986',
  storageBucket: 'gen-lang-client-0123040986.firebasestorage.app',
  messagingSenderId: '771360812262',
  appId: '1:771360812262:web:dfc2ecee7e7ba855e35f27',
}

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app, 'ai-studio-c126edb7-8b70-42e8-9e25-94624d14aee2')
