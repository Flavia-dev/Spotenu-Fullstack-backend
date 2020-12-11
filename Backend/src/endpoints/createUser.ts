import {Request, Response} from "express";
import insertUser from "../data/insertUser";
import { generateToken } from "../services/authenticator";
import { hash } from "../services/hashManager";
import { generateId } from "../services/idGeneration";


export default async function createUser(req:Request, res:Response){
    try {
        //validar entradas da requisição

        if(
           !req.body.name ||
           !req.body.nickname ||
           !req.body.email ||
           !req.body.password

        ){ 
            res
            .status(400)
            .send('Preencha os campos "name", "nickname", "email" e "password"')
        }

        //consultar banco de dados

        const id: string = generateId()

        const cypherPassword = await hash(req.body.password);

        
        

        await insertUser(
            id,
            req.body.name,
            req.body.nickname,
            req.body.email,
            cypherPassword
        )

        //validar as saidas do banco

        //responder/encerrar a requisição

            
        const token: string = generateToken({id})
        console.log(token)
        res
        .status(201)
        .send({
            message:"Usuário criado com sucesso!",
            token
        })

        
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
        
    }
}