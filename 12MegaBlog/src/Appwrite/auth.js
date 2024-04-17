import conf from '../Conf/Conf'
import { Client, Account, ID } from "appwrite";


export class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId)
        this.account = new Account(this.client);
    }

    async createAccount({email, password, name}){
        try {
            const userAccount = await this.account.create(ID.unique() ,email, password, name); // we can give as many parameters as we need!
            if(userAccount){
                // return another function
                return this.login({email, password});
            } else {
                return userAccount;
            }
            
        } catch (error) {
            throw error;
        }
    }

    async login({email, password}){
        try {
           return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }

    async getCurrentUser(){
        try {
            return this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error: " ,error);
        }
        return null;
    }

    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
           console.log("Appwrite service :: logout :: error: " ,error);
        }
    }
}

const authService = new AuthService();

export default authService; 
