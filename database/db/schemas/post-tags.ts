import { pgTable, serial } from "drizzle-orm/pg-core";
import { tags } from "./tags";
import { posts } from "./post";

export const postTags = pgTable("post_tags", {
  postId: serial("post_id")
    .references(() => posts.id, { onDelete: "cascade" })
    .notNull(),
  tagId: serial("tag_id")
    .references(() => tags.id, { onDelete: "cascade" })
    .notNull(),
});
