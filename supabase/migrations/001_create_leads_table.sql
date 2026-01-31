-- Hone Labs Website - Leads Table
-- Simple schema for contact form submissions

CREATE TABLE IF NOT EXISTS leads (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    name TEXT NOT NULL,
    email TEXT NOT NULL,
    company TEXT,
    message TEXT,
    source TEXT DEFAULT 'website',
    status TEXT DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'qualified', 'closed')),
    created_at TIMESTAMPTZ DEFAULT now(),
    updated_at TIMESTAMPTZ DEFAULT now()
);

-- Index for quick lookups
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created ON leads(created_at DESC);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Public can insert (for contact form)
CREATE POLICY "Anyone can submit a lead" ON leads
    FOR INSERT
    WITH CHECK (true);

-- Only authenticated (you) can read/update
CREATE POLICY "Authenticated can view leads" ON leads
    FOR SELECT TO authenticated
    USING (true);

CREATE POLICY "Authenticated can update leads" ON leads
    FOR UPDATE TO authenticated
    USING (true);

-- Newsletter subscribers (optional)
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    email TEXT UNIQUE NOT NULL,
    subscribed_at TIMESTAMPTZ DEFAULT now(),
    is_active BOOLEAN DEFAULT true
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe" ON newsletter_subscribers
    FOR INSERT
    WITH CHECK (true);

CREATE POLICY "Authenticated can view subscribers" ON newsletter_subscribers
    FOR SELECT TO authenticated
    USING (true);
