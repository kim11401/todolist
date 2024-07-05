import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login.tsx'
import SingUp from '@/pages/SingUp/SingUp.tsx'

export const routers = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />
    },
    {
      path: '/signup',
      element: <SingUp />
    }
  ],
  { basename: '/' }
)
