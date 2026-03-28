import { Request, Response } from "express";
import { blogsRepo } from "../repositories/blogs.repo"


export const blogsController = {
    getAll(_: Request, res: Response) {
        const blogs = blogsRepo.findAll()
        res.status(200).send(blogs)
    },
    create(req: Request, res: Response) {
        const data = req.body;

        const newBlog = {
            id: Date.now().toString(), // пока так, потом исправлю
            name: data.name,
            description: data.description,
            websiteUrl: data.websiteUrl
        }
        const createdBlog = blogsRepo.create(newBlog);
        res.status(201).send(createdBlog);
    },
    update(req: Request, res: Response) {

        const id = req.params.id as string
        const data = req.body

        const blog = blogsRepo.findById(id)

        if (!blog) {
            return res.sendStatus(404)
        }

        blog.name = data.name
        blog.description = data.description
        blog.websiteUrl = data.websiteUrl

        return res.sendStatus(204)
    },

    getById(req: Request, res: Response) {
        const id = req.params.id as string
        const blog = blogsRepo.findById(id)
        if (!blog) {
            return res.sendStatus(404)
        }
        return res.status(200).send(blog)

    },
    deleteById(req: Request, res: Response) {
        const id = req.params.id as string
        const isDeleted = blogsRepo.deleteById(id)
        if (!isDeleted) {
            return res.sendStatus(404)
        }
        return res.sendStatus(204)
    }

}