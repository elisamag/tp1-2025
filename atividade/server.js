const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// rota para exibir o formulário
app.get('/', (req, res) => {
    res.render('form'); 
});

// rota que recebe os dados do formulário
app.post('/operacao', (req, res) => {
    const nome = req.body.nome;
    const sobrenome = req.body.sobrenome;
    const cidade = req.body.cidade;

    const mensagem = `${nome} ${sobrenome} de ${cidade}`;

    res.render('saudacao', { mensagem });
});

// iniciar servidor
app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
