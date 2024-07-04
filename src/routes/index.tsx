import { createBrowserRouter } from 'react-router-dom'
import Login from '../pages/Login/Login.tsx'

export const routers = createBrowserRouter(
  [
    {
      path: '/',
      element: <Login />
    }
  ],
  { basename: '/' }
)
