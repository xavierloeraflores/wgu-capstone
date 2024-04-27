import {
  pgTable,
  serial,
  text,
  boolean,
  timestamp,
  json,
} from "drizzle-orm/pg-core";
export const posts = pgTable("posts", {
  id: serial("id").primaryKey().notNull(),
  text: text("text"),
  isNSFW: boolean("is_nsfw").notNull().default(false),
  createdAt: timestamp("created_at").defaultNow(),
  tags: json("tags").$type<string[]>().notNull().default([]),
});
