import { compare } from "bcryptjs";
import {Request, Response} from "express";
import selectUserByEmail, { User } from "../data/selectUserByEmail";
import { generateToken } from "../services/authenticator";



export default async function login(
    req:Request, 
    res:Response
    ):Promise<void>{
        try {
        //consultar banco de ddos
        const {email,password} = req.body
        let message ="Usuário logado!"
           
            if(!email || !password){
                res.statusCode = 406
                message = "'email' e 'senha' são obrigatórios!"
                throw new Error(message)
            }

            const user: User = await selectUserByEmail(email)

            if(!user){
                res.statusCode = 404
                message = "Usuário não encontrado ou senha incorreta!"
                throw new Error(message)
            }

            const passwordIsCorrect: boolean = await compare(password, user.password)

            if(!passwordIsCorrect){
                res.statusCode = 401
                message = "Usuário não encontrado ou senha incorreta!"
                throw new Error(message)
            }

            const token: string = generateToken({
                id: user.id
            })

            res.send({
                message,
                token
            })
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
        
    }
}