import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { GlobalProvider } from './Context/Context.jsx'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(

  <GlobalProvider>
    <App />
  </GlobalProvider>

)
