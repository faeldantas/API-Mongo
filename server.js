const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');
const connectToMongo = require('./config/db');

dotenv.config();
const app = express();

app.use(express.json());
connectToMongo();

app.use("/", userRoutes)

app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
});

// /meu-projeto-api
// │
// ├── /config               # Configurações globais do projeto (ex. configuração de banco, variáveis de ambiente)
// ├── /controllers          # Funções que controlam as operações de cada rota (CRUD)
// ├── /models               # Definição dos esquemas (modelos) do banco de dados
// ├── /routes               # Definição das rotas e mapeamento dos métodos HTTP para os controllers
// ├── /middlewares          # Middlewares (ex. autenticação, validação de dados)
// ├── /utils                # Funções utilitárias que podem ser usadas em vários lugares
// ├── /views                # (Opcional) Para renderizar HTML, se sua API retornar views (não comum para uma API RESTful)
// ├── server.js             # Arquivo principal que inicializa o servidor e conecta as rotas
// ├── .env                  # Arquivo de configuração para variáveis de ambiente (não versionado)
// └── package.json          # Arquivo de dependências e scripts do projeto
