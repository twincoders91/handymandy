-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: handymandy
-- Generation Time: 2022-11-18 17:02:20.3440
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS jobs_id_seq;

-- Table Definition
CREATE TABLE "public"."jobs" (
    "id" int4 NOT NULL DEFAULT nextval('jobs_id_seq'::regclass),
    "user_id" int4 NOT NULL,
    "services_id" int4 NOT NULL,
    "created_at" timestamp NOT NULL DEFAULT now(),
    "status_id" varchar(20) NOT NULL DEFAULT 'NULL'::character varying,
    "last_modified" timestamp DEFAULT now(),
    "job_requirement" varchar(200),
    "user_ack" varchar(20) DEFAULT 'before'::character varying,
    "hm_ack" varchar(20) DEFAULT 'before'::character varying,
    CONSTRAINT "jobs_services_id_fkey" FOREIGN KEY ("services_id") REFERENCES "public"."hm_services"("id"),
    CONSTRAINT "jobs_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user_profile"("id"),
    CONSTRAINT "jobs_status_id_fkey" FOREIGN KEY ("status_id") REFERENCES "public"."status"("job_status"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."jobs" ("id", "user_id", "services_id", "created_at", "status_id", "last_modified", "job_requirement", "user_ack", "hm_ack") VALUES
(98, 66, 100, '2022-11-17 10:15:09.194386', 'completed', '2022-11-17 10:15:09.194386', 'Hi Desmond, my toilet is clogged and I need a sink replacement ASAP. ', 'before', 'after'),
(99, 66, 99, '2022-11-17 10:15:54.082178', 'completed', '2022-11-17 10:15:54.082178', 'Hi Sheldon, my shower head is broken, can you get me a replacement.', 'before', 'before'),
(100, 67, 100, '2022-11-17 10:23:42.427172', 'completed', '2022-11-17 10:23:42.427172', 'Hola~ ', 'before', 'after'),
(101, 67, 96, '2022-11-17 10:26:40.154891', 'completed', '2022-11-17 10:26:40.154891', 'Hi Howard, I love your movies. Can you fix my toilet please?', 'before', 'after'),
(102, 68, 96, '2022-11-17 10:32:57.881773', 'completed', '2022-11-17 10:32:57.881773', 'Mr. Wolowitz please help me fix my toilet within 24hours.', 'before', 'after'),
(103, 68, 98, '2022-11-17 10:33:57.583583', 'completed', '2022-11-17 10:33:57.583583', 'Hi Cristiano. You are the only Ronaldo. Ronaldo is 7 for life, CR7.', 'before', 'after'),
(104, 69, 99, '2022-11-17 10:47:30.936066', 'completed', '2022-11-17 10:47:30.936066', 'Hi. ', 'before', 'before'),
(105, 69, 100, '2022-11-17 10:47:41.853883', 'completed', '2022-11-17 10:47:41.853883', 'Hi.', 'before', 'after'),
(106, 70, 100, '2022-11-17 11:36:20.798366', 'completed', '2022-11-17 11:36:20.798366', 'hi', 'before', 'after'),
(107, 70, 101, '2022-11-17 11:36:30.770072', 'completed', '2022-11-17 11:36:30.770072', 'hi', 'before', 'before'),
(108, 70, 96, '2022-11-17 11:36:48.67262', 'completed', '2022-11-17 11:36:48.67262', 'hi', 'before', 'before'),
(109, 71, 100, '2022-11-17 11:43:50.18644', 'completed', '2022-11-17 11:43:50.18644', 'I am an expat living in Singapore and my toilet reeks of poop, I think there is some clogging that needs fixing!', 'before', 'after'),
(110, 72, 108, '2022-11-17 15:07:31.977103', 'completed', '2022-11-17 15:07:31.977103', 'hi', 'before', 'after'),
(111, 72, 98, '2022-11-17 15:08:02.355684', 'completed', '2022-11-17 15:08:02.355684', 'hi', 'before', 'before'),
(112, 73, 100, '2022-11-17 15:27:25.544739', 'cancelled', '2022-11-17 15:27:25.544739', 'hi', 'after', 'after'),
(113, 73, 98, '2022-11-17 15:27:36.407331', 'completed', '2022-11-17 15:27:36.407331', 'hi', 'before', 'before'),
(114, 73, 99, '2022-11-17 15:27:48.953097', 'completed', '2022-11-17 15:27:48.953097', 'hi', 'before', 'before'),
(115, 73, 100, '2022-11-17 15:31:32.645657', 'pending', '2022-11-17 15:31:32.645657', 'Hi Desmond, Ironman here. JARVIS decided to destroy all my suits. I need your help to fix my pipes so I can use the toilet before I make new suits.', 'before', 'after'),
(116, 74, 111, '2022-11-17 20:37:34.072204', 'pending', '2022-11-17 20:37:34.072204', 'My lights blew and I need help changing them', 'before', 'before'),
(117, 74, 100, '2022-11-17 20:40:59.537898', 'completed', '2022-11-17 20:40:59.537898', 'My lights blew and I need help to change them!', 'before', 'after'),
(118, 69, 96, '2022-11-17 20:58:28.517991', 'completed', '2022-11-17 20:58:28.517991', 'hi', 'before', 'before'),
(119, 69, 98, '2022-11-17 20:58:40.40562', 'completed', '2022-11-17 20:58:40.40562', 'hi', 'before', 'before'),
(120, 71, 100, '2022-11-17 21:02:40.739648', 'completed', '2022-11-17 21:02:40.739648', 'I am an expat living in Singapore, and my toilet reeks of poop. I think there is some clogging that need''s fixing!', 'before', 'before'),
(121, 75, 112, '2022-11-18 12:22:08.905231', 'inprogress', '2022-11-18 12:22:08.905231', 'Can you help me toughen my pipes and harden them please?', 'after', 'before');
