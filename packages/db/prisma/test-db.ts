import { prisma } from "./prisma.js"

/**
 * Checks to make sure the connection between self hosted Postgres DB and Prisma ORM are connected 
 */
async function testConnection() {
    try {
        await prisma.$connect();
        console.log("Database connection established successfully");
    } catch (error) {
        console.error("Unable to connect to the database: ", error);
        process.exitCode = 1;
    } finally {
        await prisma.$disconnect();
    }
}


testConnection().catch((error) => {
    console.error("unexpectged database test failure:, ", error);
    process.exitCode = 1;
});