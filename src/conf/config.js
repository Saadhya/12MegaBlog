const config={
    appwriteUrl:String(import.meta.env.VITE_APPWRITE_URL),
    projectId: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
    dbId:String(),
    collectionId:String(),
    bucketId:String()
}

// register on appwrite server to get above details

export default config;