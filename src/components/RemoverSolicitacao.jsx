import React, { useState } from 'react';

function Descadastro() {
  const [cpf, setCpf] = useState('');
  const [vaga, setVaga] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:4000/api/delete', {
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

      alert('Deletado com sucesso!');
      // Faça qualquer ação adicional após o sucesso, como redirecionar ou atualizar a lista de registros
    } catch (error) {
      alert(error.message || 'Ocorreu um erro ao processar a solicitação.');
    }
  };

  return (
    <div className="text-center container p-3 mt-3 mb-5">
      <div className="row justify-content-center">
        <form className="col-6 bg-light p-3" onSubmit={handleSubmit}>
          <div className="mb-3 text-start">
            <label htmlFor="cpf" className="form-label"><b>CPF:</b></label>
            <input placeholder='123-456-678-97' type="text" id="cpf" name="cpf" className="form-control" value={cpf} onChange={(e) => setCpf(e.target.value)} required />
          </div>
          <div className="mb-3 text-start">
            <label htmlFor="vaga" className="form-label"><b>Vaga:</b></label>
            <input placeholder='Eng. Produção' type="text" id="vaga" name="vaga" className="form-control" value={vaga} onChange={(e) => setVaga(e.target.value)} required />
          </div>
          <button type="submit" className="btn btn-danger w-100">Confirmar remover minha solicitação</button>
        </form>
      </div>
    </div>
  );
}

export default Descadastro;
