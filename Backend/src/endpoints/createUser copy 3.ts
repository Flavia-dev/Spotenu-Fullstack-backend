import {Request, Response} from "express";


export default async function createUser(req:Request, res:Response){
    try {
        //validar entradas da requisição

        //consultar banco de ddos

        //validar as saidas do banco

        //responder/encerrar a requisição
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
        
    }
}