import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import { useRegistrarVisita } from '@/hooks/useRegistrarVisita';

export default function App() {
  useRegistrarVisita();
  return <RouterProvider router={router} />;
}
