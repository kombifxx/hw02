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
        createdAt: p.createdAt,
    }));
  },

  async create(newPost: any) {
    const result = await postsCollection.insertOne(newPost);
    return {
      id: result.insertedId.toString(),
      title: newPost.title,
      shortDescription: newPost.shortDescription,
      content: newPost.content,
      blogId: newPost.blogId,
      blogName: newPost.blogName,
      createdAt: newPost.createdAt,
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
      createdAt: post.createdAt,
    };
  },

  async deleteById(id: string) {
    if (!ObjectId.isValid(id)) return false;

    const result = await postsCollection.deleteOne({
      _id: new ObjectId(id),
    });

    return result.deletedCount === 1;
  },
    async update(id: string, data: any) {
        if (!ObjectId.isValid(id)) return false;

        const result = await postsCollection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    title: data.title,
                    shortDescription: data.shortDescription,
                    content: data.content,
                    blogId: data.blogId,
                },
            }
        );

        return result.matchedCount === 1;
    },
};
