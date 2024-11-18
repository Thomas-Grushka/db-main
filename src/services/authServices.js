import {randomBytes} from "crypto";
import createHttpError from "http-errors";

import Session from "../db/models/Session.js";

import { accessTokenLifetime, refreshTokenLifetime } from "../constants/auth.js";

const {ADMIN_1_LOGIN, ADMIN_1_PASSWORD, ADMIN_2_LOGIN, ADMIN_2_PASSWORD, ADMIN_3_LOGIN, ADMIN_3_PASSWORD, ADMIN_4_LOGIN, ADMIN_4_PASSWORD} = process.env;

const createSession = ()=> {
    const accessToken = randomBytes(30).toString("base64");
    const refreshToken = randomBytes(30).toString("base64");

    return {
        accessToken,
        refreshToken,
        accessTokenValidUntil: Date.now() + accessTokenLifetime,
        refreshTokenValidUntil: Date.now() + refreshTokenLifetime,
    }
}

const admins = {
    [ADMIN_1_LOGIN]: ADMIN_1_PASSWORD,
    [ADMIN_2_LOGIN]: ADMIN_2_PASSWORD,
    [ADMIN_3_LOGIN]: ADMIN_3_PASSWORD,
    [ADMIN_4_LOGIN]: ADMIN_4_PASSWORD,
}

export const login = async ({login, password})=> {
    if(admins[login] && password === admins[login]) {
        await Session.destroy({
            where: {
                login,
            }
        });

        const newSession = createSession();

        return Session.create({
            role: "admin",
            login,
           ...newSession,
        })
    }

    throw createHttpError(401, "Invalid login or password");
}

export const refreshSession = async refreshToken => {
    const session = await Session.findOne({
        where: {
            refreshToken,
        }
    });
    if(!session) {
        throw createHttpError(401, "Session not found")
    }

    const newSession = createSession();

    return session.update(newSession, {
        returning: true,
    });
}

export const logout = refreshToken => Session.destroy({
    where: {
        refreshToken,
    }
});