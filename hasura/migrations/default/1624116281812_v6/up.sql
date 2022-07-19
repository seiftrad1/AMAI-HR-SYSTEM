SET check_function_bodies = false;
CREATE TABLE public."Candidate" (
    id integer NOT NULL,
    "Name" text NOT NULL,
    "Last_Name" text NOT NULL,
    "Email" text,
    domain text NOT NULL,
    phone_number text,
    "Status" integer
);
CREATE SEQUENCE public."Candidate_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Candidate_id_seq" OWNED BY public."Candidate".id;
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
CREATE TABLE public."Todo" (
    id integer NOT NULL,
    "Name" text NOT NULL,
    "Description" text NOT NULL,
    "Date" timestamp with time zone NOT NULL,
    "Completed" boolean,
    user_id integer
);
CREATE SEQUENCE public."Todo_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Todo_id_seq" OWNED BY public."Todo".id;
CREATE TABLE public."User" (
    id integer NOT NULL,
    "Name" text NOT NULL,
    "Role" text,
    created_at timestamp with time zone,
    last_seen timestamp with time zone,
    password text NOT NULL,
    email text,
    "Avatar" text,
    "Last_Name" text,
    "Domain" text,
    "Phone_Number" text,
    last_seen_url text
);
CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
CREATE TABLE public.notification (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    seen boolean NOT NULL,
    user_id integer
);
CREATE SEQUENCE public.notification_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.notification_id_seq OWNED BY public.notification.id;
ALTER TABLE ONLY public."Candidate" ALTER COLUMN id SET DEFAULT nextval('public."Candidate_id_seq"'::regclass);
ALTER TABLE ONLY public."Task" ALTER COLUMN task_id SET DEFAULT nextval('public."Task_task_id_seq"'::regclass);
ALTER TABLE ONLY public."Todo" ALTER COLUMN id SET DEFAULT nextval('public."Todo_id_seq"'::regclass);
ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
ALTER TABLE ONLY public.notification ALTER COLUMN id SET DEFAULT nextval('public.notification_id_seq'::regclass);
ALTER TABLE ONLY public."Candidate"
    ADD CONSTRAINT "Candidate_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_pkey" PRIMARY KEY (task_id);
ALTER TABLE ONLY public."Todo"
    ADD CONSTRAINT "Todo_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.notification
    ADD CONSTRAINT notification_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public."Todo"
    ADD CONSTRAINT "Todo_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
ALTER TABLE ONLY public.notification
    ADD CONSTRAINT notification_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE RESTRICT ON DELETE RESTRICT;
