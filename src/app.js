const express = require("express")

const app = express()

app.use(express.json())

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
})

const produtosRouter = require("./routes/produtos")

app.use("/api/v1/produtos", produtosRouter)

app.use((err, req, res, next) => {
  console.error(err)
  res.status(500).json({ erro: "Erro interno do servidor" })
})

app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000")
})