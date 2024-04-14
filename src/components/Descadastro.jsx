import React, { useState } from 'react';

function Descadastro() {
    const [cpf, setCpf] = useState('');
    const [vaga, setVaga] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/api/delete', {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ cpf, vaga })
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage || 'Erro ao processar a solicitação.');
            }

            alert('Registro deletado com sucesso!');
            // Faça qualquer ação adicional após o sucesso, como redirecionar ou atualizar a lista de registros
        } catch (error) {
            alert(error.message || 'Ocorreu um erro ao processar a solicitação.');
        }
    };

    return (
        <div className="text-center container p-3 mt-3 mb-5">
            <h2><b>Descadastro</b></h2>
            <form className="d-inline-block" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="cpf" className="form-label">CPF:</label>
                    <input type="text" id="cpf" name="cpf" className="form-control" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="vaga" className="form-label">Vaga:</label>
                    <input type="text" id="vaga" name="vaga" className="form-control" value={vaga} onChange={(e) => setVaga(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary w-100">Confirmar</button>
            </form>
        </div>
    );
}

export default Descadastro;
