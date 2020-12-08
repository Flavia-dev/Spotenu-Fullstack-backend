import {Request, Response} from "express";
import insertMusic from "../data/insertMusic";


export default async function createMusic(req:Request, res:Response){
    try {
        //validar entradas da requisição

        if(
           !req.body.title ||
           !req.body.file ||
           !req.body.genresId ||
           !req.body.albumId

        ){ 
            res
            .status(400)
            .send('Preencha os campos "title", "file", "genresId" e "albumId"')
        }

        //consultar banco de dados

        const id: string = Date.now() + Math.random().toString()
        const date:string =Date.now().toString()

        await insertMusic(
            id,
            date,
            req.body.author,
            req.body.title,
            req.body.file,
            req.body.genresId,
            req.body.albumId
            
        )

        //validar as saidas do banco

        //responder/encerrar a requisição
        res
        .status(200)
        .send('Usuário criado com sucesso!')

        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
        
    }
}