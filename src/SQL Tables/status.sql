-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: handymandy
-- Generation Time: 2022-11-18 17:01:48.6600
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."status" (
    "job_status" varchar(20) NOT NULL
);

INSERT INTO "public"."status" ("job_status") VALUES
('pending'),
('completed'),
('cancelled'),
('delete'),
('inprogress');
