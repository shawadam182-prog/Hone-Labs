import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types
export interface Lead {
  id?: string;
  name: string;
  email: string;
  company?: string;
  message?: string;
  source?: string;
  created_at?: string;
}

export interface NewsletterSubscriber {
  id?: string;
  email: string;
  subscribed_at?: string;
  is_active?: boolean;
}

// Submit a lead from contact form
export async function submitLead(lead: Omit<Lead, 'id' | 'created_at'>) {
  const { data, error } = await supabase
    .from('leads')
    .insert([{ ...lead, source: 'website' }])
    .select()
    .single();

  if (error) throw error;
  return data;
}

// Subscribe to newsletter
export async function subscribeNewsletter(email: string) {
  const { data, error } = await supabase
    .from('newsletter_subscribers')
    .insert([{ email }])
    .select()
    .single();

  if (error) {
    // Handle duplicate email gracefully
    if (error.code === '23505') {
      return { alreadySubscribed: true };
    }
    throw error;
  }
  return data;
}
