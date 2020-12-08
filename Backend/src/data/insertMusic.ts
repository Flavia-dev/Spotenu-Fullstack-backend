import { connection } from "..";

export default async function inserMusic(
    id:string,
    file:string,
    genreId:string,
    albumId:string,
    author:string,
    date:Date,
    title:string
){
  
    await connection.insert({
        id,
        file,
        genreId,
        albumId,
        author,
        date,
        title
    }).into('Spotenu_Music')    
}