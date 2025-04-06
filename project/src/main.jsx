import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Page1 from './pages/page1/page1.jsx'
import Page5 from './pages/page5/Page5.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page5 />
  </StrictMode>,
)
