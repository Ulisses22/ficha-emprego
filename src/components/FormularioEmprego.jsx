import React, { Component } from 'react';

class JobApplicationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            funcao_pretendida: '',
            nome: '',
            ctps: '',
            serie: '',
            dataNascimento: '',
            cpf: '',
            rg: '',
            orgaoEmissor: '',
            endereco: '',
            numero: '',
            bairro: '',
            municipio: '',
            uf: '',
            cep: '',
            naturalidade: '',
            telefone: '',
            celular: '',
            email: '',
            fundamental: '',
            medio: '',
            superior: '',
            cursoSuperior: '',
            tituloEleitor: '',
            zona: '',
            pis: '',
            carteiraHabilitacao: '',
            nomePai: '',
            nomeMae: '',
            estadoCivil: '',
            nomeConjuge: '',
            residencia: '',
            certidaoMilitar: '',
            serieCertidao: '',
            categoriaCertidao: '',
            possuiFilhos: ''
        };
    }

    handleChange = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3000/api/insert', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            });

            if (!response.ok) {
                const errorMessage = await response.text();
                throw new Error(errorMessage || 'Erro ao processar a solicitação.');
            }

            alert('Dados inseridos com sucesso!');
            // Faça qualquer ação adicional após o sucesso, como redirecionar ou limpar o formulário
        } catch (error) {
            alert(error.message || 'Ocorreu um erro ao processar a solicitação.');
        }
    };

    render() {
        return (
            <div className="container border p-3 mt-3 mb-5">
                <h1 className="mb-4"><b>Ficha de Solicitação de Emprego</b></h1>

                <form onSubmit={this.handleSubmit}>
                    <div className="row">
                        <div className="col">
                            <label className="form-label">Função Pretendida:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="funcao_pretendida"
                                value={this.state.funcao_pretendida}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">

                        <div className="col">
                            <label className="form-label">Nome:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nome"
                                value={this.state.nome}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">CTPS nº:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="ctps"
                                value={this.state.ctps}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">Série:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="serie"
                                value={this.state.serie}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>


                    <div className="row">
                        <div className="col">
                            <label className="form-label">Data de Nascimento:</label>
                            <input
                                type="date"
                                className="form-control"
                                name="dataNascimento"
                                value={this.state.dataNascimento}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">CPF:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cpf"
                                value={this.state.cpf}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">RG:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="rg"
                                value={this.state.rg}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">Orgão Emissor:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="orgaoEmissor"
                                value={this.state.orgaoEmissor}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label">Endereço:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="endereco"
                                value={this.state.endereco}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">Nº:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="numero"
                                value={this.state.numero}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label">Bairro:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="bairro"
                                value={this.state.bairro}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">Município:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="municipio"
                                value={this.state.municipio}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">UF:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="uf"
                                value={this.state.uf}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">CEP:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="cep"
                                value={this.state.cep}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">Naturalidade:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="naturalidade"
                                value={this.state.naturalidade}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <label className="form-label">Telefone:</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="telefone"
                                value={this.state.telefone}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">Celular:</label>
                            <input
                                type="tel"
                                className="form-control"
                                name="celular"
                                value={this.state.celular}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">E-mail:</label>
                            <input
                                type="email"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-4">
                            <label className="form-label">Ensino Fundamental:</label>
                            <select
                                className="form-select"
                                name="fundamental"
                                value={this.state.fundamental}
                                onChange={this.handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="completo">Completo</option>
                                <option value="incompleto">Incompleto</option>
                            </select>
                        </div>

                        <div className="col-4">
                            <label className="form-label">Ensino Médio:</label>
                            <select
                                className="form-select"
                                name="medio"
                                value={this.state.medio}
                                onChange={this.handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="completo">Completo</option>
                                <option value="incompleto">Incompleto</option>
                            </select>
                        </div>

                        <div className="col-4">
                            <label className="form-label">Superior:</label>
                            <select
                                className="form-select"
                                name="superior"
                                value={this.state.superior}
                                onChange={this.handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="completo">Completo</option>
                                <option value="incompleto">Incompleto</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label">Título de Eleitor nº:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="tituloEleitor"
                                value={this.state.tituloEleitor}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">Zona:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="zona"
                                value={this.state.zona}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">Nº PIS:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="pis"
                                value={this.state.pis}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label">Car. Habilitação:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="carteiraHabilitacao"
                                value={this.state.carteiraHabilitacao}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className="col">
                            <label className="form-label">Residência:</label>
                            <select
                                className="form-select"
                                name="residencia"
                                value={this.state.residencia}
                                onChange={this.handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="propria">Própria</option>
                                <option value="alugada">Alugada</option>
                            </select>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label">Nome do Pai:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nomePai"
                                value={this.state.nomePai}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">Nome da Mãe:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nomeMae"
                                value={this.state.nomeMae}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">Nome do Cônjuge:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="nomeConjuge"
                                value={this.state.nomeConjuge}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label">Certidão Militar nº:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="certidaoMilitar"
                                value={this.state.certidaoMilitar}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">Série:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="serieCertidao"
                                value={this.state.serieCertidao}
                                onChange={this.handleChange}
                            />
                        </div>

                        <div className="col">
                            <label className="form-label">Categoria:</label>
                            <input
                                type="text"
                                className="form-control"
                                name="categoriaCertidao"
                                value={this.state.categoriaCertidao}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col">
                            <label className="form-label">Estado Civil:</label>
                            <select
                                className="form-select"
                                name="estadoCivil"
                                value={this.state.estadoCivil}
                                onChange={this.handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="casado">Casado</option>
                                <option value="solteiro">Solteiro</option>
                                <option value="divorciado">Divorciado</option>
                                <option value="separado">Separado</option>
                                <option value="amigado">Amigado</option>
                            </select>
                        </div>
                        <div className="col">
                            <label className="form-label">Possui Filhos?</label>
                            <select
                                className="form-select"
                                name="possuiFilhos"
                                value={this.state.possuiFilhos}
                                onChange={this.handleChange}
                            >
                                <option value="">Selecione</option>
                                <option value="sim">Sim</option>
                                <option value="nao">Não</option>
                            </select>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary w-100 mt-2"><h2><b>CANDIDATA-SE</b></h2></button>
                </form>
            </div>
        );
    }
}

export default JobApplicationForm;
