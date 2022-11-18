-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: handymandy
-- Generation Time: 2022-11-18 17:02:56.2940
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS hm_profile_id_seq;

-- Table Definition
CREATE TABLE "public"."hm_profile" (
    "id" int4 NOT NULL DEFAULT nextval('hm_profile_id_seq'::regclass),
    "username" varchar(20) NOT NULL DEFAULT 'unique'::character varying,
    "first_name" text NOT NULL,
    "last_name" text NOT NULL,
    "email" varchar(50) NOT NULL,
    "business_name" varchar(50) NOT NULL,
    "number_of_years" varchar(20) NOT NULL,
    "profile_image" varchar(100),
    "specialities" _text,
    "about" varchar(500),
    "date_joined" timestamp DEFAULT now(),
    CONSTRAINT "hm_profile_username_fkey" FOREIGN KEY ("username") REFERENCES "public"."users_auth"("username"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."hm_profile" ("id", "username", "first_name", "last_name", "email", "business_name", "number_of_years", "profile_image", "specialities", "about", "date_joined") VALUES
(168, 'howard', 'howard', 'wolowitz', 'howardwolowitz@caltech.com', 'wolowitz robotics pte. ltd.', '>10 years', NULL, '{lighting,plumbing,aircon,painting,heater,cabinet}', 'my mother calls me every day at work to see if i had a healthy bowel movement. you should too! that only happens with a functioning toilet!', '2022-11-17 09:25:21.754781'),
(169, 'leonard', 'leonard', 'hofstadter', 'leonardhofstadter@caltech.com', 'leonard leakey hofstadter pte. ltd.', '6-8 years', NULL, '{lighting,plumbing,painting,heater}', 'i am great at all things physics, oh wait except the practical side of things. jk, i am super hands-on and i like to get my hands dirty (;', '2022-11-17 09:32:56.967889'),
(170, 'cristianocr7', 'cristiano', 'ronaldo', 'cristianoronaldo@cr7.com', 'cristiano siuuu corp.', '>10 years', NULL, '{lighting}', 'with over 80 years of design and manufacturing expertise behind the brand, cr7 is not only legendary by name, it''s impeccably made, quality clothing. our collections embody the elements cristiano ronaldo believes are essential to a balanced life. structure and playfulness are complimented by style and enduring performance.', '2022-11-17 09:39:21.683483'),
(171, 'sheldon', 'sheldon', 'cooper', 'sheldoncooper@caltech.com', 'shelly mee maw inc.', '0-2 years', NULL, '{painting,plumbing,heater}', 'i know all about plumbing, painting and heaters! i memorised everything from wikipedia.', '2022-11-17 09:49:06.362309'),
(172, 'sexydesmond', 'desmond', 'lim', 'desmondlim@ga.com', 'double d home depot co.', '6-8 years', NULL, '{lighting,plumbing,aircon,painting,heater,cabinet}', 'i will fix your pipes and ensure they are hard and tough. after which i will lubricate them to ensure prolonged unclogging!', '2022-11-17 09:54:02.908585'),
(173, 'xi', 'xi', 'jinping', 'xijp@cn.com', '镇上最好的照明服务', '8-10 years', NULL, '{lighting,aircon,heater}', '在一天之内修好您的照明设备和加热器。完全无忧', '2022-11-17 10:56:50.617896'),
(174, 'taeyang', 'young bae', 'dong', 'taeyang@bigbang.com', '빅뱅 배관 서비스', '4-6 years', NULL, '{lighting,plumbing,painting,cabinet}', '나는 빅뱅의 원년 멤버이고 고치는 능력이 뛰어나다.', '2022-11-17 11:26:50.562373'),
(175, 'tangyi', 'tang', 'yi', 'tangyi@gmail.com', '超级模特杂工服务', '4-6 years', NULL, '{lighting,painting}', '我的生意围绕超级模特、跑车和大房子展开。我喜欢花很多钱修理东西', '2022-11-17 11:33:12.735003'),
(176, 'jimmy91', 'jim', 'halpert', 'jimhalpert@gmail.com', 'dunder mifflin paper co.', '6-8 years', NULL, '{lighting,plumbing,aircon,painting,heater,cabinet}', 'james "jim" duncan halpert is a fictional character in the u.s. version of the television sitcom the office, portrayed by john krasinski.', '2022-11-17 15:16:58.068788'),
(177, 'cameron', 'cameron', 'tucker', 'camerontucker@gmail.com', 'pritchett tucker pte. ltd', '8-10 years', NULL, '{painting,cabinet,lighting,heater}', 'three modern-day families from california try to deal with their kids, quirky spouses and jobs in their own unique ways, often falling into hilarious situations.', '2022-11-17 20:15:55.632791'),
(178, 'handymantest1', 'test1', 'test2', 'just1@jb.com', 'text1 lol co.', '4-6 years', NULL, '{painting,cabinet}', '24/7 business. specialising in lighting and plumbing since 2010, excellent customer satisfaction.', '2022-11-18 09:12:48.014876'),
(179, 'justin', 'justin', 'bieber', 'justinbieber@gmail.com', 'justin bieber services co.', '2-4 years', NULL, '{lighting,plumbing,aircon,painting,cabinet}', 'over at just bieb services co. we provide the best 24/7 services you can imagine. with more than 5 years in the industry, we ensure 100% customer satisfaction, otherwise money back guaranteed!', '2022-11-18 12:14:35.679491');
