import { AppwriteClient } from '../config/appwriteClient.js';
import { ID } from 'appwrite';

export class UserModel {
 constructor() {
   this.users = AppwriteClient.getInstance().users;
 }

 async create(userData) {
   return await this.users.create(
     ID.unique(),
     userData.email,
     '+123456789',
     userData.password, 
     userData.name
   );
 }
}