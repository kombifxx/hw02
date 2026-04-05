import { MongoClient } from "mongodb";

export type Blog = {
  _id: string;
  name: string;
  description: string;
  websiteUrl: string;
  isMembership: boolean;
};

export type Post = {
  id: string;
  title: string;
  shortDescription: string;
  content: string;
  blogId: string;
  blogName: string;
  createdAt: string;
};

const uri = process.env.MONGO_URI as string;

if (!uri) {
  throw new Error("MONGO_URI is not defined in .env");
}

console.log(uri);
const client = new MongoClient(uri);
const db = client.db("blog-platform");

export const blogsCollection = db.collection("blogs");
export const postsCollection = db.collection("posts");
export const runDb = async () => {
  try {
    await client.connect();
    console.log("Connected");
  } catch (e) {
    console.error("DB connection error:", e);
    await client.close();
    throw e;
  }
};
