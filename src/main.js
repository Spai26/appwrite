import appwrite from "./config/write";


export default async ({ req, res }) => {


  if (req.path === "/signup" && req.method === 'POST') {
    try {
      const user = await appwrite
      .user.createUser(users, req.body);
      return res.json(user);
    } catch (error) {
      return res.json({ error: error.message }, 500);
    }
  }
};