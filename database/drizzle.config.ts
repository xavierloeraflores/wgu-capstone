import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schemas/*",
  out: "./drizzle",
  driver: "pg", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    connectionString: process.env.DB_CONNECTION ?? "",
  },
} satisfies Config;
