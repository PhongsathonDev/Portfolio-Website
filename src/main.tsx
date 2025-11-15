import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'
import './index.css'

import App from './App.tsx'
import Home from './pages/Home.tsx'
import Gallery from './pages/Gallery.tsx' // 1. นำเข้า Gallery component

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/gallery', // 2. เพิ่มเส้นทางใหม่
    element: <Gallery />, // เชื่อมโยงกับ Gallery component
  },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)