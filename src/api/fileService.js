import { storage, ID } from "./appWrite";
import config from "../config/config";

class FileService {
  async fileUpload(file) {
    try {
      return await storage.createFile(
        config.AppWriteBucketID,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Failed to uplaod file", error);
      return false;
    }
  }
  async deleteFile(fileID) {
    try {
      await storage.deleteFile(config.AppWriteBucketID, ID.unique(), fileID);
      return true;
    } catch (error) {
      console.log("Failed to delete file", error);
      return false;
    }
  }
  getFilePreview(fileID) {
    try {
      return storage.getFilePreview(config.AppWriteBucketID, fileID);
    } catch (error) {
      console.log("Failed to get file preview", error);
      return false;
    }
  }
}

const fileService = new FileService();

export default fileService;
