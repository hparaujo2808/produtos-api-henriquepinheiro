let produtos = []
let nextId = 1

function listar(req, res) {
  res.status(200).json(produtos)
}

function buscar(req, res) {
  // TODO
}

function criar(req, res) {
  // TODO
}

function atualizar(req, res) {
  // TODO
}

function remover(req, res) {
  // TODO
}

module.exports = {
  listar,
  buscar,
  criar,
  atualizar,
  remover
}