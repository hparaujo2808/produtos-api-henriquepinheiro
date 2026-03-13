let produtos = []
let nextId = 1

function listar(req, res) {
  res.status(200).json(produtos)
}

function buscar(req, res) {
  const id = parseInt(req.params.id)
  const produto = produtos.find(p => p.id === id)

  if (!produto) {
    return res.status(404).json({ erro: "Produto não encontrado" })
  }

  return res.status(200).json(produto)
}

function criar(req, res) {
  const { nome, descricao, preco, categoria, estoque } = req.body

  if (!nome || nome.length < 3) {
    return res.status(400).json({ erro: "O campo 'nome' é obrigatório" })
  }
  if (!descricao || descricao.length < 10) {
    return res.status(400).json({ erro: "O campo 'descricao' é obrigatório" })
  }
  if (preco === undefined || preco === null) {
    return res.status(400).json({ erro: "O campo 'preco' é obrigatório" })
  }
  if (preco <= 0) {
    return res.status(400).json({ erro: "O campo 'preco' deve ser maior que zero" })
  }
  if (!categoria || !["equipamento", "servico", "acessorio"].includes(categoria)) {
    return res.status(400).json({ erro: "O campo 'categoria' é obrigatório" })
  }
  if (estoque === undefined || estoque === null) {
    return res.status(400).json({ erro: "O campo 'estoque' é obrigatório" })
  }
  if (estoque < 0) {
    return res.status(400).json({ erro: "O campo 'estoque' deve ser maior ou igual a zero" })
  }

  const agora = new Date().toISOString()
  const novoProduto = {
    id: nextId++,
    nome,
    descricao,
    preco,
    categoria,
    estoque,
    ativo: true,
    criado_em: agora,
    atualizado_em: agora
  }

  produtos.push(novoProduto)
  return res.status(201).json(novoProduto)
}

function atualizar(req, res) {
  const id = parseInt(req.params.id)
  const index = produtos.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({ erro: "Produto não encontrado" })
  }

  const { nome, descricao, preco, categoria, estoque, ativo } = req.body

  if (!nome || nome.length < 3) {
    return res.status(400).json({ erro: "O campo 'nome' é obrigatório" })
  }
  if (!descricao || descricao.length < 10) {
    return res.status(400).json({ erro: "O campo 'descricao' é obrigatório" })
  }
  if (preco === undefined || preco === null) {
    return res.status(400).json({ erro: "O campo 'preco' é obrigatório" })
  }
  if (preco <= 0) {
    return res.status(400).json({ erro: "O campo 'preco' deve ser maior que zero" })
  }
  if (!categoria || !["equipamento", "servico", "acessorio"].includes(categoria)) {
    return res.status(400).json({ erro: "O campo 'categoria' é obrigatório" })
  }
  if (estoque === undefined || estoque === null) {
    return res.status(400).json({ erro: "O campo 'estoque' é obrigatório" })
  }
  if (estoque < 0) {
    return res.status(400).json({ erro: "O campo 'estoque' deve ser maior ou igual a zero" })
  }

  produtos[index] = {
    id: produtos[index].id,
    nome,
    descricao,
    preco,
    categoria,
    estoque,
    ativo: ativo !== undefined ? ativo : produtos[index].ativo,
    criado_em: produtos[index].criado_em,
    atualizado_em: new Date().toISOString()
  }

  return res.status(200).json(produtos[index])
}
function remover(req, res) {
  const id = parseInt(req.params.id)
  const index = produtos.findIndex(p => p.id === id)

  if (index === -1) {
    return res.status(404).json({ erro: "Produto não encontrado" })
  }

  produtos.splice(index, 1)
  return res.status(204).send()
}

module.exports = {
  listar,
  buscar,
  criar,
  atualizar,
  remover
}