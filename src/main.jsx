import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthProvidor from './Providers/AuthProvidor'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvidor>
    <RouterProvider router={router}></RouterProvider>

    </AuthProvidor>
  </React.StrictMode>,
)
