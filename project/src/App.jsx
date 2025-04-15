import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Page1 from './pages/page1/page1';
import Page2 from './pages/page2/page2';
import Page3 from './pages/page3/Page3';
import Page4 from './pages/page4/Page4';
import Page5 from './pages/page5/Page5';
import Manager from './pages/Manager/Manager';
import './App.css'

function App() {
  

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Page1 />}></Route>
          <Route path='/page1' element={<Page1 />}></Route>
          <Route path='/page2' element={<Page2 />}></Route>
          <Route path='/page3' element={<Page3 />}></Route>
          <Route path='/page4' element={<Page4 />}></Route>
          <Route path='/page5' element={<Page5 />}></Route>
          <Route path='/index' element={<Manager />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
