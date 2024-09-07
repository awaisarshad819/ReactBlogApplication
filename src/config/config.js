
const config = {
    AppWriteURL : String(import.meta.env.VITE_APPWRITE_URL),
    AppWriteDBID : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    AppWriteCollectionID : String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    AppWriteBucketID : String(import.meta.env.VITE_APPWRITE_BUCKET_ID),
    AppWriteProjectID : String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
}


export default config;