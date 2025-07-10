import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import 'devextreme/dist/css/dx.light.css';
import { Header } from './components/Header/Header'
import { Movies } from './pages/Movies/Movies'; 
function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        {/* можно добавить другие страницы:
        <Route path="/about" element={<About />} />
        <Route path="/halls" element={<Halls />} /> */}
      </Routes>
    </Router>
  )
}

export default App
