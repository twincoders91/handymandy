-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: handymandy
-- Generation Time: 2022-11-18 17:01:28.4850
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS ratings_and_reviews_id_seq;

-- Table Definition
CREATE TABLE "public"."ratings_and_reviews" (
    "id" int4 NOT NULL DEFAULT nextval('ratings_and_reviews_id_seq'::regclass),
    "ratings" numeric DEFAULT 0,
    "reviews" varchar(200) DEFAULT 'No Reviews'::character varying,
    "jobs_id" int4,
    CONSTRAINT "ratings_and_reviews_jobs_id_fkey" FOREIGN KEY ("jobs_id") REFERENCES "public"."jobs"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."ratings_and_reviews" ("id", "ratings", "reviews", "jobs_id") VALUES
(70, 4, 'Desmond rocked the bathroom inside out, it''s now in a better condition than my bedroom lol', 98),
(71, 2, 'Desmond has too many apple products, I am jelly!!!', 100),
(72, 5, 'Tried to use his robot to do dirty things!!! Don''t engage him!', 101),
(73, 4, 'Howard brought his mum to my place to do the dirty work. And she took a 2 hours shower in my toilet!', 102),
(74, 1, 'Cris gave me free CR7 underwear and told me to pose for a few shots', 103),
(75, 3, '매우 감사합니다. 당신은 엄청난 혼란을 만들었습니다', 104),
(76, 4, '매우 감사합니다. 당신은 엄청난 혼란을 만들었습니다', 105),
(77, 2, 'Sheldon is too talkative and blabbers way too much on superheroes!!!', 99),
(78, 5, 'Taught me how to bribe prison guards by providing top-notch plumbing services!', 106),
(79, 3, 'Huge language barrier, does not care about my feelings.', 107),
(80, 2, 'His bowl cut hair and tight jeans were of no help especially when he had to kneel down', 108),
(81, 5, 'My cupboard turned to a shoe rack at the end of the day...Don''t know how to feel about that', 110),
(82, 3, 'He is better off as a football player', 111),
(83, 3, 'Sheldon a shy guy, fed him a cup of milk and his behind went off like there''s no tomorrow!

Anyway... a super lovely fella, quick with his hands. My toilet was clogged and he fixed it real quick!', 114),
(84, 5, 'Good luck at the Qatar World Cup! SIUUU!', 113),
(85, 5, 'Very nice work, love the handy work! Definitely worth the money', 117),
(86, 5, 'Love the smile! Amazing guy :)', 109),
(87, 4, 'His belt buckle got me!', 118),
(88, 4, 'CR7 let me play with his Ballon D''ors!', 119),
(89, 5, 'Desmond did a great job', 120);
