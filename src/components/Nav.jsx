import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link to="/" className="navbar-brand">Home</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/FichaCadastro" className="nav-link">Cadastro</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/Descadastro" className="nav-link">Descadastro</Link>
                        </li>
                        {/* Adicione outras rotas do menu conforme necessário */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
