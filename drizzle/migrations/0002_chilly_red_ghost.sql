ALTER TABLE "user_topic_progress" DROP CONSTRAINT "id";--> statement-breakpoint
ALTER TABLE "user_topic_progress" ADD CONSTRAINT "user_topic_progress_pk" PRIMARY KEY("user_id","topic_id");