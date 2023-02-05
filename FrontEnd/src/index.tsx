import React from 'react'
import { createRoot } from 'react-dom/client'
import '@src/styles/global.css'
import App from './App'
import logo from '@assets/images/Logo.png'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <App />
    <img src={logo}></img>
  </React.StrictMode>,
)
