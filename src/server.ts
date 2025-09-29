import fastify from 'fastify'
import { db } from './database.js'
import crypto from 'crypto'

const app = fastify()

app.get('/hello', async () => {
  const transaction = await db('transactions')
    .insert({
      id: crypto.randomUUID(),
      title: 'transaçao de teste',
      amount: 150,
    })
    .returning('*')

  return transaction
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('Rodando o servidor na porta 3333.')
  })
