import { Databases, Client, ID, Query, Storage } from "appwrite";
import conf from "../conf/conf";

export class FileService {
  client = new Client();
  bucket;
  constructor() {
    this.client.setEndpoint(conf.appwriteUrl).setProject(conf.projectId);
    this.bucket = new Storage(this.client);
  }

  async uploadFile(file) {
    try {
      await this.bucket.createFile(conf.bucketId, ID.unique(), file);
      return true;
    } catch (error) {
      console.log("upload file error:: " + error);
      return false;
    }
  }
  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile(conf.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("delete file error:: " + error);
      return false;
    }
  }
  //   its fast api so no need of asyn
  getFilePreview(fileId) {
    try {
      this.bucket.getFilePreview(conf.bucketId, fileId);
      return true;
    } catch (error) {
      console.log("delete file error:: " + error);
      return false;
    }
  }
}

const service = new FileService();
export default service;
