const express = require('express');
const app = express();
const port = 3000;


app.set('view engine', 'ejs');


app.use(express.urlencoded({ extended: true }));

let numeroSecreto = Math.floor(Math.random() * 100) + 1;
console.log(`(Cheat: O número secreto é ${numeroSecreto})`);


app.get('/', (req, res) => {
   
    res.render('index', { 
        mensagem: null, 
        palpiteUsuario: null,
        classeCss: null
    });
});


app.post('/', (req, res) => {
  
    const palpite = parseInt(req.body.palpite);
    let mensagem = "";
    let classeCss = "";

    if (isNaN(palpite)) {
        mensagem = "Por favor, digite um número válido.";
        classeCss = "erro";
    } else if (palpite < numeroSecreto) {
        mensagem = "Muito baixo! Tente um número maior.";
        classeCss = "aviso";
    } else if (palpite > numeroSecreto) {
        mensagem = "Muito alto! Tente um número menor.";
        classeCss = "aviso";
    } else {
        mensagem = `Parabéns! Você acertou o número ${numeroSecreto}! Um novo número foi gerado.`;
        classeCss = "sucesso";
        
        numeroSecreto = Math.floor(Math.random() * 100) + 1;
        console.log(`(Novo número secreto: ${numeroSecreto})`);
    }

    res.render('index', { 
        mensagem: mensagem, 
        palpiteUsuario: palpite,
        classeCss: classeCss
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
