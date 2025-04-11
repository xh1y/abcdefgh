import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './pages/page1/page1';
import Page2 from './pages/page2/page2';
import './App.css'

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Page1 />}></Route>
          <Route path='/page2' element={<Page2 />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
