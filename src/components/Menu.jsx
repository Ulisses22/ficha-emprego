import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container">
                <Link to="/" className="navbar-brand">Início</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/fichaSolicitacao" className="nav-link">Clique aqui para se candidata-se</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/removerSolicitacao" className="nav-link">Remover solicitação</Link>
                        </li>
                        {/* Adicione outras rotas do menu conforme necessário */}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Menu;
