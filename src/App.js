import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import FichaCadastro from './components/FormularioEmprego';
import Descadastro from './components/Descadastro';
import Footer from './components/Footer';
import Nav from './components/Nav';

function App() {
  return (
    <Router>
      <div className="App">
      <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="FichaCadastro" element={<FichaCadastro />} />
          <Route path="Descadastro" element={<Descadastro />} />
          {/* Outras rotas */}
        </Routes>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
