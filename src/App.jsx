import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.scss'
import 'devextreme/dist/css/dx.light.css';
import { Header } from './components/Header/Header'
import { Movies } from './pages/Movies/Movies'; 
import { About } from './pages/About/About'
import { HallsContextProvider } from './pages/Halls/Context';
import { Halls } from './pages/Halls/Halls';


function App() {

  return (
    <HallsContextProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/about" element={<About />} />
          <Route path="/halls" element={<Halls />} />
          {/* можно добавить другие страницы:
          <Route path="/about" element={<About />} />
          <Route path="/halls" element={<Halls />} /> */}
        </Routes>
      </Router>
    </HallsContextProvider>
  )
}

export default App
