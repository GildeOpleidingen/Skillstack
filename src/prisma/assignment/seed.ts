import "dotenv/config"
import { connectDatabase, db } from "../db";

const assignments = [
  {
    id: 1,
    title: "Hello World",
    description: "Tell the world you are about to code",
  },
];

let pendingSeed: Promise<void> | undefined;

async function runSeed(): Promise<void> {
        await connectDatabase();

        for (const assignment of assignments) {
          await db.assessment.upsert({
            where: { id: assignment.id },
            create: assignment,
            update: {},
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

