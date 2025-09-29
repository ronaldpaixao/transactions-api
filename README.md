# Transactions API

API REST em Node.js com suporte a migrations, query builder Knex.js e banco SQLite para controle de transações.

## Status do projeto
Atualmente em desenvolvimento (Capítulo 2 - Configuração do banco de dados e migrations).  
Próximos passos:  
- [ ] Implementar rotas  
- [ ] Criar testes automatizados  
- [ ] Preparar aplicação para deploy  

## Tecnologias
- Node.js
- TypeScript
- Knex.js
- SQLite

## Como executar
```bash
# Clonar repositório
git clone https://github.com/ronaldpaixao/transactions-api

# Instalar dependências
npm install

# Executar migrations
npm run knex -- migrate:latest

# Rodar servidor
npm run dev
