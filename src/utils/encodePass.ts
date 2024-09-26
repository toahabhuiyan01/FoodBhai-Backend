import { genSalt, hash } from 'bcryptjs'

export const encodePass = async (pass: string) => {
    const salt = await genSalt(10)

    const encPass = await hash(pass, salt)

    return encPass
}