import "dotenv/config";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../src/generated/prisma/client.js";

const connectionString = process.env.DB_CONNECTION_STRING;
if (!connectionString) {
  throw new Error("Missing DB_CONNECTION_STRING");
}

const adapter = new PrismaPg({ connectionString }); // connects to self hosted postgres database
const prisma = new PrismaClient({ adapter });

export { prisma };