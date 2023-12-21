/* eslint-disable no-useless-catch */
import config from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
  constructor() {
    this.client = new Client()
      .setEndpoint(config.appwriteUrl)
      .setProject(config.projectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        return this.login(email, password);
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({ email, password }) {
    try {
      return await this.account.createEmailSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log("appwrite service::getUser error  "+error);
    }
    return null;
  }
  async logout(){
    try{
        return this.account.deleteSessions();
    }catch(error){
        console.log(error);
        throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
