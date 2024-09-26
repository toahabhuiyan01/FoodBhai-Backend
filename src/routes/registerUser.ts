import { Boom } from "@hapi/boom";
import { Handler } from "../api/make-api";
import User from "../entity/User";

// the "Handler" type automatically does type checks for the response as well
const handler: Handler<'registerUser'> = async (
    req,
    { db }
) => {
    const repo = db.getRepository(User)

    const existingUser = await repo.findOne({ where: { email: req.email } })
    if (existingUser) {
        new Boom('User already exists', { statusCode: 400 })
    }

    await repo.insert({
        name: req.name,
        email: req.email,
        password: req.password,
        phoneNumber: req.phoneNumber
    })

    return { success: true }
}


export default handler