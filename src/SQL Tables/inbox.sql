-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: handymandy
-- Generation Time: 2022-11-18 17:02:32.8270
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS inbox_id_seq;

-- Table Definition
CREATE TABLE "public"."inbox" (
    "id" int4 NOT NULL DEFAULT nextval('inbox_id_seq'::regclass),
    "jobs_id" int4 NOT NULL,
    "user_id" int4 NOT NULL,
    "hm_id" int4 NOT NULL,
    "character" varchar(10) NOT NULL,
    "timestamp" timestamp DEFAULT now(),
    "message" varchar(500),
    "inboximage_url" text,
    CONSTRAINT "inbox_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user_profile"("id"),
    CONSTRAINT "inbox_hm_id_fkey" FOREIGN KEY ("hm_id") REFERENCES "public"."hm_profile"("id"),
    CONSTRAINT "inbox_jobs_id_fkey" FOREIGN KEY ("jobs_id") REFERENCES "public"."jobs"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."inbox" ("id", "jobs_id", "user_id", "hm_id", "character", "timestamp", "message", "inboximage_url") VALUES
(35, 98, 66, 172, 'handyman', '2022-11-17 10:17:09.931421', 'Hi how can I help you?', NULL),
(36, 109, 71, 172, 'handyman', '2022-11-17 11:44:53.367346', 'Hi Penny, how can I help you!', NULL),
(37, 109, 71, 172, 'user', '2022-11-17 11:45:20.719384', 'I am an expat living in Singapore and my toilet reeks of poop, I think there is some clogging that needs fixing!', NULL),
(38, 109, 71, 172, 'user', '2022-11-17 11:49:18.920806', NULL, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/2022.7245533011762'),
(39, 109, 71, 172, 'handyman', '2022-11-17 11:50:32.774586', 'Sure, this is a very common problem in Singapore!', NULL),
(40, 109, 71, 172, 'handyman', '2022-11-17 11:51:24.276694', 'I can make it after lunch, currently at my class project 4 presentation!', NULL),
(41, 109, 71, 172, 'handyman', '2022-11-17 14:49:45.74189', NULL, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/8826.902522059292'),
(42, 109, 71, 172, 'user', '2022-11-17 14:51:34.391118', 'Wow! How about a cup of coffee first? :)', NULL),
(43, 109, 71, 172, 'user', '2022-11-17 14:51:38.553465', NULL, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/3133.994946352312'),
(44, 109, 71, 172, 'handyman', '2022-11-17 14:53:07.321726', 'Mind you...this is not a dating app.', NULL),
(45, 109, 71, 172, 'handyman', '2022-11-17 14:53:52.044604', 'See you at Starbucks, 79 Anson rd, 6pm', NULL),
(46, 117, 74, 172, 'handyman', '2022-11-17 20:46:13.01988', 'hi phil! How can I help you?', NULL),
(47, 117, 74, 172, 'user', '2022-11-17 20:47:33.026343', 'Hi Desmond, my toilet is clogged and I need some help!', NULL),
(48, 117, 74, 172, 'user', '2022-11-17 20:47:45.672068', NULL, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/9650.487199733989'),
(49, 120, 71, 172, 'handyman', '2022-11-17 21:03:20.451177', 'Hi Penny, how can I help you?', NULL),
(50, 120, 71, 172, 'user', '2022-11-17 21:03:53.706285', 'I am an expat living in Singapore, and my toilet reeks of poop. I think there is some clogging that need''s fixing!', NULL),
(51, 120, 71, 172, 'user', '2022-11-17 21:04:14.106127', NULL, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/9930.294718094548'),
(54, 120, 71, 172, 'handyman', '2022-11-17 21:06:53.415455', 'Sure this looks like a very common problem in Singapore', NULL),
(55, 120, 71, 172, 'handyman', '2022-11-17 21:07:40.436836', 'Currently at my class project 4 presentation now. I can make it after 6pm', NULL),
(56, 120, 71, 172, 'handyman', '2022-11-17 21:08:13.773983', NULL, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/6520.174381351853'),
(57, 120, 71, 172, 'user', '2022-11-17 21:09:22.514715', 'Wow! How about a cup of coffee first? :)', NULL),
(58, 120, 71, 172, 'user', '2022-11-17 21:09:28.554188', NULL, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/4252.237323797396'),
(59, 120, 71, 172, 'handyman', '2022-11-17 21:10:30.418953', 'Mind you...this is not a dating app.', NULL),
(60, 120, 71, 172, 'handyman', '2022-11-17 21:10:59.601636', 'See you at Starbucks. 79 Anson rd, 6pm, my treat', NULL),
(61, 121, 75, 179, 'handyman', '2022-11-18 12:24:01.013859', 'Hi Invisible', NULL),
(62, 121, 75, 179, 'handyman', '2022-11-18 12:24:06.043832', 'How can I help you', NULL),
(63, 121, 75, 179, 'user', '2022-11-18 12:24:43.575444', 'Hi JB huge fan', NULL),
(64, 121, 75, 179, 'user', '2022-11-18 12:24:50.024941', NULL, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/3307.4405135356487');
