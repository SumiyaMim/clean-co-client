import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import routes from './routes/Routes.jsx'
import AuthProvider from './providers/AuthProvider.jsx'
import {Toaster} from 'react-hot-toast'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
 
const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={routes} />
      </AuthProvider>
      <Toaster/>
    </QueryClientProvider>
  </React.StrictMode>,
)
