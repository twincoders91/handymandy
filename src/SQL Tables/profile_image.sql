-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: handymandy
-- Generation Time: 2022-11-18 17:02:08.0700
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS profile_image_id_seq;

-- Table Definition
CREATE TABLE "public"."profile_image" (
    "id" int4 NOT NULL DEFAULT nextval('profile_image_id_seq'::regclass),
    "image_url" text,
    "hm_id" int4,
    "user_id" int4,
    CONSTRAINT "profile_image_hm_id_fkey" FOREIGN KEY ("hm_id") REFERENCES "public"."hm_profile"("id"),
    CONSTRAINT "profile_image_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "public"."user_profile"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."profile_image" ("id", "image_url", "hm_id", "user_id") VALUES
(68, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/3765.722373418079', 168, NULL),
(69, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/5966.7249785238255', 169, NULL),
(70, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/2068.2631656478966', 170, NULL),
(71, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/4469.33243886956', 171, NULL),
(72, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/628.3569213296025', 172, NULL),
(73, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/31.76914679639431', NULL, 67),
(74, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/6803.340639851776', NULL, 66),
(75, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/8479.772172562716', NULL, 68),
(76, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/7053.096013556177', NULL, 69),
(77, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/3556.2362827513903', 173, NULL),
(78, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/7275.76522386916', 174, NULL),
(79, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/6715.818723584428', 175, NULL),
(80, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/2086.2804384346446', NULL, 70),
(81, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/9151.39668408622', NULL, 71),
(82, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/4008.6062807963117', NULL, 72),
(83, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/4514.55326644155', 176, NULL),
(84, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/5025.322820309301', NULL, 73),
(85, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/8235.225301071321', 177, NULL),
(86, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/9762.1110661868', NULL, 74),
(87, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/5898.993449266832', 179, NULL),
(88, 'https://handymandy.s3.ap-southeast-1.amazonaws.com/1279.786761663606', NULL, 75);
