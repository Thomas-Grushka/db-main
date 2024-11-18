import * as authServices from "../../services/authServices.js";

const setupSession = (res, session)=> {
    const {accessToken, accessTokenValidUntil, refreshToken, refreshTokenValidUntil} = session;

    res.cookie("accessToken", accessToken, {
        httpOnly: true,
        expires: accessTokenValidUntil
    });

    res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        expires: refreshTokenValidUntil
    });
}

export const login = async(req, res)=> {
    const session = await authServices.login(req.body);

    setupSession(res, session);

    res.json({login: session.login})
}

export const getCurrent = async(req, res)=> {

}

// export const refreshSessionController = async(req, res)=> {
//     const session = await authServices.refreshUserSession(req.cookies);

//     setupSession(res, session);

//     res.json({
//         status: 200,
//         message: "Successfully refresh session",
//         data: {
//             accessToken: session.accessToken,
//         }
//     })
// }

export const logout = async(req, res)=> {
    if(req.cookies.refreshToken) {
        await authServices.logout(req.cookies.refreshToken);
    }

    // res.clearCookie("sessionId");
    res.clearCookie("accessToken");
    res.clearCookie("refreshToken");

    res.status(204).send();
}
