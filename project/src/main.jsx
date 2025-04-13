import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Page2 from './pages/page2/page2.jsx'
import Page1 from './pages/page1/page1.jsx'
import Page5 from './pages/page5/Page5.jsx'
import HostChart from './pages/page2/components/HostChart.jsx'
import MedalChart from './pages/page2/components/WorlMap.jsx'
import AthleteChart from './pages/page2/components/AthleteChart.jsx'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Page2 />
  </StrictMode>,
)
 