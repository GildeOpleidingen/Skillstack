import "dotenv/config"
import { connectDatabase, db } from "../db";

const users = [
  { email: "alice@prisma.io", github_username: "alice", full_name: "Alice", github_id: 123 },
  { email: "bob@prisma.io", github_username: "bob", full_name: "Bob", github_id: 1234  },
  { email: "carol@prisma.io", github_username: "carol", full_name: "Carol", github_id: 12345 },
];

let pendingSeed: Promise<void> | undefined;

async function runSeed(): Promise<void> {
  await connectDatabase();

  for (const user of users) {
    await db.User.upsert({
      create: user,
      update: {},
      where: { email: user.email },
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

