import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css' // Estilos globais
import './App.css' // Estilos específicos da aplicação

// Renderiza o componente principal App dentro do elemento com id 'root'
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)