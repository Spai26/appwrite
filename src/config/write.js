import { Client, Account, Databases, Users } from 'node-appwrite'
import { WRITE } from './env.js'

class AppWriteCliente {
  static instance = null;

  static getInstance() {
    if (!this.instance) {
      const client = new Client()

      client
        .setSelfSigned()
        .setProject(WRITE.project)
        .setKey(WRITE.key)
        .setEndpoint(WRITE.endpoint)

      this.instance = {
        account: new Account(client),
        databases: new Databases(client),
        users: new Users(client),
      }
    }

    return this.instance
  }
}

export default AppWriteCliente.getInstance()
