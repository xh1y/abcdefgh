import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import Page2 from './pages/page2/page2.jsx'
import Page1 from './pages/page1/page1.jsx'
import HostChart from './pages/page2/components/HostChart.jsx'
import MedalChart from './pages/page2/components/MedalChart.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page1 />
  </StrictMode>,
)
 