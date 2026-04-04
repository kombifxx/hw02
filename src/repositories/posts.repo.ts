import { postsCollection } from "../db/db";
import { ObjectId } from "mongodb";

export const postsRepo = {
    async findAll() {
        const posts = await postsCollection.find().toArray();

        return posts.map((p: any) => ({
            id: p._id.toString(),
            title: p.title,
            shortDescription: p.shortDescription,
            content: p.content,
            blogId: p.blogId,
            blogName: p.blogName,
        }));
    },

    async create(newPost: any) {
        const result = await postsCollection.insertOne(newPost);

        return {
            id: result.insertedId.toString(),
            ...newPost,
        };
    },

    async findById(id: string) {
        if (!ObjectId.isValid(id)) return null;

        const post = await postsCollection.findOne({
            _id: new ObjectId(id),
        });

        if (!post) return null;

        return {
            id: post._id.toString(),
            title: post.title,
            shortDescription: post.shortDescription,
            content: post.content,
            blogId: post.blogId,
            blogName: post.blogName,
        };
    },

    async deleteById(id: string) {
        if (!ObjectId.isValid(id)) return false;

        const result = await postsCollection.deleteOne({
            _id: new ObjectId(id),
        });

        return result.deletedCount === 1;
    },
};