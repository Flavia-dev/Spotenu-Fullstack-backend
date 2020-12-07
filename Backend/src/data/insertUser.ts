import { connection } from "..";

export default async function insertUser(
    id:string,
    name:string,
    nickname:string,
    email:string,
    password:string
){
  
    await connection.insert({
        id,
        name,
        nickname,
        email,
        password
    }).into('Spotenu_User')    
}