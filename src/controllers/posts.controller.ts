import { Request, Response } from "express";
import { postsRepo } from "../repositories/posts.repo";
import { blogsRepo } from "../repositories/blogs.repo";

export const postsController = {
  async getAll(_: Request, res: Response) {
    const posts = await postsRepo.findAll();
    res.status(200).send(posts);
  },
  async create(req: Request, res: Response) {
    const data = req.body;
    const blog = await blogsRepo.findById(data.blogId);

    if (!blog) {
      return res.status(400);
    }

    const newPost = {
      title: data.title,
      shortDescription: data.shortDescription,
      content: data.content,
      blogId: data.blogId,
      blogName: blog.name,
      createdAt: new Date().toISOString()
    };
    const createdPost = await postsRepo.create(newPost);
    res.status(201).send(createdPost);
  },
  async update(req: Request, res: Response) {
    const id = req.params.id as string;
    const data = req.body;
      const isUpdated = await postsRepo.update(id, data);
    if (!isUpdated) {
      return res.sendStatus(404);
    }

    return res.sendStatus(204);
  },

  async getById(req: Request, res: Response) {
    const id = req.params.id as string;
    const post = await postsRepo.findById(id);
    if (!post) {
      return res.sendStatus(404);
    }
    return res.status(200).send(post);
  },
  async deleteById(req: Request, res: Response) {
    const id = req.params.id as string;
    const isDeleted = await postsRepo.deleteById(id);
    if (!isDeleted) {
      return res.sendStatus(404);
    }
    return res.sendStatus(204);
  },
};
