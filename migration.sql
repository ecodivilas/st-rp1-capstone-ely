-- CREATE DATABASE
CREATE DATABASE humbly;

-- CREATE&DEFINE TABLE
CREATE TABLE IF NOT EXISTS public.users
(
    user_id integer NOT NULL,
    email character varying(320) COLLATE pg_catalog."default" NOT NULL,
    password character varying(100) COLLATE pg_catalog."default" NOT NULL,
    first_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    -- middle_name character varying(50) COLLATE pg_catalog."default",
    last_name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    mobile_number character varying(15) COLLATE pg_catalog."default" NOT NULL,
    birthdate date,
    -- gender character varying(50) COLLATE pg_catalog."default",
    -- address_id integer NOT NULL,
    type_id integer NOT NULL,
    created_at timestamp without time zone NOT NULL DEFAULT 'now()',
    updated_at timestamp without time zone NOT NULL DEFAULT 'now()',
    archieved_at timestamp without time zone,
    deleted_at timestamp without time zone,
    CONSTRAINT users_pkey PRIMARY KEY (user_id),
    CONSTRAINT unique_email UNIQUE (email)
);

-- CREATE SEQUENCE FOR USERID AUTO-INCREMENT
CREATE SEQUENCE IF NOT EXISTS public.users_id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1
    OWNED BY users.user_id;

-- ALTER TABLE USER IN USER_ID COLUMN AND SET DEFAULT TO THE SEQUENCE
ALTER TABLE users ALTER COLUMN user_id SET DEFAULT nextval('users_id_seq'::regclass);

-- CREATE DEFAULT ADMIN/TEST ACCOUNT
INSERT INTO users(email, password, first_name, last_name, mobile_number, birthdate, type_id)
VALUES('test@gmail.com', 'sample_password', 'Ely', 'Buendia', '+63123456789', '26-01-1998', 1);