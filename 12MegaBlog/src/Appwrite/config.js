import conf from '..Conf/conf.js';
import {Client , Databases, Storage, Query} from "appwrite";
import { tree } from 'next/dist/build/templates/app-page';

export class Service {
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({title, slug, content, featuredImage, status, userId}){
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite servise :: createPost :: error:" , error);
        }
    }
    async updatePost(slug, {title, content, featuredImage, status, userId}){
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite servise :: updatePost :: error:" , error);
        }
    }

    async deletePost(slug){
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite servise :: deletePost :: error:" , error);
            return false;
        }
    }

    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite servise :: getPost :: error:" , error);
            return false;
        }
    }

    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId, 
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log("Appwrite servise :: getPosts :: error:" , error);
            return false;
        }
    }

    // Upload Files;
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log("Appwrite servise :: uploadFile :: error:" , error);
            return false;
        }
    }

    // delete files;

    async deleteFile(fileId){
        try {
            return await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log("Appwrite servise :: deleteFile :: error:" , error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service = new Service(); 
export default service;