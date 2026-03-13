# produtos-api-henriquepinheiro

API REST de Produtos com Node.js + Express

**Aluno:** Henrique Pinheiro  
**Matrícula:** SEU_NUMERO_DE_MATRICULA  
**Disciplina:** Projeto de Desenvolvimento Backend — IBMEC

---

## Como executar

### Pré-requisitos
- Node.js 18+

### Instalação
```bash
npm install
```

### Iniciar em desenvolvimento
```bash
npm run dev
```

### Iniciar em produção
```bash
npm start
```

A API ficará disponível em `http://localhost:3000`

---

## Endpoints

| Verbo  | Path                    | Descrição                        | Status esperado         |
|--------|-------------------------|----------------------------------|-------------------------|
| GET    | /api/v1/produtos        | Lista todos os produtos          | 200 OK                  |
| GET    | /api/v1/produtos/:id    | Retorna um produto pelo ID       | 200 OK / 404 Not Found  |
| POST   | /api/v1/produtos        | Cria um novo produto             | 201 Created / 400 Bad Request |
| PUT    | /api/v1/produtos/:id    | Atualiza completamente um produto| 200 OK / 404 Not Found  |
| DELETE | /api/v1/produtos/:id    | Remove um produto                | 204 No Content / 404 Not Found |