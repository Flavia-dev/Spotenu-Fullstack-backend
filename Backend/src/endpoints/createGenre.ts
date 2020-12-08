import {Request, Response} from "express";
import insertGenre from "../data/insertGenre";


export default async function createGenre(
    req:Request,
    res:Response)
{
    try {
        //validar entradas da requisição
        if ( 
            !req.body.genre
            ){

            res
            .status(400)
            .send('Preencha o campo "genre"')

            }

        //consultar banco de ddos
        const id: string = Date.now() + Math.random().toString()

        await insertGenre(
            id,
            req.body.genre,
        )

        //validar as saidas do banco

        //responder/encerrar a requisição
        res
        .status(200)
        .send('Gênero criado com sucesso!')
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
        
    }
}