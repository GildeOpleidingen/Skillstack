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

// Start the seed when called with npm run seed
seed().then(
        () => process.exit(0),
                (error) => {
                        console.error(error);
                        process.exit(1);
        },
);

