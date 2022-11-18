-- -------------------------------------------------------------
-- TablePlus 5.1.0(468)
--
-- https://tableplus.com/
--
-- Database: handymandy
-- Generation Time: 2022-11-18 15:27:46.9800
-- -------------------------------------------------------------


-- This script only contains the table creation statements and does not fully represent the table in the database. It's still missing: indices, triggers. Do not use it as a backup.

-- Table Definition
CREATE TABLE "public"."users_auth" (
    "username" varchar(20) NOT NULL DEFAULT 'unique'::character varying,
    "password" varchar NOT NULL,
    "newid" uuid NOT NULL
);

INSERT INTO "public"."users_auth" ("username", "password", "newid") VALUES
('howard', '$2b$12$99.HHHainxNZ/mO1FC1LQOCDyoPN9GWvtdztsTFcJNYhMdXoMCd0u', '39ea5f5f-6c0c-4873-90ec-97a897df63e1'),
('leonard', '$2b$12$fQ1TaDHxIxNCbMNMFXhRX.23R4OC3fFEeWqOB./mXk48M1t7JzCA6', '6b06cc41-fcfa-4ccb-8582-ec3084bc78a3'),
('cristianocr7', '$2b$12$0yt0/RfXuXE7oorVdu4Y6eSxOagppLvFHBWk3xF.nGspSD3rs9oyy', '82cf544f-e375-45a0-8644-c0a305d37e95'),
('sheldon', '$2b$12$DsXuvW5XzenP8yFKaU7EeeJEjSxXkjZWoaVm2WUFy/fsDRUvsczx6', '0af8190f-c1ba-4085-9dc0-ea14c5b4d293'),
('sexydesmond', '$2b$12$Ls22ryoPhSTu16Jp2NST3uCfW6ylFefrr3/BoxSJ5p4OH7ujGBT/6', '4f32a1cf-202d-4695-86df-de5455df8e4b'),
('handsomedamien', '$2b$12$o4ajdF/ciHjn1WlweCzlVeRdFqPHNkVUfSl9pyoTo6YeayxZMYx8a', '8b67639a-a70f-40fd-ad8d-0b9453c3857c'),
('michaelscott', '$2b$12$SrAcJr3t6cyderZsvKz7gO1gksfZRWH8M/35lnwO1A5FT1WVPK8SS', '742f347d-8731-4380-bd0a-e9c5416032ad'),
('dwightschrute', '$2b$12$Lk24U.0FA/sZxq6LU4q3.ewAkky2bBIiAIqoTTtLPEsmt6w0oZtVS', 'bd160939-cd6e-43b5-a85b-5f03cebdc61c'),
('top', '$2b$12$MERO3WRS8MiVKrTIa9old.zvYgG1WwRQUGp6tRJK.IaBF29gopNyi', 'c62edc95-451f-41a1-8aed-d5af4ee32ccc'),
('xi', '$2b$12$8ch1Fn9zFk3wNhnmlAlAYeHSTaBDZE/E5RfNQeB6t1Nhljfv1sR1u', '72bf535f-6f26-474f-9c02-a65e39ad8bae'),
('taeyang', '$2b$12$.csPekJylwNTlens1R7Vl.mMqCAoe20V.eGTB4KpbQbYX4Q38FtQ6', 'e7625ca9-be76-4dee-930d-53e579cf3be8'),
('tangyi', '$2b$12$I7yYoF4xc6UlZ.KmxdYlnuJFoVxwCOWL4or0znAJsLgg4Gqqui7GK', '2598bee9-2983-4bab-89eb-88acfdd28ee9'),
('scofield', '$2b$12$BB26N3dvvMw388QZlFbge.OSqzpsdEvNGJS7LMvwo4pnk24d8xk.K', 'f67af874-56ba-430e-9d4c-53bff978cbf6'),
('kanye', '$2b$12$erK0ZnZGKUgKfdGwPnfF7eY5ktTQ3axn17r0ERFxAkeOhsis7UaGS', '254c9d2e-65ef-4de1-949a-5ec4cf8c2287'),
('bayc', '$2b$12$OHUtGrjePmcpvkbbxvvNq.DKEgT2KVkiUSxEg4AhkTPkcz9l8PvAK', '9ea669c2-4556-430b-98e8-312e280a4f45'),
('jimmy91', '$2b$12$yXEm9ouOGkrnTeZVKCvX/.Jc/rDV1Kcm2jve9mAOSKl7Me0RLauAO', '29ace60d-4447-4023-a815-9a3b4f20449e'),
('robert', '$2b$12$4W7dJWgK3oCvqEu2fAGSRu/3iCHZ19/V744EdzyzNzM5JVWPi9xVy', '5ff9dd39-ad35-4349-8fdd-59f6408e0129'),
('cameron', '$2b$12$sp11ahcklVCiQ9Nhpkqp0ONQTVK/CqMyZsXD98e17VYuAHXqrKMM6', '52d582ea-5cf7-4e6e-93e3-08f8f487677b'),
('phil', '$2b$12$XK.7UpV0K7.QhhiQgH6H3es539DyYIEU8az4RURIWhK2hD4mnXXlK', 'e3c080d0-35fe-4eb3-a5c7-92b723593269'),
('testhandyman', '$2b$12$NBmMJWeaHw9TLKto.ftOr.xhtjaeXSBAxlHYyVW72ruEB35AnmT4i', '1b22caca-1450-4842-b0f0-001b0db4ebcb'),
('handymantest1', '$2b$12$b3lsJSeftY5LsBnOykTbu.TK7vWl1ON3ueCXmUgrkGC9XQ24T3.uK', 'e0e90068-aeab-49d7-a0d4-c0b4866581f0'),
('justin', '$2b$12$unaR9QrGz0v/RyWGFzPQFeQUxWgkdmxjRzMcAI01upc7PWmcWrBcC', '21224057-6931-425a-abdc-3eedc3a47467'),
('invisiblefriend', '$2b$12$PQaI0UypYW5wqQzKIp0X0evTHJodPTBHGgR/3M4W2HXpj2TNBRoxq', 'bebdcdf4-92ee-4259-b4c5-6b515248c451');
