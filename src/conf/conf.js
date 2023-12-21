const conf={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    dbId:String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
    collectionId:String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
    bucketId:String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

// register on appwrite server to get above details

export default conf;