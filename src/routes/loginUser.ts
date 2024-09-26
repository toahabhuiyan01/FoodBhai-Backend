import { Boom } from "@hapi/boom";
import { Handler } from "../api/make-api";
import RefreshToken from "../entity/RefreshToken";
import { LoginResponse } from "../types/openapi-client";
import User from "../entity/User";
import { compare } from "bcryptjs";
import { generateAccessToken } from "../api/token-utils";

const TOKEN_EXPIRY = 14 * 60 * 60 * 24 * 1000

const handler: Handler<'loginUser'> = async(
    req,
    { db }
) => {
    let user: User
    const refreshTokenRepo = db.getRepository(RefreshToken)
    const userRepo = db.getRepository(User)

    const usingRefreshToken = 'refreshToken' in req
    if (usingRefreshToken) {
        const userDB = await userRepo.createQueryBuilder('user')
            .leftJoinAndSelect('user.refreshTokens', 'refreshTokens')
            .where('refreshTokens."token" = :token', { token: req.refreshToken })
            .andWhere('refreshTokens."expiresAt" >= :now', { now: new Date() })
            .getOne()

        if (!userDB) {
            throw new Boom('Invalid refresh token', { statusCode: 401 })
        }

        user = userDB
    } else {
        const userDB = await userRepo.findOneOrFail({ where: { phoneNumber: req.phoneNumber } })

        const validPassword = await compare(req.password, userDB.password)
        if (!validPassword) {
            throw new Boom('Invalid password', { statusCode: 401 })
        }

        user = userDB
    }

    const response: LoginResponse = {
        accessToken: generateAccessToken({
            user: {
                id: user.id,
                phoneNumber: user.phoneNumber
            }
        }),
    }

    if (usingRefreshToken) {
        const [token] = user.refreshTokens

        token.expiresAt = new Date(Date.now() + TOKEN_EXPIRY)
        await refreshTokenRepo.save(token)
    } else {
        const token = refreshTokenRepo.create({
            user,
            expiresAt: new Date(Date.now() + TOKEN_EXPIRY)
        })
        
        await refreshTokenRepo.save(token)

        response.refreshToken = token.token
    }


    return response
}

export default handler