import { config } from "dotenv";
import path from "path";
import { defineConfig, env } from "prisma/config";

config({ path: path.resolve(__dirname, "../../.env") });

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DB_CONNECTION_STRING"),
  },
});
