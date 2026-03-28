import { db, Post } from "../db/db";
export const postsRepo = {
  findAll() {
    return db.posts;
  },
  create(newPost: Post) {
    db.posts.push(newPost);
    return newPost;
  },
  findById(id: string) {
    return db.posts.find((b) => b.id === id);
  },
  deleteById(id: string) {
    const index = db.posts.findIndex((b) => b.id === id);

    if (index === -1) {
      return false;
    }

    db.posts.splice(index, 1);
    return true;
  },
};
