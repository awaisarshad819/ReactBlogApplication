import { account } from "./appWrite";
import { ID } from "appwrite";

export class AuthService {
  account;

  async createAccount({ name, email, password }) {
    try {
      const user = await account.create(ID.unique(), email, password, name);
      return user;
    } catch (error) {
      console.log("Failed to create user", error);
      throw new Error("Failed to create user!");
    }
  }
  async login({ email, password }) {
    try {
      const session = await account.createEmailPasswordSession(email, password);
      return session;
    } catch (error) {
      console.log("Failed to Create Session", error);
      throw new Error("Failed to Login!");
    }
  }
  async getCurrentUser() {
    try {
      const user = await account.get();
      return user;
    } catch (error) {
      console.log("Failed to get the user", error);
      throw new Error("Failed to get the user");
    }
  }
  async logout() {
    try {
      const result = await account.deleteSessions();
      return result;
    } catch (error) {
      console.log("Failed to logout the user", error);
      throw new Error("Failed to logout the user");
    }
  }
}
const authService = new AuthService();

export default authService;
