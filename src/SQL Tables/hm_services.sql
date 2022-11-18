-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: handymandy
-- Generation Time: 2022-11-18 17:02:46.0250
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Sequence and defined type
CREATE SEQUENCE IF NOT EXISTS hm_services_id_seq;

-- Table Definition
CREATE TABLE "public"."hm_services" (
    "id" int4 NOT NULL DEFAULT nextval('hm_services_id_seq'::regclass),
    "hm_id" int4 NOT NULL,
    "description" text NOT NULL,
    "category" varchar(20) NOT NULL,
    "types_of_work" _text NOT NULL,
    "price_from" int4 NOT NULL,
    "title" varchar(150),
    "active" varchar(20) NOT NULL DEFAULT 'live'::character varying,
    "image_url" text DEFAULT 'default_image'::text,
    CONSTRAINT "hm_services_hm_id_fkey" FOREIGN KEY ("hm_id") REFERENCES "public"."hm_profile"("id"),
    PRIMARY KEY ("id")
);

INSERT INTO "public"."hm_services" ("id", "hm_id", "description", "category", "types_of_work", "price_from", "title", "active", "image_url") VALUES
(96, 168, 'I just helped my mum out of the tub, so I''m one slippery horror ahead of you. Make sure that does not happen to you! Engage me as soon as you can!', 'plumbing', '{"Sink Repair","Toilet Unclogging","Deep Cleansing","Shower Repair"}', 199, 'Robotics Plumber Services', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/3686.4242983661757'),
(97, 169, 'I have more than 20 years of experience with toilets, able to instantly pin point the area of damage. Your bowel movements and toilet are in good hands!', 'plumbing', '{"Toilet Bowl Cleaning","Sink Repair","Installation and Inspection"}', 65, 'Fix all your toilet needs', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/2832.3310181754023'),
(98, 170, 'Launched in Europe in 2013 and North America in late 2017, this sustainably focused - fashion forward brand is turning fans of footballer Cristiano Ronaldo.', 'plumbing', '{"Unclogging Pipes","Harden Pipes","Toughen Pipes","Most Goals Scored","Ballon d''Or"}', 999, 'Siuu all pipes for you', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/5562.490383946876'),
(99, 171, 'I know all about plumbing and their usages! I read and memorised every single word from Wikipedia, using my Alienware laptop. BAZINGA!', 'plumbing', '{"Theoretical Plumbing","Eye Power","All Talk No Action"}', 20, 'Theory lesson on plumbing', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/3624.9645089366236'),
(100, 172, 'A toilet is a safe place for many. Man problems: no matter how we shake and dance, the last few drops always ends up on the floor.', 'plumbing', '{"Pipe Repair Works","Removal and Installation","Toilet Unclogging","Hardware Replacement"}', 220, 'General Plumbing Services', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/4196.73886295433'),
(101, 173, '在一天之内修好您的照明设备和加热器。完全没有麻烦。您可以联系我的任何一位关注者', 'lighting', '{加热器固定,空调维修,照明固定}', 5, '镇上最好的照明服务', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/246.54735714192856'),
(102, 173, '在一天之内修好您的照明设备和加热器。完全没有麻烦。您可以联系我的任何一位关注者', 'aircon', '{加热器固定,空调维修,照明固定}', 2, '镇上最好的照明服务', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/1977.3476564196635'),
(103, 173, '在一天之内修好您的照明设备和加热器。完全没有麻烦。您可以联系我的任何一位关注者', 'plumbing', '{加热器固定,空调维修,照明固定}', 6, '镇上最好的照明服务', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/4855.709414096194'),
(104, 174, '나는 빅뱅의 원년 멤버이고 고치는 능력이 뛰어나다.', 'painting', '{"싱크대 수리","히터 수리","페인팅 서비스"}', 450, '빅뱅 배관 서비스', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/9783.140069961313'),
(105, 174, '나는 빅뱅의 원년 멤버이고 고치는 능력이 뛰어나다.', 'plumbing', '{"싱크대 수리","히터 수리","페인팅 서비스"}', 250, '빅뱅 배관 서비스', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/19.56254565198101'),
(106, 175, '我的生意围绕超级模特、跑车和大房子展开。我喜欢花很多钱修理东西', 'plumbing', '{水槽更换,超模训练}', 45, '超级模特杂工服务', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/4169.733234783217'),
(107, 175, '我的生意围绕超级模特、跑车和大房子展开。我喜欢花很多钱修理东西', 'lighting', '{水槽更换}', 30, '超级模特杂工服务', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/7480.017534387848'),
(108, 172, 'From $100/hr. I can fix any furniture problems within a day. Satisfaction guaranteed. Money back if you are satisfied!', 'cabinet', '{"Carpentry Works","Cabinet Works",Shelving,Tiling}', 100, 'Furniture 24/7 Servicing', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/6144.072024701235'),
(109, 176, 'Our electricians have over 35 years of experience in the industry, serving 1000s of residential & commercial estates.', 'lighting', '{"Down Lights","Up Lights",Chandeliers,"Bulb Change"}', 79, 'Halpert Lighting Services', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/8390.094251920504'),
(110, 176, 'Our electricians have over 35 years of experience in the industry, serving 1000s of residential & commercial estates', 'cabinet', '{"Cabinet Services","Shoe Rack","Installation and Repair","Wood work"}', 75, 'Halpert Cabinet Services', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/6307.357569102505'),
(111, 177, 'Modern Family is a comedy series that views three different families through the lens of a documentary filmmaker and his crew.', 'lighting', '{"Sink Repair","Light Bulb Change","Installation of Lights"}', 230, 'Modern Family Lighting Service', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/4035.542782086503'),
(112, 179, 'JB Lighting Service JB Lighting ServiceJB Lighting ServiceJB Lighting ServiceJB Lighting ServiceJB Lighting Service', 'lighting', '{"Light Fixing","Bulb Repair","Sink Unclogging","Toilet Bowl Replacement"}', 10, 'JB Lighting Service', 'live', 'https://handymandy.s3.ap-southeast-1.amazonaws.com/2719.2482271574913');
