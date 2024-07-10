import { sign, verify } from "jsonwebtoken";

import { JwtPayload } from "jsonwebtoken";

const JWT_SECRET = process.env.ENV;

const generateToken = (id: string): string => {
    const jwt = sign({id}, JWT_SECRET, {
      expiresIn: "2h"  
    })
    return jwt;
}

const verifyToken = (jwt: string): string | JwtPayload => {
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
}

export { generateToken, verifyToken }

