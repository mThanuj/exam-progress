import { pgTable, text, uuid, primaryKey, boolean } from "drizzle-orm/pg-core";

export const subjects = pgTable("subjects", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull().unique(),
  code: text("code").notNull().unique(),
});

export const units = pgTable("units", {
  id: uuid("id").primaryKey().defaultRandom(),
  subjectId: uuid("subject_id")
    .notNull()
    .references(() => subjects.id),
  title: text("title").notNull(),
});

export const topics = pgTable("topics", {
  id: uuid("id").primaryKey().defaultRandom(),
  unitId: uuid("unit_id")
    .notNull()
    .references(() => units.id),
  name: text("name").notNull(),
});

export const users = pgTable("users", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text("name").notNull(),
  email: text("email").notNull().unique(),
});

export const userTopicProgress = pgTable(
  "user_topic_progress",
  {
    userId: uuid("user_id")
      .notNull()
      .references(() => users.id),
    topicId: uuid("topic_id")
      .notNull()
      .references(() => topics.id),
    completed: boolean("completed").notNull().default(false),
  },
  (table) => [
    primaryKey({
      name: "user_topic_progress_pk",
      columns: [table.userId, table.topicId],
    }),
  ],
);
