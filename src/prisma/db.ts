// src/prisma/db.ts
import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../generated/prisma/client"; // adjust to the actual generated path

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

export const prisma = new PrismaClient({ adapter });
export const db = prisma;
export const connectDatabase = () => prisma.$connect();
