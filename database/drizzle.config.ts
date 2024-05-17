import "dotenv/config";
import type { Config } from "drizzle-kit";

export default {
  schema: "./db/schemas/*",
  out: "./drizzle",
  dialect: "postgresql", // 'pg' | 'mysql2' | 'better-sqlite' | 'libsql' | 'turso'
  dbCredentials: {
    url: process.env.DB_CONNECTION ?? "",
  },
} satisfies Config;
