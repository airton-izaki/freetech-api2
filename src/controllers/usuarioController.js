const Usuario = require('../models/usuarioModel');

// Criar usuários
async function criar(req, res) {
  try {       
    const { nome, email, senha, perfil } = req.body;
        
    // Lógica para criar o usuário (ex: hash da senha, salvar no DB)
    const novoUsuario = new Usuario({ nome, email, senha, perfil });
    await novoUsuario.save(); 

    res.status(201).json({ message: "Usuário criado com sucesso", usuario: novoUsuario });
  } catch (err) {
    res.status(400).json({ erro: 'Erro ao criar usuário', detalhes: err.message });
  };
};

// Listar todos os usuários
async function listar(req, res) {
  try {
    const usuarios = await Usuario.find().select('-senha'); // não retorna a senha
    res.json(usuarios);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao listar usuários', detalhes: err.message });
  }
}

// Buscar usuário por ID
async function buscar(req, res) {
  try {
    const usuario = await Usuario.findById(req.params.id).select('-senha');
    if (!usuario) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json(usuario);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao buscar usuário', detalhes: err.message });
  }
}

// Atualizar usuário
async function atualizar(req, res) {
  try {
    const { nome, email, perfil } = req.body;
    const usuarioAtualizado = await Usuario.findByIdAndUpdate(
      req.params.id,
      { nome, email, perfil },
      { new: true }
    ).select('-senha');
    if (!usuarioAtualizado) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json(usuarioAtualizado);
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao atualizar usuário', detalhes: err.message });
  }
}

// Remover usuário
async function remover(req, res) {
  try {
    const usuarioRemovido = await Usuario.findByIdAndDelete(req.params.id);
    if (!usuarioRemovido) return res.status(404).json({ erro: 'Usuário não encontrado' });
    res.json({ mensagem: 'Usuário removido com sucesso' });
  } catch (err) {
    res.status(500).json({ erro: 'Erro ao remover usuário', detalhes: err.message });
  }
}

module.exports = { criar, listar, buscar, atualizar, remover };
