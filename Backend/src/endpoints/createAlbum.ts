import {Request, Response} from "express";
import insertAlbum from "../data/insertAlbum";


export default async function createAlbums(
    req:Request,
    res:Response){

    try {
        //validar entradas da requisição
        if(
            !req.body.name
            ){

            res
            .status(400)
            .send("Preencha o campo 'nome'!")
            }

        //consultar banco de ddos
        const id: string = Date.now() + Math.random().toString()

        await insertAlbum(
            id,
            req.body.name,
        )
        //validar as saidas do banco

        //responder/encerrar a requisição
        res
        .status(200)
        .send('Álbum criado com sucesso!')

        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
        
    }
}