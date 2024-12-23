import { createUser } from "./modules/auth/controller";
export default async ({ req, res }) => {


  if (req.path === "/signup" && req.method === 'POST') {
    try {
      const user = await createUser(users, req.body);
      return res.json(user);
    } catch (error) {
      return res.json({ error: error.message }, 500);
    }
  }
};