import { connection } from "..";

export default async function insertAlbum(
    id:string,
    name:string,
    
){
  
    await connection.insert({
        id,
        name,
    }).into('Spotenu_Album')    
}