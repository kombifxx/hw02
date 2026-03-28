import { db, Blog } from "../db/db";
export const blogsRepo = {
  findAll() {
    return db.blogs;
  },
  create(newBlog: Blog) {
    db.blogs.push(newBlog);
    return newBlog;
  },
  findById(id: string) {
    return db.blogs.find((b) => b.id === id);
  },
  deleteById(id: string) {
    const index = db.blogs.findIndex((b) => b.id === id);

    if (index === -1) {
      return false;
    }

    db.blogs.splice(index, 1);
    return true;
  },
};
