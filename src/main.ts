
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
export default async ({ req, res, log, error }) => {
    return res.send("hello word");
}
