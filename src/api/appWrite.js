import { Client, Account, Databases, Storage, ID } from "appwrite";
import config from "../config/config";

const client = new Client()
  .setEndpoint(config.AppWriteURL) // Your API Endpoint
  .setProject(config.AppWriteProjectID); // Your project ID

const account = new Account(client);
const db = new Databases(client);
const storage = new Storage(client);

export { account, db, storage, ID };
