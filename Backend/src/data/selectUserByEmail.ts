import { connection } from "..";

export type User = {
    id: string,
    name: string,
    nickname: string,
    email: string,
    password: string
}

export default async function selectUserByEmail(
    email:string
):Promise<User>{
    try {
        const result = await connection('Spotenu_User')
        .select('*')
        .where({ email })

        return {
            id: result[0].id,
            name: result[0].name,
            nickname: result[0].nickname,
            email: result[0].email,
            password: result[0].password
        }
        
    }catch (error) {
        throw new Error(error.sqlMessage || error.message);
        
    }
//esse query devolve um resultado

    


}
