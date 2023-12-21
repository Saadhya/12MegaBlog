import { Databases, Client, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class PostService {
  client = new Client();
  databases;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.databases = new Databases(this.client);
  }
  async createPost({ title, slug, content, featuredImage, status, userId }) {
    try {
      return await this.databases.createDocument(
        conf.dbId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("appwrite create post error:: " + error);
      throw error;
    }
  }
  async updatePost(slug, { title, content, featuredImage, status }) {
    try {
      return await this.databases.updateDocument(
        conf.dbId,
        conf.collectionId,
        slug,
        {
          title,
          content,
          featuredImage,
          status,
        }
      );
    } catch (error) {
      console.log("appwrite update post error:: " + error);
      throw error;
    }
  }
  async deletePost(slug) {
    try {
      await this.databases.updateDocument(conf.dbId, conf.collectionId, slug);
      return true;
    } catch (error) {
      console.log("delete post error:: " + error);
      return false;
    }
  }
  async getPost(slug) {
    try {
      await this.databases.getDocument(conf.dbId, conf.collectionId, slug);
      return true;
    } catch (error) {
      console.log("get single post error:: " + error);
      return false;
    }
  }
  async getPostList(queries = [Query.equal("status", "active")]) {
    try {
      await this.databases.listDocuments(
        conf.dbId,
        conf.collectionId,
        queries,
        100
      );
      return true;
    } catch (error) {
      console.log("get single post error:: " + error);
      return false;
    }
  }
}

const service = new PostService();
export default service;
