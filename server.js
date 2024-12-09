const express = require('express');
const mongoose = require('mongoose');

const app = express();    

app.use(express.json());

mongoose.connect("mongodb+srv://teste123:teste123@cluster0.cqy8e.mongodb.net/treinees", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Conectado ao MongoDB');
}).catch(err => {
    console.error('Erro ao conectar ao MongoDB', err);
});

// Criando um esquema de arquivo para o mongoDB
const userSchema = new mongoose.Schema({
    nome: { type: String, required: true },
    email: { type: String, required: true, unique: true }
});

//Criando modelo de usuário
const User = mongoose.model('User', userSchema, 'users');






// **CREATE** - Rota para criar um novo usuário
app.post('/usuarios', async(req, res) =>{
    try {
        const { nome, email } = req.body; // Extrai nome e email do corpo da requisição
        const novoUsuario = new User({ nome, email }); // Cria uma nova instância de User com os dados recebidos
        await novoUsuario.save(); // Salva o usuário no banco de dados
        res.status(201).send('Usuário criado com sucesso!');
    } catch (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(500).send('Erro ao criar usuário');
    }
});

// **READ** - Rota para obter todos os usuários
app.get('/usuarios', async (req, res) => {
    try {
        const usuarios = await User.find(); // Encontra todos os usuários
        res.status(200).json(usuarios); // Retorna os usuários em formato JSON
    } catch (err) {
        console.error('Erro ao buscar usuários:', err);
        res.status(500).send('Erro ao buscar usuários');
    }
});

// **READ** - Rota para obter um único usuário por ID
app.get('/usuarios/:id', async (req, res) => {
    try {
        const usuario = await User.findById(req.params.id); // Busca o usuário pelo ID
        if (!usuario) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.status(200).json(usuario); // Retorna o usuário encontrado
    } catch (err) {
        console.error('Erro ao buscar usuário:', err);
        res.status(500).send('Erro ao buscar usuário');
    }
});

// **UPDATE** - Rota para atualizar um usuário por ID
app.put('/usuarios/:id', async (req, res) => {
    try {
        const { nome, email } = req.body; // Extrai os novos dados para o usuário
        const usuarioAtualizado = await User.findByIdAndUpdate(req.params.id, { nome, email }, { new: true }); // Atualiza o usuário no banco
        if (!usuarioAtualizado) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.status(200).json(usuarioAtualizado); // Retorna o usuário atualizado
    } catch (err) {
        console.error('Erro ao atualizar usuário:', err);
        res.status(500).send('Erro ao atualizar usuário');
    }
});

// **DELETE** - Rota para excluir um usuário por ID
app.delete('/usuarios/:id', async (req, res) => {
    try {
        const usuarioDeletado = await User.findByIdAndDelete(req.params.id); // Deleta o usuário pelo ID
        if (!usuarioDeletado) {
            return res.status(404).send('Usuário não encontrado');
        }
        res.status(200).send('Usuário deletado com sucesso!');
    } catch (err) {
        console.error('Erro ao deletar usuário:', err);
        res.status(500).send('Erro ao deletar usuário');
    }
});







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
