import { Query } from "appwrite";
import config from "../config/config";
import { db } from "./appWrite";

export class Blog {
  db;

  async addBlog({ title, description, image, userID, status, slug }) {
    try {
      return await db.createDocument(
        config.AppWriteDBID,
        config.AppWriteCollectionID,
        slug,
        { title, description, image, userID, status }
      );
    } catch (error) {
      console.log("Failed to create new blog", error);
      throw new Error("Failed to create new blog");
      return false;
    }
  }
  async updateBlog(slug, { title, description, image, userID, status }) {
    try {
      return await db.updateDocument(
        config.AppWriteDBID,
        config.AppWriteCollectionID,
        slug,
        { title, description, image, userID, status }
      );
    } catch (error) {
      console.log("Failed to update blog", error);
      throw new Error("Failed to update blog");
      return false;
    }
  }
  async getBlog(slug) {
    try {
      return await db.getDocument(
        config.AppWriteDBID,
        config.AppWriteCollectionID,
        slug
      );
    } catch (error) {
      console.log("Failed to get blog", error);
      throw new Error("Failed to get blog");
    }
  }
  async deleteBlog({ slug }) {
    try {
      await db.deleteDocument(
        config.AppWriteDBID,
        config.AppWriteCollectionID,
        slug
      );
      return true;
    } catch (error) {
      console.log("Failed to delete blog", error);
      throw new Error("Failed to delete blog");
      return false;
    }
  }
  async getBlogs(queries = [Query.equal("status", "active")]) {
    try {
      return await db.listDocuments(
        config.AppWriteDBID,
        config.AppWriteCollectionID,
        queries
      );
    } catch (error) {
      console.log("Failed to get all blogs", error);
      throw new Error("Failed to get all blogs");
      return false;
    }
  }
}

const blog = new Blog();

export default blog;
