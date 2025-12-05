<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <title>Adivinhe o Número</title>
  <style>
    body {
      font-family: sans-serif;
      text-align: center;
      padding: 50px;
      
    }

    .container {
      background: white;
      padding: 30px;
      border-radius: 8px;
      
      display: inline-block;
    }

    input {
      padding: 10px;
      font-size: 16px;
      border-radius: 4px;
      border: 1px solid #ddd;
    }

    button {
      padding: 10px 20px;
      font-size: 16px;
      background-color: #28a745;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    button:hover {
      background-color: #218838;
    }

    .resultado {
      margin-top: 20px;
      padding: 15px;
      border-radius: 4px;
    }

    .aviso {
      background-color: #fff3cd;
      color: #856404;
      border: 1px solid #ffeeba;
    }

    .sucesso {
      background-color: #d4edda;
      color: #155724;
      border: 1px solid #c3e6cb;
    }

    .erro {
      background-color: #f8d7da;
      color: #721c24;
      border: 1px solid #f5c6cb;
    }
  </style>
</head>

<body>

  <div class="container">
    <h1>Adivinhe o Número (1-100)</h1>

    <form action="/" method="POST">
      <input type="number" name="palpite" placeholder="Digite seu palpite..." required autofocus>
      <button type="submit">Adivinhar</button>
    </form>

    <% if (mensagem) { %>
    <div class="resultado" <%= classeCss %>">
      <p><strong>Você digitou:</strong> <%= palpiteUsuario %></p>
      <h3><%= mensagem %></h3>
    </div>
    <% } %>
  </div>

</body>

</html>
