import { db } from "./db";
import { seed } from "./seed";

export { db };

export async function listUsers(limit = 10) {
  await seed();
  const users = await db.orm.public.User.select("github_id", "email", "name", "createdAt").limit(limit).all();

  return users.map((user) => ({
    github_id: String(user.github_id),
    email: user.email,
    name: user.name ?? null,
    createdAt: user.createdAt,
  }));
}

export type StarterUser = Awaited<ReturnType<typeof listUsers>>[number];
