import { blogsCollection } from "../db/db";
import { ObjectId } from "mongodb";

export const blogsRepo = {
  async findAll() {
    const blogs = await blogsCollection.find().toArray();

    return blogs.map((b: any) => ({
      id: b._id.toString(),
      name: b.name,
      description: b.description,
      websiteUrl: b.websiteUrl,
    }));
  },

  async create(newBlog: any) {
    const result = await blogsCollection.insertOne(newBlog);

    return {
      id: result.insertedId.toString(),
      ...newBlog,
    };
  },

  async findById(id: string) {
    if (!ObjectId.isValid(id)) return null;

    const blog = await blogsCollection.findOne({
      _id: new ObjectId(id),
    });

    if (!blog) return null;

    return {
      id: blog._id.toString(),
      name: blog.name,
      description: blog.description,
      websiteUrl: blog.websiteUrl,
    };
  },

  async deleteById(id: string) {
    if (!ObjectId.isValid(id)) return false;

    const result = await blogsCollection.deleteOne({
      _id: new ObjectId(id),
    });

    return result.deletedCount === 1;
  },
};
