import { pgTable, serial, pgEnum } from "drizzle-orm/pg-core";

export const tagEnum = pgEnum("tag", ["training", "user", "v1", "v2"]);
export const tags = pgTable("tags", {
  id: serial("id").primaryKey().notNull(),
  tag: tagEnum("tag").notNull(),
});
