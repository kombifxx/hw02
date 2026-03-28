import { Request, Response } from "express";
import { db } from "../db/db"
export const testingController = {
    deleteAll(_: Request, res: Response) {
        db.posts.length = 0;
        db.blogs.length = 0;
        return res.sendStatus(204)

    }
}