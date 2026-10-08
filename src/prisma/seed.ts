import "dotenv/config"
import { connectDatabase, db } from "./db";

const users = [
  { email: "alice@prisma.io", username: "alice", name: "Alice" },
  { email: "bob@prisma.io", username: "bob", name: "Bob" },
  { email: "carol@prisma.io", username: "carol", name: "Carol" },
];

let pendingSeed: Promise<void> | undefined;

async function runSeed(): Promise<void> {
  await connectDatabase();

  for (const user of users) {
    await db.orm.public.User.upsert({
      create: user,
      update: {},
      conflictOn: { email: user.email },
    });
  }
}

export function seed(): Promise<void> {
  pendingSeed ??= runSeed().catch((error: unknown) => {
    pendingSeed = undefined;
    throw error;
  });
  return pendingSeed;
}

// TODO not sure if we need todo this overhere
// npm run seed
// uses this!!
//

const url = process.env.DATABASE_URL;
if (!url) throw new Error("DATABASE_URL is missing");

async function main() {

        // wait for a DB conneciton
        await db.connect({ url });

        // For every user in users create statement
        for (const user of users) {
                await db.orm.public.User.create({
                       email: user.email,
                       username: user.username,
                       name: user.name,
                });
        }
}

// Start the seed main function
main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });

