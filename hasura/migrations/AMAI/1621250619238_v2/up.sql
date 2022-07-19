SET check_function_bodies = false;
CREATE TABLE public."Task" (
    task_id integer NOT NULL,
    name text NOT NULL,
    completed boolean NOT NULL,
    user_id integer
);
CREATE SEQUENCE public."Task_task_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Task_task_id_seq" OWNED BY public."Task".task_id;
CREATE TABLE public."User" (
    id integer NOT NULL,
    "Name" text NOT NULL,
    "Role" text,
    created_at timestamp with time zone,
    last_seen timestamp with time zone,
    password text NOT NULL,
    email text
);
CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
ALTER TABLE ONLY public."Task" ALTER COLUMN task_id SET DEFAULT nextval('public."Task_task_id_seq"'::regclass);
ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_pkey" PRIMARY KEY (task_id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
