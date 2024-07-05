import { RouterProvider } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import { routers } from './routes'
import './global.css'

function App() {
  function setScreenSize() {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  useLayoutEffect(() => {
    setScreenSize()

    function handleResize() {
      setScreenSize()
    }

    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return <RouterProvider router={routers} />
}

export default App
