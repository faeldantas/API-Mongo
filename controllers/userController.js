const User = require('../model/User');

// **CREATE** - Método para criar um novo usuário
const createUser = async(req, res) =>{
    try {
        const { nome, email } = req.body; // Extrai nome e email do corpo da requisição
        const novoUsuario = new User({ nome, email }); // Cria uma nova instância de User com os dados recebidos
        await novoUsuario.save(); // Salva o usuário no banco de dados
        res.status(201).send('Usuário criado com sucesso!');
    } catch (err) {
        console.error('Erro ao criar usuário:', err);
        res.status(500).send('Erro ao criar usuário');
    }
};
// **READ** - Método para obter todos os usuários
const verUsuarios = async (req, res) => {
    try {
        const usuarios = await User.find(); // Encontra todos os usuários
        res.status(200).json(usuarios); // Retorna os usuários em formato JSON
    } catch (err) {
        console.error('Erro ao buscar usuários:', err);
        res.status(500).send('Erro ao buscar usuários');
    }
}

// **READ** - Método para obter um único usuário por ID
const verUsuarioID = async (req, res) => {
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
};

// **UPDATE** - Método para atualizar um usuário por ID
const atualizarUsuarioID = async (req, res) => {
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
};

// **DELETE** - Método para excluir um usuário por ID
const deletarUsuarioID = async (req, res) => {
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
};


module.exports = { createUser, verUsuarios, verUsuarioID, atualizarUsuarioID, deletarUsuarioID };