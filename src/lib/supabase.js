import { createClient } from '@supabase/supabase-js';

// These values come from your Supabase project settings
// Go to: Project Settings > API > Project URL and anon/public key
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
    console.warn(
        'Supabase credentials not found. Please add VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY to your .env file.'
    );
}

export const supabase = createClient(
    supabaseUrl || 'https://placeholder.supabase.co',
    supabaseAnonKey || 'placeholder-key'
);

/**
 * Add an email to the waitlist
 * @param {string} email - The email to add
 * @returns {Promise<{success: boolean, error?: string}>}
 */
export async function addToWaitlist(email) {
    try {
        // Check if email already exists
        const { data: existing } = await supabase
            .from('waitlist')
            .select('email')
            .eq('email', email.toLowerCase())
            .single();

        if (existing) {
            return { success: false, error: 'This email is already on the waitlist!' };
        }

        // Insert new email
        const { error } = await supabase
            .from('waitlist')
            .insert([
                {
                    email: email.toLowerCase(),
                    created_at: new Date().toISOString(),
                }
            ]);

        if (error) {
            console.error('Supabase error:', error);
            return { success: false, error: 'Something went wrong. Please try again.' };
        }

        return { success: true };
    } catch (err) {
        console.error('Waitlist error:', err);
        return { success: false, error: 'Connection error. Please try again.' };
    }
}
