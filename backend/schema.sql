DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
        CREATE TYPE user_role AS ENUM ('admin', 'staff');
    END IF;
END
$$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'message_status') THEN
        CREATE TYPE message_status AS ENUM ('new', 'read', 'archived');
    END IF;
END
$$;

DO $$
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'quote_status') THEN
        CREATE TYPE quote_status AS ENUM ('new', 'reviewing', 'quoted', 'accepted', 'rejected');
    END IF;
END
$$;

CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    role user_role NOT NULL DEFAULT 'admin',
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS contact_messages (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    email VARCHAR(255) NOT NULL,
    subject VARCHAR(160) NOT NULL,
    message TEXT NOT NULL,
    status message_status NOT NULL DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quote_requests (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(120) NOT NULL,
    company_email VARCHAR(255) NOT NULL,
    company_name VARCHAR(160),
    job_title VARCHAR(160),
    project_summary TEXT NOT NULL,
    budget_range VARCHAR(80) NOT NULL,
    timeline_goal VARCHAR(80) NOT NULL,
    status quote_status NOT NULL DEFAULT 'new',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS quote_request_expertise (
    id SERIAL PRIMARY KEY,
    quote_request_id INTEGER NOT NULL REFERENCES quote_requests(id) ON DELETE CASCADE,
    expertise_name VARCHAR(160) NOT NULL
);

CREATE TABLE IF NOT EXISTS services (
    id SERIAL PRIMARY KEY,
    title VARCHAR(160) NOT NULL,
    description TEXT NOT NULL,
    icon VARCHAR(80),
    category VARCHAR(120),
    is_active BOOLEAN NOT NULL DEFAULT TRUE,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pricing_plans (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    description TEXT NOT NULL,
    price VARCHAR(80) NOT NULL,
    billing_type VARCHAR(80),
    is_popular BOOLEAN NOT NULL DEFAULT FALSE,
    cta_text VARCHAR(80) NOT NULL DEFAULT 'Get Started',
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS pricing_plan_features (
    id SERIAL PRIMARY KEY,
    pricing_plan_id INTEGER NOT NULL REFERENCES pricing_plans(id) ON DELETE CASCADE,
    feature VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS faqs (
    id SERIAL PRIMARY KEY,
    question VARCHAR(255) NOT NULL,
    answer TEXT NOT NULL,
    page VARCHAR(80) NOT NULL DEFAULT 'general',
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS testimonials (
    id SERIAL PRIMARY KEY,
    client_name VARCHAR(120) NOT NULL,
    client_position VARCHAR(120),
    company_name VARCHAR(160),
    message TEXT NOT NULL,
    image_url VARCHAR(500),
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS team_members (
    id SERIAL PRIMARY KEY,
    name VARCHAR(120) NOT NULL,
    role VARCHAR(120) NOT NULL,
    bio TEXT,
    image_url VARCHAR(500),
    sort_order INTEGER NOT NULL DEFAULT 0,
    is_active BOOLEAN NOT NULL DEFAULT TRUE
);

CREATE TABLE IF NOT EXISTS uploaded_files (
    id SERIAL PRIMARY KEY,
    quote_request_id INTEGER NOT NULL REFERENCES quote_requests(id) ON DELETE CASCADE,
    file_name VARCHAR(255) NOT NULL,
    file_url VARCHAR(500) NOT NULL,
    file_type VARCHAR(120),
    uploaded_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contact_messages_status ON contact_messages(status);
CREATE INDEX IF NOT EXISTS idx_quote_requests_status ON quote_requests(status);
CREATE INDEX IF NOT EXISTS idx_services_active ON services(is_active);
CREATE INDEX IF NOT EXISTS idx_faqs_page ON faqs(page);
