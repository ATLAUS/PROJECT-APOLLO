import { prisma } from "./prisma.js"

async function testConnection() {
    try {
        await prisma.$connect();
        console.log("Database connection established succesfully")
    } catch (error) {
        console.error("Unable to connect to the database: ", error)
    } finally {
        await prisma.$disconnect();
    }
}


testConnection();