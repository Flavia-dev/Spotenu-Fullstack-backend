import { connection } from "..";

export default async function selectUserById(
    id:string
){
//esse query devolve um resultado
const result = await connection('Spotenu_User')
    .select('*')
    .where({ id })
    
return result[0]

}
