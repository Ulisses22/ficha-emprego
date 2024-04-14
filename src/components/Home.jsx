import React from 'react';
// import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function Home() {
    return (
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-3">
                    <div className="d-flex flex-column justify-content-center">
                        <a href="/FichaCadastro" className="btn btn-primary mb-2">Candidata-se aqui</a>
                        <a href="/Descadastro" className="btn btn-secondary btn-primary">Descadastro</a>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
