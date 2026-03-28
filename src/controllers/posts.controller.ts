import { Request, Response } from "express";
import { postsRepo } from "../repositories/posts.repo"
import {blogsRepo} from "../repositories/blogs.repo";


export const postsController = {
    getAll(_: Request, res: Response) {
        const posts = postsRepo.findAll()
        res.status(200).send(posts)
    },
    create(req: Request, res: Response) {
        const data = req.body;
        const blog = blogsRepo.findById(data.blogId)

        if (!blog) {
            return res.status(400)
        }

        const newPost = {
            id: Date.now().toString(), // пока так, потом исправлю
            title: data.title,
            shortDescription: data.shortDescription,
            content: data.content,
            blogId: data.blogId,
            blogName: blog.name,
        }
        const createdPost = postsRepo.create(newPost);
        res.status(201).send(createdPost);
    },
    update(req: Request, res: Response) {

        const id = req.params.id as string
        const data = req.body

        const post = postsRepo.findById(id)

        if (!post) {
            return res.sendStatus(404)
        }

        post.title = data.title
        post.shortDescription = data.shortDescription
        post.content = data.content
        post.blogId = data.blogId

        return res.sendStatus(204)
    },

    getById(req: Request, res: Response) {
        const id = req.params.id as string
        const post = postsRepo.findById(id)
        if (!post) {
            return res.sendStatus(404)
        }
        return res.status(200).send(post)

    },
    deleteById(req: Request, res: Response) {
        const id = req.params.id as string
        const isDeleted = postsRepo.deleteById(id)
        if (!isDeleted) {
            return res.sendStatus(404)
        }
        return res.sendStatus(204)
    }

}