import { UserModel } from '../models/User.js';

export const createUser = async (client, userData) => {
  const userModel = new UserModel(client);
  return await userModel.create(userData);
};