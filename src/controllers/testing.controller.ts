import { Request, Response } from "express";
import { blogsCollection, postsCollection } from "../db/db";

export const testingController = {
    async deleteAll(_: Request, res: Response) {
        await blogsCollection.deleteMany({});
        await postsCollection.deleteMany({});

        return res.sendStatus(204);
    },
};
