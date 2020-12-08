import { connection } from "..";

export default async function insertGenre(
    id:string,
    genre:string,
){
    await connection.insert({
        id,
        genre,
       
    }).into('Spotenu_Genre')    
}