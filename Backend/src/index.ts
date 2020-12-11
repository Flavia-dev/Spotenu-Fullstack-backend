import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import createUser from './endpoints/createUser'
import getUserById from './endpoints/getUserById'
import createGenre from './endpoints/createGenre'
import createAlbum from './endpoints/createAlbum'
import login from './endpoints/login'


dotenv.config()

export const connection = knex({
    client:'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: 3306
    }
})

const app = express()
app.use(express.json())

app.post('/SignUp',createUser)
app.post('/login',login)
app.post('/createGenre',createGenre)
app.post('/createAlbum',createAlbum)


app.get('/user/:id',getUserById)

app.listen(3003, ()=>{
    console.log('Servidor rodando na porta 3003!')
})