const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 3000;

// Configuração do banco de dados
const connection = mysql.createConnection({
    host: '',
    user: '',
    password: '',
    database: ''
});

connection.connect((err) => {
    if (err) {
        console.error('Erro ao conectar ao banco de dados:', err);
        return;
    }
    console.log('Conexão ao banco de dados estabelecida com sucesso.');
});

app.use(bodyParser.json());

// POST
app.post('/api/insert', (req, res) => {
    const formData = req.body;

    // Lista de campos obrigatórios
    const requiredFields = [
        'funcao_pretendida', 'nome', 'ctps', 'serie', 'dataNascimento', 'cpf', 'rg', 'orgaoEmissor',
        'endereco', 'numero', 'bairro', 'municipio', 'uf', 'cep', 'naturalidade', 'telefone', 'celular',
        'email', 'fundamental', 'medio', 'superior', 'cursoSuperior', 'tituloEleitor', 'zona', 'pis',
        'carteiraHabilitacao', 'nomePai', 'nomeMae', 'estadoCivil', 'nomeConjuge', 'residencia',
        'certidaoMilitar', 'serieCertidao', 'categoriaCertidao', 'possuiFilhos'
    ];

    // Verificar se todos os campos obrigatórios foram fornecidos
    const missingFields = requiredFields.filter(field => !formData.hasOwnProperty(field));
    if (missingFields.length > 0) {
        return res.status(400).json({ error: `Campos obrigatórios faltando: ${missingFields.join(', ')}` });
    }

    // Consulta SQL para inserção
    const query = `
        INSERT INTO ficha_emprego SET ?
    `;

    // Executar a consulta com os dados do formulário
    connection.query(query, formData, (error, results, fields) => {
        if (error) {
            console.error('Erro ao inserir os dados:', error);
            return res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
        }
        console.log('Dados inseridos com sucesso.');
        res.status(201).json({ message: 'Dados inseridos com sucesso.' });
    });
});



// DELETE
app.delete('/api/delete', (req, res) => {
    const { cpf, vaga } = req.body;

    if (!cpf || !vaga) {
        return res.status(400).json({ error: 'É necessário fornecer CPF e vaga para deletar o registro.' });
    }

    const query = `
      DELETE FROM ficha_emprego WHERE cpf = ? AND funcao_pretendida = ?
    `;
    const values = [cpf, vaga];

    connection.query(query, values, (error, results, fields) => {
        if (error) {
            console.error('Erro ao deletar o registro:', error);
            return res.status(500).json({ error: 'Ocorreu um erro ao processar a solicitação.' });
        }
        if (results.affectedRows === 0) {
            return res.status(404).json({ error: 'Registro não encontrado.' });
        }
        console.log('Registro deletado com sucesso.');
        res.status(200).json({ message: 'Registro deletado com sucesso.' });
    });
});



app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
