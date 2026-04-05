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
        isMembership: b.isMembership,
        createdAt: b.createdAt,
    }));
  },

  async create(newBlog: any) {
    const result = await blogsCollection.insertOne(newBlog);

      return {
          id: result.insertedId.toString(),
          name: newBlog.name,
          description: newBlog.description,
          websiteUrl: newBlog.websiteUrl,
          isMembership: newBlog.isMembership,
          createdAt: newBlog.createdAt,
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
          isMembership: blog.isMembership,
          createdAt: blog.createdAt,
      };
  },

  async deleteById(id: string) {
    if (!ObjectId.isValid(id)) return false;

    const result = await blogsCollection.deleteOne({
      _id: new ObjectId(id),
    });

    return result.deletedCount === 1;
  },
    async update(id: string, data: any) {
        if (!ObjectId.isValid(id)) return false;

        const result = await blogsCollection.updateOne(
            { _id: new ObjectId(id) },
            {
                $set: {
                    name: data.name,
                    description: data.description,
                    websiteUrl: data.websiteUrl,
                },
            }
        );

        return result.matchedCount === 1;
    }
};
