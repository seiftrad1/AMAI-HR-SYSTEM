SET check_function_bodies = false;
CREATE FUNCTION public.set_current_timestamp_updated_at() RETURNS trigger
    LANGUAGE plpgsql
    AS $$
DECLARE
  _new record;
BEGIN
  _new := NEW;
  _new."updated_at" = NOW();
  RETURN _new;
END;
$$;
CREATE TABLE public."Candidate" (
    id integer NOT NULL,
    "Name" text NOT NULL,
    "Last_Name" text NOT NULL,
    "Email" text,
    domain text NOT NULL,
    phone_number text,
    "Status" integer,
    "File" text,
    joined timestamp with time zone
);
CREATE SEQUENCE public."Candidate_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Candidate_id_seq" OWNED BY public."Candidate".id;
CREATE TABLE public."Event" (
    id integer NOT NULL,
    "Title" text NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone,
    description text,
    file text
);
CREATE SEQUENCE public."Event_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Event_id_seq" OWNED BY public."Event".id;
CREATE TABLE public."Project" (
    id integer NOT NULL,
    "Title" text NOT NULL,
    "Description" text NOT NULL,
    created_at timestamp without time zone DEFAULT now() NOT NULL,
    income text,
    contact_date timestamp without time zone,
    company_name text,
    type text,
    file text,
    assigned boolean,
    delivery_date timestamp without time zone,
    status integer,
    updated_at timestamp with time zone
);
CREATE SEQUENCE public."Project_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Project_id_seq" OWNED BY public."Project".id;
CREATE TABLE public."Task" (
    id integer NOT NULL,
    name text NOT NULL,
    completed boolean NOT NULL,
    "Project_id" integer,
    "Description" text,
    "Date" timestamp with time zone,
    user_id integer
);
CREATE SEQUENCE public."Task_task_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."Task_task_id_seq" OWNED BY public."Task".id;
CREATE TABLE public."Todo" (
    id integer NOT NULL,
    "Name" text NOT NULL,
    "Description" text NOT NULL,
    "Date" timestamp with time zone,
    "Type" text,
    "Member" text
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
    last_seen_url text,
    "LinkedIn" text,
    "Github" text,
    "Site" text,
    "File" text,
    status boolean
);
CREATE SEQUENCE public."User_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public."User_id_seq" OWNED BY public."User".id;
CREATE TABLE public.leave (
    id integer NOT NULL,
    start_date timestamp without time zone NOT NULL,
    end_date timestamp without time zone NOT NULL,
    reason text NOT NULL,
    file text,
    count_d integer NOT NULL,
    user_id integer NOT NULL,
    status integer
);
CREATE SEQUENCE public.leave_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.leave_id_seq OWNED BY public.leave.id;
CREATE TABLE public.notification (
    id integer NOT NULL,
    name text NOT NULL,
    description text NOT NULL,
    seen boolean NOT NULL,
    user_id integer,
    created_at timestamp with time zone
);
CREATE SEQUENCE public.notification_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.notification_id_seq OWNED BY public.notification.id;
CREATE TABLE public.todo_user (
    id integer NOT NULL,
    user_id integer,
    todo_id integer NOT NULL,
    completed boolean
);
CREATE SEQUENCE public.todo_user_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
ALTER SEQUENCE public.todo_user_id_seq OWNED BY public.todo_user.id;
ALTER TABLE ONLY public."Candidate" ALTER COLUMN id SET DEFAULT nextval('public."Candidate_id_seq"'::regclass);
ALTER TABLE ONLY public."Event" ALTER COLUMN id SET DEFAULT nextval('public."Event_id_seq"'::regclass);
ALTER TABLE ONLY public."Project" ALTER COLUMN id SET DEFAULT nextval('public."Project_id_seq"'::regclass);
ALTER TABLE ONLY public."Task" ALTER COLUMN id SET DEFAULT nextval('public."Task_task_id_seq"'::regclass);
ALTER TABLE ONLY public."Todo" ALTER COLUMN id SET DEFAULT nextval('public."Todo_id_seq"'::regclass);
ALTER TABLE ONLY public."User" ALTER COLUMN id SET DEFAULT nextval('public."User_id_seq"'::regclass);
ALTER TABLE ONLY public.leave ALTER COLUMN id SET DEFAULT nextval('public.leave_id_seq'::regclass);
ALTER TABLE ONLY public.notification ALTER COLUMN id SET DEFAULT nextval('public.notification_id_seq'::regclass);
ALTER TABLE ONLY public.todo_user ALTER COLUMN id SET DEFAULT nextval('public.todo_user_id_seq'::regclass);
ALTER TABLE ONLY public."Candidate"
    ADD CONSTRAINT "Candidate_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Event"
    ADD CONSTRAINT "Event_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Project"
    ADD CONSTRAINT "Project_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."Todo"
    ADD CONSTRAINT "Todo_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public."User"
    ADD CONSTRAINT "User_pkey" PRIMARY KEY (id);
ALTER TABLE ONLY public.leave
    ADD CONSTRAINT leave_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.notification
    ADD CONSTRAINT notification_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.todo_user
    ADD CONSTRAINT todo_user_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_Project_id_fkey" FOREIGN KEY ("Project_id") REFERENCES public."Project"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public."Task"
    ADD CONSTRAINT "Task_user_id_fkey" FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.leave
    ADD CONSTRAINT leave_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.notification
    ADD CONSTRAINT notification_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.todo_user
    ADD CONSTRAINT todo_user_todo_id_fkey FOREIGN KEY (todo_id) REFERENCES public."Todo"(id) ON UPDATE CASCADE ON DELETE CASCADE;
ALTER TABLE ONLY public.todo_user
    ADD CONSTRAINT todo_user_user_id_fkey FOREIGN KEY (user_id) REFERENCES public."User"(id) ON UPDATE CASCADE ON DELETE CASCADE;
