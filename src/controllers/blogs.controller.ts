import { Request, Response } from "express";
import { blogsRepo } from "../repositories/blogs.repo";

export const blogsController = {
  async getAll(_: Request, res: Response) {
    const blogs = await blogsRepo.findAll();
    res.status(200).send(blogs);
  },
  async create(req: Request, res: Response) {
    const data = req.body;

    const newBlog = {
      name: data.name,
      description: data.description,
      websiteUrl: data.websiteUrl,
      isMembership: false,
        createdAt: new Date().toISOString(),
    };
    const createdBlog = await blogsRepo.create(newBlog);
    res.status(201).send(createdBlog);
  },
  async update(req: Request, res: Response) {
    const id = req.params.id as string;
    const data = req.body;

      const isUpdated = await blogsRepo.update(id, data);

      if (!isUpdated) {
          return res.sendStatus(404);
      }

      return res.sendStatus(204);
  },

  async getById(req: Request, res: Response) {
    const id = req.params.id as string;
    const blog = await blogsRepo.findById(id);
    if (!blog) {
      return res.sendStatus(404);
    }
    return res.status(200).send(blog);
  },
  async deleteById(req: Request, res: Response) {
    const id = req.params.id as string;
    const isDeleted = await blogsRepo.deleteById(id);
    if (!isDeleted) {
      return res.sendStatus(404);
    }
    return res.sendStatus(204);
  },
};
