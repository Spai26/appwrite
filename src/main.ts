
/*
import dotenv from 'dotenv';
dotenv.config();

import sdk, { Client, Account, Databases, Users, Permission, Role } from "node-appwrite";
import { WRITE } from "./config/env";

const client =new Client();


const account = new Account(client);
const databases = new Databases(client);
const users = new Users(client);


const dbnames = {
    book: "Book"
    // todos los nombres de tablas
}
client
    .setSelfSigned(true)
    .setProject(WRITE.project)
    .setKey(WRITE.key)
    // .setJWT('jwt') // set this to authenticate using JWT
    .setEndpoint(WRITE.endpoint)
    ;



    const promise = databases.createDocument(
        WRITE.database,
        '6761ec8a0024b0f7cf8d',
        sdk.ID.unique(),
        { "title": "Hamlet" , "description":"test", "isCompleted": false}
    );
    
    promise.then(function (response) {
        console.log(response);
    }, function (error) {
        console.log(error);
    });


    async function collectionExists(databaseId: string, collectionName: string): Promise<boolean> {
    try {
        
        const collections = await databases.listCollections(databaseId);        
       
        return collections.collections.some((collection) => collection.name === collectionName);
    } catch (error) {
        console.error('Error al verificar la existencia de la colección:', error);
        return false;
    }
}

collectionExists(WRITE.database, "test");

async function createCollectionIfNotExists() {
    
    const collectionId = sdk.ID.unique(); 

    // Verificar si la colección existe
    const exists = await collectionExists(WRITE.database, dbnames.book);

    if (!exists) {
        try {
            // Crear la colección si no existe
            const newCollection = await databases.createCollection(
                WRITE.database, dbnames.book,
                dbnames.book,                    
                [
                    Permission.read("any")
                ]
            );
            console.log('Colección creada:', newCollection);
        } catch (error) {
            console.error('Error al crear la colección:', error);
        }
    } else {
        console.log('La colección ya existe');
    }
}


createCollectionIfNotExists();
 */
import { Client, Users } from 'node-appwrite';
import { WRITE } from './config/env.js';

// This Appwrite function will be executed every time your function is triggered
export default async ({ req, res, log, error }: any) => {
  // You can use the Appwrite SDK to interact with other services
  // For this example, we're using the Users service
  const client = new Client()
    .setEndpoint(WRITE.endpoint ?? '')
    .setProject(WRITE.project ?? '')
    .setKey(req.headers['x-appwrite-key'] ?? '');
  const users = new Users(client);

  try {
    const response = await users.list();
    // Log messages and errors to the Appwrite Console
    // These logs won't be seen by your end users
    log(`Total users: ${response.total}`);
  } catch(err: any) {
    error("Could not list users: " + err.message);
  }

  // The req object contains the request data
  if (req.path === "/ping") {
    // Use res object to respond with text(), json(), or binary()
    // Don't forget to return a response!
    return res.text("Pong");
  }

  return res.json({
    motto: "Build like a team of hundreds_",
    learn: "https://appwrite.io/docs",
    connect: "https://appwrite.io/discord",
    getInspired: "https://builtwith.appwrite.io",
  });
};