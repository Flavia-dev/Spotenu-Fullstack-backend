import {Request, Response} from "express";
import selectUserById from "../data/selectUserById";


export default async function getUserById(req:Request, res:Response){
    try {
        //consultar banco de ddos
        const user = await selectUserById(req.params.id)

        if(!user){
            res.status(404).send({
                message: "Usuário não encontrado!"
            })

        }

        res.status(200).send({
            message: "Sucesso!",
            id: user.id,
            nickname: user.nickname

        })
        console.log(user.id)

        //responder/encerrar a requisição
        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
        
    }
}