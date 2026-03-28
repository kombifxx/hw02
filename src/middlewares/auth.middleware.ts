import {Request, Response, NextFunction } from 'express'

export const USERNAME = process.env.USERNAME || "admin";
export const PASSWORD = process.env.PASSWORD || "qwerty"

export const guardMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const auth = req.headers['authorization'] as string;
    if (!auth) {
        return res.sendStatus(401)
    }
    const [authType, token] = auth.split(' ');
    if (authType !== 'Basic') {
        return res.sendStatus(401)
    }
    const credentials = Buffer.from(token, 'base64').toString('utf-8')
    const [username, password] = credentials.split(':')
if (username !== USERNAME || password !== PASSWORD) {
    return res.sendStatus(401)
}
  next()
}