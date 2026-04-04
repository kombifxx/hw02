import { MongoClient } from "mongodb";

export type Blog = {
  _id: string;
  name: string;
  description: string;
  websiteUrl: string;
};

export type Post = {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
  blogName: string;
};

const url = process.env.MONGO_URL as string
console.log(url);
const client = new MongoClient(url)
const db = client.db("blog-platform");

export const blogsCollection = db.collection("blogs");
export const postsCollection = db.collection("posts");
export const runDb = async () => {
    try {
        await client.connect();
        console.log("Connected");
    } catch (e) {
        console.log("Failed");
        await client.close();
    }
}