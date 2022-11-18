-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: handymandy
-- Generation Time: 2022-11-18 17:00:53.9830
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS user_profile_id_seq;

-- Table Definition
CREATE TABLE "public"."user_profile" (
    "id" int4 NOT NULL DEFAULT nextval('user_profile_id_seq'::regclass),
    "username" varchar(20) NOT NULL DEFAULT ''::character varying,
    "first_name" text NOT NULL DEFAULT NULL::character varying,
    "last_name" text NOT NULL DEFAULT NULL::character varying,
    "email" varchar(50) NOT NULL,
    "street_address" varchar(50) NOT NULL,
    "block_number" varchar(10) NOT NULL,
    "postal_code" varchar(10) NOT NULL,
    "profile_image" varchar(100),
    "date_joined" timestamp DEFAULT now(),
    CONSTRAINT "user_profile_username_fkey" FOREIGN KEY ("username") REFERENCES "public"."users_auth"("username"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."user_profile" ("id", "username", "first_name", "last_name", "email", "street_address", "block_number", "postal_code", "profile_image", "date_joined") VALUES
(66, 'handsomedamien', 'damien', 'teo', 'damienteo@gmail.com', '79 anson road', '20', '202020', NULL, '2022-11-17 10:14:27.452463'),
(67, 'michaelscott', 'michael', 'scott', 'michaelscott@dundermifflin.com', 'dunder mifflin', '66', '666666', NULL, '2022-11-17 10:20:21.000862'),
(68, 'dwightschrute', 'dwight', 'schrute', 'dwightschrute@gmail.com', 'schrute farms', '12', '123123', NULL, '2022-11-17 10:31:33.486687'),
(69, 'top', 'seung-hyun', 'choi', 'top@bigbang.com', 'seoul street', '69', '696969', NULL, '2022-11-17 10:46:41.120498'),
(70, 'scofield', 'michael', 'scofield', 'michaelscofiled@gmail.com', 'fox river', '40', '404040', NULL, '2022-11-17 11:35:47.080201'),
(71, 'kanye', 'Penny', 'Cheese', 'kanyewest@gmail.com', 'hollywood chinatown', '123', '123123', '', '2022-11-17 11:42:48.626619'),
(72, 'bayc', 'bored', 'ape', 'bayc@bayc.com', 'ape land', '177', '177177', NULL, '2022-11-17 15:07:16.271716'),
(73, 'robert', 'robert', 'downey jr', 'robertdowneyjr@ironman.com', 'marvel street', '678', '678678', NULL, '2022-11-17 15:26:25.335208'),
(74, 'phil', 'phil', 'dunphy', 'phildunphy@gmail.com', 'dunphy drive', '69', '696969', NULL, '2022-11-17 20:27:55.133946'),
(75, 'invisiblefriend', 'invisible', 'friend', 'if2@gmail.com', '79 anson road', '23', '232323', NULL, '2022-11-18 12:19:19.506436');
